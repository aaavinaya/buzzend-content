// Sprint configuration — the ONLY file with team/app specifics.
// Fill the placeholders on Day 1 (Avinaya · Task 3), commit, push.
window.SPRINT_CONFIG = {
  sprintName: 'Buzzend — 15-Day Growth Sprint',
  // First day of the sprint, YYYY-MM-DD. Drives "today" highlighting.
  startDate: '2026-09-01',
  appStoreUrl: 'https://apps.apple.com/app/buzzend/id1658683882',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.inventechgroup.buzzend',
  handles: {
    instagram: '@buzzend.official',
    tiktok: '', // no account found — confirm
    youtube: '@buzzendofficial',
    facebook: 'Buzzend',
  },
  // One common shared store for the whole team — every page reads/writes
  // this URL automatically. Zero per-person setup. Lives in the team's own
  // Firebase Realtime Database (project winjee-dev, instance "winjee-dev"),
  // rules allow ONLY the /sprint branch. Managed in the Firebase console.
  sharedStore: { url: 'https://winjee-dev.firebaseio.com/sprint.json' },
  people: [
    { id: 'avinaya', name: 'Avinaya', role: 'Lead · iOS · ASO · analytics · coordination' },
    { id: 'gaurab', name: 'Gaurab', role: 'Android · Play Store · recordings · community' },
    { id: 'riya', name: 'Riya', role: 'QA · content · Canva · research · engagement' },
  ],
};
