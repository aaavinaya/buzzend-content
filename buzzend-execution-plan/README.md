# Buzzend Execution Plan

The operational system for executing the approved Buzzend strategy over
30 days. Everything here is derived from — and consistent with — the two
source documents at the repo root:

1. `../BUZZEND_GROWTH_PRODUCT_STRATEGY_2026_FINAL.md` (v2.0) — **the
   strategy.** All § references across this folder point into it.
2. `../BUZZEND_30_DAY_EXECUTION_PLAN.md` — the original day-by-day
   working plan that this folder expands into a full execution system.

If anything here ever seems to contradict those documents, the strategy
wins — and the discrepancy should be recorded in
`REORGANIZATION_CHANGELOG.md` (known, deliberate deviations are already
listed there).

## What lives where

| File | Use it for | Use it when |
|---|---|---|
| `BUZZEND_30_DAY_EXECUTION_MASTER.md` | The full day-by-day plan: objective, exact actions, content spec, distribution, metrics, dependencies, priority, done-when per day | Planning the day; whenever "what exactly do I do?" comes up |
| `DAILY_EXECUTION_CHECKLIST.md` | Checkbox version of the same 30 days | Every morning + end-of-day tick-off |
| `CONTENT_PRODUCTION_PLAN.md` | Pillars, video formula, the asset register (V01…R-5, ST-*, store assets), hook bank, CTA + repurposing strategy | Producing or scheduling any content |
| `SOCIAL_MEDIA_EXECUTION.md` | Per-platform strategy + the day-by-day publishing schedule | Posting; deciding platform-specific format/caption |
| `KPI_TRACKING.md` | Every metric: definition, why, source, cadence, target, warning threshold, action-if-below | Setting up tracking (Days 4/7/20); logging daily; diagnosing |
| `WEEKLY_REVIEW_SYSTEM.md` | The four week-end review frameworks (Days 7, 14, 21, 30) | Sunday/last-day of each week |
| `CONTENT_ASSET_INDEX.md` | Master index of everything in the content library and where it's used | Finding any existing asset |
| `REORGANIZATION_CHANGELOG.md` | What was moved/archived/deleted in the library, decisions, conflicts, open issues | Understanding why the repo looks the way it does |

**Interactive site:** `site/index.html` — the whole system as a browsable
dashboard (day-by-day checklists with progress saved in the browser,
streak strip, content register, publishing schedule, KPIs, reviews).
Open the file directly in any browser; no server needed.

Working files you create during the month also live here:
`POSITIONING.md` (Day 1), `ICP.md` (Day 2), `COMPETITORS.md` (Day 3),
`reviews/week-N.md` (Days 7/14/21/30), `MONTH_1_REPORT.md` (Day 30),
plus a `hooks-inbox` note (any format) for verbatim user phrases.

## How to run the plan (the daily loop)

1. Open `DAILY_EXECUTION_CHECKLIST.md` at today's day.
2. Anything unclear → the same day in `BUZZEND_30_DAY_EXECUTION_MASTER.md`
   has the exact actions.
3. Producing content → spec is in `CONTENT_PRODUCTION_PLAN.md`; where and
   when to post is in `SOCIAL_MEDIA_EXECUTION.md`.
4. From Day 7: log yesterday's numbers first (columns and sources in
   `KPI_TRACKING.md`), reply to every comment, then post.
5. Week ends (Days 7, 14, 21, 30): run the matching review in
   `WEEKLY_REVIEW_SYSTEM.md`.

## Relationship to `buzzend-content` (the rest of this repo)

- **This folder = the system** (what to do, when, and how to measure it).
- **The content library = the assets** (brand kit, templates, rendered
  posts, store assets, video, render pipeline) — mapped file-by-file in
  `CONTENT_ASSET_INDEX.md`, with build instructions in the repo
  `README.md` and design rules in `brand/design-guide.md`.

Execution files never go into the content folders; finished content
assets never go into this folder.

## Non-negotiables carried from the strategy

- Activation = a completed successful AI workout (§19) — the KPI that
  everything optimizes.
- Winner rule (§33): store visits → installs → first workouts. Never
  likes.
- §40: never fake or edit a rep count. §7: banned-claims list applies to
  every caption and store line.
- Month 1 = learning: $0–100 budget, no paid ads, no influencers, no new
  features, no kids/school pivot (§47).
