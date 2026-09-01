# Buzzend — Content Asset Index

Master index of the reorganized `buzzend-content` repo (this repo's root).
Statuses: `READY` (usable now) · `PUBLISHED` (already live somewhere) ·
`REFERENCE` (internal only, never publish) · `ARCHIVED`.
"Exec day" = the day in `BUZZEND_30_DAY_EXECUTION_MASTER.md` that uses it.

## Strategy & docs

| File | Purpose | Exec day | Status |
|---|---|---|---|
| `BUZZEND_GROWTH_PRODUCT_STRATEGY_2026_FINAL.md` | Source-of-truth strategy (v2.0) | Days 1–3 reading | READY |
| `BUZZEND_30_DAY_EXECUTION_PLAN.md` | Original working plan (expanded by the master) | all | READY |
| `README.md` | Repo map + pipeline how-to + hard rules | — | READY |
| `buzzend-execution-plan/` | This execution system (see its README) | all | READY |

## Brand

| File | Purpose | Platform | Exec day | Status |
|---|---|---|---|---|
| `brand/brand.css` | Energy Orange tokens + reusable components (phone, pill, chip, glow) | all templates | any new asset | READY |
| `brand/design-guide.md` | Design contract for building new posts — read before creating any template | — | any new asset | READY |
| `brand/overview.html` | One-card brand overview (960×540) | internal | — | READY |

## Social media — Week-1 launch campaign

| File | Purpose | Platform | Campaign | Exec day | Status |
|---|---|---|---|---|---|
| `social-media/week1-content-calendar.md` | Day-by-day captions, hashtags, posting times (fill `[APP-STORE-LINK]`, `[PLAY-STORE-LINK]`, `[@HANDLE]` first) | IG · FB · TikTok | Week-1 launch | Days 7–13 support | READY |
| `social-media/templates/day1–7-feed.html` (7 files) | Editable 1080×1080 feed post sources | IG/FB feed | Week-1 launch | new statics | READY |
| `social-media/templates/day1–7-story.html` (7 files) | Editable 1080×1920 story sources | IG Story · TikTok | Week-1 launch | new statics | READY |
| `social-media/rendered/day1-feed.png` … `day7-feed.png` | Final feed statics: launch / challenges / AI / beat-it / streaks / community / recap | IG/FB feed | Week-1 launch | Day 7 FB mirror; feed support | READY |
| `social-media/rendered/day1-story.png` … `day7-story.png` | Final story statics (same 7 themes) | IG Story · TikTok | Week-1 launch | ST-1…ST-5 slots (Days 7–27) | READY |

## Video

| File | Purpose | Platform | Exec day | Status |
|---|---|---|---|---|
| `video/teaser-1080x1920.mp4` | 13 s animated launch teaser (TZ-1) | TikTok · Reels · Stories · Shorts | Days 7–9 filler | READY |
| `video/teaser.html` | Animated source of the teaser (re-record with `tools/record.mjs`) | — | — | READY |

## App screens (marketing imagery)

| File | Purpose | Exec day | Status |
|---|---|---|---|
| `assets/screens-clean/home.png` · `challenge.png` · `activity.png` · `streak.png` · `discover.png` · `profile.png` · `leaderboard.png` · `challenges-list.png` · `community.png` · `capture.png` · `ai-counter.png` | Prototype captures, Energy Orange, demo names — safe to publish; used by day templates + store shots | any visual | READY |
| `assets/screens-clean/real-ai.png` · `real-challenge.png` · `real-streak.png` · `real-stats.png` | Sanitized recreations of real app screens (demo identities painted in via `assets/app-mock/edit-*.html`) — used by current store screenshots | Days 16–17 | READY |
| `assets/app-mock/ai-counter.html` + `landmark-squat.gif` | HTML mock that generates the AI-counter clean screen | regenerating screens | READY |
| `assets/app-mock/edit-challenge.html` · `edit-stats.html` · `edit-streak.html` + `edit-common.css` | Generators of the `real-*.png` sanitized screens | regenerating screens | READY |
| `assets/screens/` (43 device PNGs) | Raw device screenshots with real account data — layout reference ONLY | — | **REFERENCE — never publish** |
| `assets/app-icon.png` | App icon | profiles, templates | READY |
| `assets/fonts/` | Inter + Nunito woff2 (local — keeps templates offline) | all templates | READY |

## Store assets (App Store / Google Play)

| File | Purpose | Exec day | Status |
|---|---|---|---|
| `store-assets/ios/01…07-*-1284x2778.png` (7) | App Store 6.5" set — what App Store Connect currently accepts | Day 16 | READY |
| `store-assets/ios/01…07-*-1320x2868.png` (7) | App Store 6.9" set (kept for when ASC offers the slot) | Day 16 | READY |
| `store-assets/android/phone/` (7 × 1080×1920) | Play phone slot — upload folder as-is | Day 17 | READY |
| `store-assets/android/tablet-7/` (7 × 1080×1920) | Play 7" tablet slot | Day 17 | READY |
| `store-assets/android/tablet-10/` (7 × 1440×2560) | Play 10" tablet slot (needs sides ≥1080) | Day 17 | READY |
| `store-assets/android/feature-graphic-1024x500.png` | Play feature graphic — **verify it's Energy Orange before Day 17**; re-render from `feature-graphic.html` if teal | Day 17 | READY (verify) |
| `store-assets/android/app-icon-512.png` | Play icon | Day 17 | READY |
| `store-assets/templates/store-shot.html` | Parametric screenshot template (query params: theme/kicker/title/sub/screen) | Days 16–17 | READY |
| `store-assets/templates/feature-graphic.html` | Feature-graphic template | Day 17 | READY |
| `store-assets/templates/jobs-ios-1284x2778.json` | Render params for every iOS shot (for the 1320×2868 set, copy this file and change width/height/out) | Day 16 | READY |
| `store-assets/templates/jobs-android-1080x1920.json` · `jobs-android-1440x2560.json` | Render params for Android phone / 10" sets | Day 17 | READY |

Current store-shot captions ↔ §25 mapping (for the Day 16 rework):
existing set = social-campaign captions ("Fitness is better with
friends.", "It counts your reps." …). §25 wants the conversion sequence
("Your phone counts. You just move." …) — Day 16 decides caption by
caption; edit the jobs JSON, re-render, done.

## Tools (render pipeline)

| File | Purpose | Status |
|---|---|---|
| `tools/shoot.mjs` | HTML → PNG renderer (jobs JSON); powers all statics + store shots | READY |
| `tools/record.mjs` | Records `video/teaser.html` → webm | READY |
| `tools/capture-workout.mjs` | Captures the design prototype's AI-workout screen, brand-corrected | READY |
| `tools/package.json` + `node_modules` | Playwright environment — run all tools from `tools/` | READY |

## Archive

| File | Why archived | Status |
|---|---|---|
| `archive/teaser-raw.webm` | Raw intermediate recording; final mp4 exists; regenerable | ARCHIVED |
| `archive/website-debug-scripts/` (4 scripts) | One-off debug/test scripts for the website project (`localhost:4280`) — not part of this content pipeline | ARCHIVED |

## Quick "where do I find…" answers

- **Something to post today** → `SOCIAL_MEDIA_EXECUTION.md` schedule →
  asset ID → `CONTENT_PRODUCTION_PLAN.md` register.
- **Captions for the statics** → `social-media/week1-content-calendar.md`.
- **How to make a new visual** → `brand/design-guide.md`, then render per
  repo `README.md`.
- **Store screenshot changes** → edit `store-assets/templates/jobs-*.json`
  → `node tools/shoot.mjs <jobs>` → upload folder.
- **What's safe to publish** → `assets/screens-clean/` only; never
  `assets/screens/`.
