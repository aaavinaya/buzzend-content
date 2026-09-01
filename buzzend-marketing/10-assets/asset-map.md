# Asset map & audit — what we already have and what to do with it

Audited 2026-08-23, every file inspected. Assets stay in their current
repo locations because the render pipeline (`../../tools/shoot.mjs`) and
templates depend on those paths — this file is the map. Dispositions:
**USE AS-IS · MODIFY · REPURPOSE · IMPROVE · ARCHIVE · DELETE.**

## Strategy & plans

| Asset | Where | Verdict | Why |
|---|---|---|---|
| Growth & Product Strategy 2026 (v2.0) | repo root | **USE AS-IS** | Source of truth; research confirmed its direction. All § refs point here |
| 30-Day Execution Plan | repo root | **REPURPOSE** | Written for one solo operator; its day logic and § mapping fed this system's calendar/routines. Keep as reference, don't run it as-is with 3 people |
| `buzzend-execution-plan/` (9 docs + site) | repo root | **REPURPOSE** | The solo-operator operating system this team system grew from. Its KPI doc, checklists and the interactive site remain useful reference; the TEAM runs `buzzend-marketing/` |

## Ready-to-publish content

| Asset | Where | Verdict | Why |
|---|---|---|---|
| 14 week-1 posts (7 feed 1080×1080 + 7 story 1080×1920) | `../../social-media/rendered/` | **USE AS-IS** (as support) | On-brand, demo-name-safe, finished. Use as Stories + FB feed posts per the calendar. NOT a substitute for video — statics don't prove the counter works |
| Week-1 captions/calendar | `../../social-media/week1-content-calendar.md` | **MODIFY** | Captions are good and platform-native; fill `[APP-STORE-LINK]`/`[PLAY-STORE-LINK]`/`[@HANDLE]` first (Week-1 setup task). Its FB emphasis predates the strategy — FB is now a mirror, not a pillar |
| 13s animated teaser | `../../video/teaser-1080x1920.mp4` | **USE AS-IS** | Ready vertical video; good Story/Short filler in week 1. It's brand-style, not proof-style — don't lean on it beyond launch |
| Editable post templates (14 HTML) | `../../social-media/templates/` | **USE AS-IS** | The static-graphics factory: copy one, swap text/screenshot, render (repo README explains). P2's carousel/story tool |

## Store presence

| Asset | Where | Verdict | Why |
|---|---|---|---|
| iOS screenshots (6.5" + 6.9" sets) | `../../store-assets/ios/` | **IMPROVE** (scheduled) | Current sets use campaign captions; when we know the winning hook, re-render captions toward the strategy's §25 conversion sequence. Pipeline + jobs files exist |
| Android sets (phone/7"/10" per Play slot) | `../../store-assets/android/` | **IMPROVE** (same) | Same as iOS; folders map 1:1 to Play Console slots |
| Feature graphic + Play icon | `../../store-assets/android/` | **MODIFY if teal** | Verify it's Energy Orange before the next Play update; re-render from `feature-graphic.html` if it's the old teal brand |
| store-shot.html + jobs-*.json | `../../store-assets/templates/` | **USE AS-IS** | Parametric screenshot factory — edit JSON, run shoot.mjs, done |

## Raw material

| Asset | Where | Verdict | Why |
|---|---|---|---|
| Clean app screens (15, demo names) | `../../assets/screens-clean/` | **USE AS-IS** | The ONLY app imagery allowed in public content. Demo identities (Ema William, Adesh Pokhrel, Kiran Shah) are approved |
| Raw device screenshots (43) | `../../assets/screens/` | **USE AS-IS (internal only)** | Layout reference ONLY — real account data. **NEVER publish anything from this folder** |
| App-mock HTML generators | `../../assets/app-mock/` | **USE AS-IS** | Regenerate sanitized screens when app UI changes |
| Brand kit (brand.css, design-guide.md) | `../../brand/` | **USE AS-IS** | The design contract for every graphic. P2 reads design-guide.md before making anything |
| Fonts, app icon | `../../assets/` | **USE AS-IS** | Used by all templates |
| Render pipeline (shoot/record/capture) | `../../tools/` | **USE AS-IS** | Turns any HTML template into PNGs; needed for statics + store shots |

## Already archived (previous audit — decisions stand)

| Asset | Verdict | Why |
|---|---|---|
| `../../archive/teaser-raw.webm` | **ARCHIVE** (done) | Intermediate recording, regenerable |
| `../../archive/website-debug-scripts/` | **ARCHIVE** (done) | Belong to the website project |
| Duplicate record.mjs, android.zip, empty icons dir | **DELETE** (done) | Byte-duplicate / regenerable packaging / empty |

## What we DON'T have yet (the real gaps this plan fills)

1. **Real demo footage** — no video of an actual person with the counter
   running. This is Week-1's most important production task; nothing
   converts without it.
2. **Screen recordings of the app counting** — the counter overlay is
   our core content format (see research).
3. **A link-in-bio page + tracked links** — Week-1 setup, P3.
4. **UGC** — none yet; the community playbook starts generating it.

## Big-file rule

Video footage (raw takes, exports) does NOT go in this git repo — use
the shared drive (`buzzend-footage/`). This repo holds the system,
templates, and finished small assets only.
