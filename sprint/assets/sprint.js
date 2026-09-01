/* Shared state + helpers for the sprint dashboard and day pages.
   Persistence: localStorage (per browser/device — see README limitations).
   State shape: { "<taskId>": { done: true, ts: 1712345678901 }, ... }      */
(function () {
  const KEY = 'buzzend-sprint-v1';
  const NOTES_KEY = 'buzzend-sprint-notes-v1';

  function load(k) {
    try { return JSON.parse(localStorage.getItem(k)) || {}; } catch { return {}; }
  }
  function save(k, obj) {
    try { localStorage.setItem(k, JSON.stringify(obj)); } catch {}
  }

  const S = {
    data: window.SPRINT_DATA,
    cfg: window.SPRINT_CONFIG,
    state: load(KEY),
    notes: load(NOTES_KEY),

    isDone(id) { return !!(this.state[id] && this.state[id].done); },
    toggle(id) {
      if (this.isDone(id)) delete this.state[id];
      else this.state[id] = { done: true, ts: Date.now() };
      save(KEY, this.state);
    },
    getNote(k) { return this.notes[k] || ''; },
    setNote(k, v) { this.notes[k] = v; save(NOTES_KEY, this.notes); },

    tasksFor(dayN, person) {
      const d = this.data.days.find(x => x.n === dayN);
      return d && d.people[person] ? d.people[person].tasks : [];
    },
    // progress: {done,total,pct} — filter by person and/or day
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

    // ── no-backend sync: export my browser's state, merge a teammate's ──
    exportState() {
      return JSON.stringify({ v: 1, exported: new Date().toISOString(), state: this.state });
    },
    importState(text) {
      let obj; try { obj = JSON.parse(text); } catch { return { ok: false, msg: 'Not valid JSON.' }; }
      const incoming = obj.state || obj; let merged = 0;
      for (const [id, val] of Object.entries(incoming)) {
        if (!val || !val.done) continue;
        if (!this.state[id] || (val.ts || 0) > (this.state[id].ts || 0)) { this.state[id] = val; merged++; }
      }
      save(KEY, this.state);
      return { ok: true, msg: `Merged ${merged} completed task(s). Refresh to see them.` };
    },
  };

  window.Sprint = S;
})();
