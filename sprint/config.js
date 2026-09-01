// Sprint configuration — the ONLY file with team/app specifics.
// Fill the placeholders on Day 1 (Avinaya · Task 3), commit, push.
window.SPRINT_CONFIG = {
  sprintName: 'Buzzend — 15-Day Growth Sprint',
  // First day of the sprint, YYYY-MM-DD. Drives "today" highlighting.
  startDate: 'PASTE-START-DATE',
  appStoreUrl: 'PASTE-APP-STORE-LINK',
  playStoreUrl: 'PASTE-PLAY-STORE-LINK',
  handles: {
    instagram: 'PASTE-@HANDLE',
    tiktok: 'PASTE-@HANDLE',
    youtube: 'PASTE-@HANDLE',
    facebook: 'PASTE-PAGE',
  },
  // Team sync via GitHub API (no backend): progress.json lives in this repo.
  sync: { repo: 'aaavinaya/buzzend-content', branch: 'main', path: 'sprint/progress.json' },
  people: [
    { id: 'avinaya', name: 'Avinaya', role: 'Lead · iOS · ASO · analytics · coordination' },
    { id: 'gaurab', name: 'Gaurab', role: 'Android · Play Store · recordings · community' },
    { id: 'riya', name: 'Riya', role: 'QA · content · Canva · research · engagement' },
  ],
};
