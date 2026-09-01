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
