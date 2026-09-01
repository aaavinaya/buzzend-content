# Buzzend — 15-Day Growth Sprint

A day-by-day execution system for growing Buzzend: **15 days × 3 people
(Avinaya, Gaurab, Riya) = 45 task files**, plus an interactive dashboard
with progress bars and persistent checkboxes. No backend. Hosted on
GitHub Pages next to the rest of this repo.

**Open the dashboard:** `sprint/index.html`
(live: `https://aaavinaya.github.io/buzzend-content/sprint/`)

## What it's for

Increase Buzzend's visibility, get real users, improve App Store / Play
Store discoverability, grow the social accounts, and end the 15 days with
a repeatable process. Every task says exactly what to do, where, with
which tool, step by step — written for marketing beginners. Tasks lean on
the manuals in `buzzend-marketing/` and the finished assets already in
this repo; nothing is invented.

## Daily routine (2 minutes to start your day)

1. Open the dashboard → your column → today's day.
2. Read your **Objective**, open each task's **Step-by-step instructions**.
3. Do the task, put the deliverable where the task says.
4. Tick the checkbox. Progress bars update instantly.
5. If a task says **depends on**, check that teammate's page first.

Priorities: 🔥 must happen today · 🟡 important · 🟢 optional (the task
says why it's optional).

## How the system works

```
sprint/
├── index.html          Dashboard (progress, per-person bars, day grid, sync)
├── day.html            One page renders any day+person (?d=3&p=riya)
├── config.js           Store links, handles, sprint start date — EDIT THIS
├── assets/             sprint.css + sprint.js (state, progress, sync)
├── data/tasks.js       GENERATED — never edit by hand
├── days/day-01 … day-15/
│   └── avinaya.md · gaurab.md · riya.md   ← THE SOURCE OF TRUTH
├── AUTHORING.md        The exact task-file format
└── README.md           This file
```

- The **45 markdown files** are the single source of truth — readable and
  editable straight on GitHub.
- `tools/build-sprint.mjs` compiles them into `data/tasks.js`, which the
  dashboard and day pages render. The GitHub Action runs this build on
  every push, so **editing a markdown file and pushing updates the live
  site automatically**. (Locally: `node tools/build-sprint.mjs`.)
- Progress % = completed checkboxes ÷ total tasks (per person, per day,
  and overall). A day cell turns green at 100%.

## Checkbox persistence & team sync — read this once, carefully

Ticks are saved in your browser's **localStorage** the moment you click —
refresh-proof, offline-proof. Notes persist the same way. But localStorage
alone is per browser, per device: your teammates wouldn't see your ticks.

**Team sync (the recommended setup, still no backend):** the dashboard can
use **GitHub itself as the shared store**. Ticks are merged into
`sprint/progress.json` in this repo through the GitHub API, and every page
pulls the team state on load. One-time setup per person (~2 min):

1. GitHub → Settings → Developer settings → **Fine-grained tokens** →
   Generate new token.
2. Repository access: **Only select repositories** → `buzzend-content`.
3. Permissions → Repository → **Contents: Read and write**. Generate, copy.
4. Open the dashboard → *Team sync* card → paste → **Connect**.

The token lives only in that person's browser (never in the repo). After
connecting: tick anywhere → saved locally instantly → pushed to the repo a
couple of seconds later → teammates see it on their next page load or
**Sync now**. Merging is per-task, newest change wins, so nobody's ticks
ever get clobbered — and the repo's git history becomes an audit log of
progress. These progress commits deliberately do **not** trigger a site
redeploy.

Notes and honest limitations:
- Sync needs each person's token once per browser/device. No token = the
  system still works, just locally (plus the export/import fallback,
  now tucked under "Offline fallback" on the dashboard).
- It's "shared on refresh", not live-typing collaboration — plenty for a
  3-person daily checklist.
- Don't paste your token on a shared computer; revoke it on GitHub anytime.
- Clearing browser data removes your token + local ticks, but the team
  state survives in the repo — reconnect and it all comes back.

## Deploying / updating

Already wired into this repo's GitHub Pages deployment:

1. Edit any `days/day-NN/<person>.md` (or add tasks — follow AUTHORING.md).
2. Commit and push to `main`.
3. The Action rebuilds `data/tasks.js` and redeploys the site (~1-2 min).

If a push breaks the format, the Action fails with a message naming the
exact file and problem — fix and push again.

## Adding Day 16+

1. Create `days/day-16/` with `avinaya.md`, `gaurab.md`, `riya.md`
   (copy any existing file as a template — keep the format).
2. Push. That's it — the build discovers day folders automatically and
   the dashboard grows a row. Checkbox IDs are per-day, so existing
   progress is untouched.

## Editing config

`sprint/config.js` holds the sprint start date (drives the "Today: Day N"
highlight), store URLs, and social handles. Day 1 includes a task to fill
it in. Task text never hardcodes links — it says "the link from config.js".
