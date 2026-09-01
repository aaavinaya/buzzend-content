/* Shared state + helpers for the sprint dashboard and day/person pages.
   Local persistence: localStorage (instant, per browser).
   Team sync (no backend): sprint/progress.json in the GitHub repo,
   read/written via the GitHub Contents API with a personal token that
   each teammate pastes once (stored only in their own browser).
   State shape: { "<taskId>": { done: true|false, ts: 1712345678901 } }
   (done:false entries are "tombstones" so un-ticking also syncs).      */
(function () {
  const KEY = 'buzzend-sprint-v1';
  const NOTES_KEY = 'buzzend-sprint-notes-v1';
  const TOKEN_KEY = 'buzzend-sprint-gh-token';

  function load(k) {
    try { return JSON.parse(localStorage.getItem(k)) || {}; } catch { return {}; }
  }
  function save(k, obj) {
    try { localStorage.setItem(k, JSON.stringify(obj)); } catch {}
  }
  // newest timestamp wins, per task — safe for concurrent teammates
  function mergeInto(target, incoming) {
    let changed = 0;
    for (const [id, val] of Object.entries(incoming || {})) {
      if (!val || typeof val.ts !== 'number') continue;
      if (!target[id] || val.ts > (target[id].ts || 0)) { target[id] = val; changed++; }
    }
    return changed;
  }

  const S = {
    data: window.SPRINT_DATA,
    cfg: window.SPRINT_CONFIG,
    state: load(KEY),
    notes: load(NOTES_KEY),

    isDone(id) { return !!(this.state[id] && this.state[id].done); },
    toggle(id) {
      this.state[id] = { done: !this.isDone(id), ts: Date.now() };
      save(KEY, this.state);
      GH.schedulePush();
    },
    getNote(k) { return this.notes[k] || ''; },
    setNote(k, v) { this.notes[k] = v; save(NOTES_KEY, this.notes); },

    progress(person, dayN) {
      let done = 0, total = 0;
      for (const d of this.data.days) {
        if (dayN && d.n !== dayN) continue;
        for (const p of Object.keys(d.people)) {
          if (person && p !== person) continue;
          for (const t of d.people[p].tasks) { total++; if (this.isDone(t.id)) done++; }
        }
      }
      return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
    },
    currentDay() {
      const s = this.cfg.startDate;
      if (!s || s.startsWith('PASTE')) return null;
      const diff = Math.floor((Date.now() - new Date(s + 'T00:00:00')) / 86400000) + 1;
      return diff >= 1 && diff <= this.data.days.length ? diff : null;
    },

    // manual fallback (kept for offline use)
    exportState() {
      return JSON.stringify({ v: 1, exported: new Date().toISOString(), state: this.state });
    },
    importState(text) {
      let obj; try { obj = JSON.parse(text); } catch { return { ok: false, msg: 'Not valid JSON.' }; }
      const n = mergeInto(this.state, obj.state || obj);
      save(KEY, this.state);
      return { ok: true, msg: `Merged ${n} update(s). Refresh to see them.` };
    },
  };

  // ── GitHub team sync ────────────────────────────────────────────────
  const GH = {
    timer: null,
    pushing: false,
    listeners: [],
    lastStatus: { level: 'off', text: 'Team sync off — set a GitHub token on the dashboard' },

    get token() { try { return localStorage.getItem(TOKEN_KEY) || ''; } catch { return ''; } },
    setToken(t) {
      try { t ? localStorage.setItem(TOKEN_KEY, t.trim()) : localStorage.removeItem(TOKEN_KEY); } catch {}
    },
    get enabled() { return !!this.token && !!(S.cfg.sync && S.cfg.sync.repo); },

    onStatus(fn) { this.listeners.push(fn); fn(this.lastStatus); },
    setStatus(level, text) {
      this.lastStatus = { level, text };
      this.listeners.forEach(fn => fn(this.lastStatus));
    },

    url() { return `https://api.github.com/repos/${S.cfg.sync.repo}/contents/${S.cfg.sync.path}`; },
    headers() {
      return { Authorization: 'Bearer ' + this.token, Accept: 'application/vnd.github+json',
               'X-GitHub-Api-Version': '2022-11-28' };
    },

    async fetchRemote() {  // -> {state, sha} | {state:null, sha:null} on 404
      const r = await fetch(this.url() + '?ref=' + S.cfg.sync.branch + '&t=' + Date.now(),
                            { headers: this.headers() });
      if (r.status === 404) return { state: null, sha: null };
      if (!r.ok) throw new Error('GitHub read failed (' + r.status + ')');
      const j = await r.json();
      let state = {};
      try { state = JSON.parse(decodeURIComponent(escape(atob(j.content.replace(/\n/g, ''))))); } catch {}
      return { state, sha: j.sha };
    },

    // pull remote → merge into local → cb(changed)
    async pull(cb) {
      if (!this.enabled) return;
      try {
        this.setStatus('busy', 'Syncing…');
        const { state } = await this.fetchRemote();
        const changed = state ? mergeInto(S.state, state) : 0;
        if (changed) save(KEY, S.state);
        this.setStatus('ok', 'Synced ✓ (team progress up to date)');
        if (cb) cb(changed);
      } catch (e) {
        this.setStatus('err', 'Sync failed: ' + e.message + ' — working locally');
      }
    },

    schedulePush() {
      if (!this.enabled) return;
      clearTimeout(this.timer);
      this.setStatus('busy', 'Saving to team…');
      this.timer = setTimeout(() => this.push(), 2000);
    },

    async push(retry = true) {
      if (!this.enabled || this.pushing) return;
      this.pushing = true;
      try {
        const remote = await this.fetchRemote();
        // merge remote in first so we never clobber teammates
        if (remote.state) { if (mergeInto(S.state, remote.state)) save(KEY, S.state); }
        const body = {
          message: 'sprint: progress update',
          content: btoa(unescape(encodeURIComponent(JSON.stringify(S.state, null, 1)))),
          branch: S.cfg.sync.branch,
        };
        if (remote.sha) body.sha = remote.sha;
        const r = await fetch(this.url(), { method: 'PUT', headers: this.headers(),
                                            body: JSON.stringify(body) });
        if ((r.status === 409 || r.status === 422) && retry) {  // raced a teammate
          this.pushing = false; return this.push(false);
        }
        if (!r.ok) throw new Error('GitHub write failed (' + r.status + ')');
        this.setStatus('ok', 'Synced ✓ ' + new Date().toLocaleTimeString());
      } catch (e) {
        this.setStatus('err', 'Sync failed: ' + e.message + ' — ticks are safe locally; will retry on next change');
      } finally { this.pushing = false; }
    },
  };

  S.gh = GH;
  window.Sprint = S;
})();
