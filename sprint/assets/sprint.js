/* Shared state + helpers for the sprint dashboard and day/person pages.

   Two layers, zero setup:
   1. localStorage — every tick saves instantly in this browser (works offline).
   2. Shared store — ONE common JSON file on a free public JSON-storage
      service (URL in config.js → sharedStore.url). Every page pulls it on
      load and every ~45s, and pushes a merged copy ~2s after you tick.
      Open any link on any device: same progress. No accounts, no tokens.

   Merge rule: per task, the newest change wins ({done, ts} — done:false
   entries are kept as tombstones so un-ticking syncs too).               */
(function () {
  const KEY = 'buzzend-sprint-v1';
  const NOTES_KEY = 'buzzend-sprint-notes-v1';

  function load(k) {
    try { return JSON.parse(localStorage.getItem(k)) || {}; } catch { return {}; }
  }
  function save(k, obj) {
    try { localStorage.setItem(k, JSON.stringify(obj)); } catch {}
  }
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
      Store.schedulePush();
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

    // manual fallback (offline / store outage)
    exportState() {
      return JSON.stringify({ v: 1, exported: new Date().toISOString(), state: this.state });
    },
    importState(text) {
      let obj; try { obj = JSON.parse(text); } catch { return { ok: false, msg: 'Not valid JSON.' }; }
      const n = mergeInto(this.state, obj.state || obj);
      save(KEY, this.state);
      Store.schedulePush();
      return { ok: true, msg: `Merged ${n} update(s).` };
    },
  };

  // ── shared store sync (no accounts, no tokens) ─────────────────────
  const Store = {
    timer: null,
    poll: null,
    pushing: false,
    listeners: [],
    lastStatus: { level: 'off', text: 'shared store not configured' },

    get url() { return (S.cfg.sharedStore && S.cfg.sharedStore.url) || ''; },
    get enabled() { return !!this.url; },

    onStatus(fn) { this.listeners.push(fn); fn(this.lastStatus); },
    setStatus(level, text) {
      this.lastStatus = { level, text };
      this.listeners.forEach(fn => fn(this.lastStatus));
    },

    async fetchRemote() {
      const r = await fetch(this.url, { cache: 'no-store' });
      if (r.status === 404) return {};   // key not written yet
      if (!r.ok) throw new Error('store read failed (' + r.status + ')');
      try {
        const j = JSON.parse(await r.text());
        return (j && typeof j === 'object' && !Array.isArray(j)) ? j : {};
      } catch { return {}; }
    },

    // pull remote → merge → cb(changed); if we hold newer/extra ticks, push them up
    async pull(cb) {
      if (!this.enabled) return;
      try {
        this.setStatus('busy', 'syncing…');
        const remote = await this.fetchRemote();
        const changed = mergeInto(S.state, remote);
        if (changed) save(KEY, S.state);
        const weAreAhead = Object.entries(S.state).some(
          ([id, v]) => !remote[id] || (v.ts || 0) > (remote[id].ts || 0));
        if (weAreAhead) this.schedulePush();
        else this.setStatus('ok', 'shared ✓ everyone sees this progress');
        if (cb) cb(changed);
      } catch (e) {
        this.setStatus('err', 'store unreachable — ticks saved locally, will re-sync');
      }
    },

    schedulePush() {
      if (!this.enabled) return;
      clearTimeout(this.timer);
      this.setStatus('busy', 'saving to shared store…');
      this.timer = setTimeout(() => this.push(), 2000);
    },

    async push() {
      if (!this.enabled || this.pushing) return;
      this.pushing = true;
      try {
        // merge remote first so parallel teammates never get clobbered
        let remote = {};
        try { remote = await this.fetchRemote(); } catch {}
        if (mergeInto(S.state, remote)) save(KEY, S.state);
        // Firebase REST: PUT replaces the /sprint branch with our merged state
        const r = await fetch(this.url, { method: 'PUT', body: JSON.stringify(S.state) });
        if (!r.ok) throw new Error('store write failed (' + r.status + ')');
        this.setStatus('ok', 'shared ✓ ' + new Date().toLocaleTimeString());
      } catch (e) {
        this.setStatus('err', 'store unreachable — ticks saved locally, will re-sync');
      } finally { this.pushing = false; }
    },

    // pages call this once: initial pull + background refresh every 45s
    start(onChange) {
      if (!this.enabled) { this.setStatus('off', 'shared store not configured'); return; }
      this.pull(onChange);
      clearInterval(this.poll);
      this.poll = setInterval(() => { if (!document.hidden) this.pull(onChange); }, 45000);
    },
  };

  S.store = Store;
  window.Sprint = S;
})();
