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

## Checkbox persistence & shared progress — read this once

Two layers, **zero setup for anyone**:

1. **Your browser (instant):** every tick saves to localStorage the moment
   you click — refresh-proof, works offline. Notes persist the same way.
2. **The shared store (team-wide):** all pages automatically read and write
   **one common JSON file** hosted on a free public JSON-storage service
   (URL in `sprint/config.js` → `sharedStore.url`). Tick anywhere → it's
   in the shared file ~2 seconds later → every other link, browser, device
   or teammate sees it on their next page load (pages also self-refresh
   every ~45 s). Merging is per-task, newest change wins, so simultaneous
   ticks never clobber each other; un-ticking syncs too.

So: open the dashboard in any browser on any device — same progress. No
accounts, no tokens, nothing to connect.

Honest trade-offs of the free shared store:
- The store URL is unguessable but not private — anyone who has our page
  link could in principle change ticks. The data is only task-ids and
  true/false, no personal info; acceptable for a team checklist.
- It's a free third-party service. If it's ever unreachable, the status
  line says so, your ticks keep saving locally, and everything re-syncs
  on the next change. If it ever disappears for good: create a new bin
  (`POST {}` to `https://extendsclass.com/api/json-storage/bin`), put the
  new URL in `config.js`, push — then use "Export my progress" from the
  person with the most complete browser state to refill it.
- Clearing browser data only loses local state — the team's shared file
  still has everything, and the page pulls it right back.

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
