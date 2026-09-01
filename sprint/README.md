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

## Checkbox persistence — read this once, carefully

Ticks are saved in your browser's **localStorage** (key
`buzzend-sprint-v1`) the moment you click. Refresh, close the tab, come
back next week — still ticked. Notes boxes persist the same way.

**The limitation:** localStorage is per browser, per device.
Avinaya's ticks live in Avinaya's browser; Gaurab and Riya don't see
them automatically. GitHub Pages is static hosting — there is no server
to share state through, and no way around that without a backend.

**Our no-backend answer — Sync codes:** on the dashboard, hit
**Export my progress** (copies a small code), paste it in the team chat;
teammates hit **Import pasted code** and your completed tasks merge into
their view (newest tick wins, nothing is deleted). Do it at the end of
each day and everyone's dashboard shows the full team picture.

Also because it's browser storage:
- **Clearing site data / private windows** erase ticks → export your code
  to the chat regularly; importing it restores everything.
- **New device/browser** starts at 0% → import your last exported code.

If one day you want true real-time shared state, that needs some backend
(even a free one — e.g. a tiny Firebase/Supabase table or GitHub Issues
as checklists). Not needed for a 3-person sprint with sync codes.

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
