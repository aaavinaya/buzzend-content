# Buzzend — Content library & marketing repo

> **Read everything in your browser:** open [`index.html`](index.html) —
> every document in this repo, rendered and searchable, no markdown
> viewer needed. Rebuild it after editing docs with
> `node tools/build-index.mjs`.

Marketing content for the Buzzend app, built on the app's shipped
**Energy Orange** design language. Contains the brand kit, the week-1
social campaign, App Store / Google Play assets, the launch teaser video,
the render pipeline — and the operational 30-day execution system in
[`buzzend-execution-plan/`](buzzend-execution-plan/README.md).

## Source-of-truth strategy documents

- `BUZZEND_GROWTH_PRODUCT_STRATEGY_2026_FINAL.md` — the approved growth &
  product strategy (v2.0). All marketing follows this.
- `BUZZEND_30_DAY_EXECUTION_PLAN.md` — the day-by-day working plan derived
  from §26 of the strategy.
- `buzzend-marketing/` — **the current marketing operating system** for
  the 3-person team: research-backed platform playbooks, hook system,
  pillars, calendar, routines, templates. Start at its README.
- `buzzend-execution-plan/` — the earlier solo-operator execution system
  (master plan, checklists, KPI tracking, interactive site). Superseded
  for daily ops by `buzzend-marketing/`; kept as reference.

## What's here

```
buzzend-content/
├── BUZZEND_GROWTH_PRODUCT_STRATEGY_2026_FINAL.md   Strategy (source of truth)
├── BUZZEND_30_DAY_EXECUTION_PLAN.md                30-day working plan
├── buzzend-execution-plan/    Operational execution system (see its README)
├── brand/
│   ├── brand.css              Brand tokens + reusable components (phone, pills, chips)
│   ├── design-guide.md        Design contract for building new posts (read first)
│   └── overview.html          One-card brand overview (960×540)
├── assets/
│   ├── app-icon.png           App icon (from the iOS project)
│   ├── fonts/                 Inter + Nunito (local woff2 — no external requests)
│   ├── screens-clean/         App screens in Energy Orange with DEMO NAMES ONLY
│   │                          (prototype captures + sanitized app recreations —
│   │                          safe to publish)
│   ├── screens/               Raw device screenshots (reference ONLY — real
│   │                          account data, never publish these)
│   └── app-mock/              HTML recreations of app screens used to produce
│                              the sanitized `real-*.png` and `ai-counter.png`
│                              clean screens (edit-*.html + ai-counter.html)
├── social-media/
│   ├── week1-content-calendar.md   Day-by-day captions, hashtags, posting times
│   ├── templates/             dayN-feed.html (1080×1080) · dayN-story.html (1080×1920)
│   └── rendered/              Final week-1 PNGs, ready to post
├── store-assets/
│   ├── ios/                   App Store screenshots — 6.9" 1320×2868 and
│   │                          6.5" 1284×2778 (App Store Connect requires the
│   │                          6.5" set when the 6.9" slot isn't offered)
│   ├── android/               Play screenshots (24-bit, no alpha), one folder
│   │                          per Play Console slot — upload folder as-is:
│   │                          phone/ 1080×1920 · tablet-7/ 1080×1920 ·
│   │                          tablet-10/ 1440×2560 (10" slot needs sides ≥1080)
│   │                          plus feature-graphic-1024x500.png, app-icon-512.png
│   └── templates/             store-shot.html (parametric via query params),
│                              feature-graphic.html, and jobs-*.json render
│                              params for every shot/size
├── video/
│   ├── teaser.html            13s animated launch teaser (CSS animation)
│   └── teaser-1080x1920.mp4   Ready for TikTok / Reels / Stories
├── tools/                     Render pipeline (Playwright):
│   ├── shoot.mjs              Renders any HTML template → PNG (jobs JSON)
│   ├── record.mjs             Records teaser.html → webm video
│   └── capture-workout.mjs    Captures the prototype's AI workout screen
└── archive/                   Superseded/intermediate files kept for safety
                               (see archive/README.md)
```

## Week-1 campaign map

| Day | Theme | Feed | Story/TikTok |
|----|--------|------|--------------|
| 1 Mon | Launch — "Fitness is better with friends." | day1-feed.png | day1-story.png |
| 2 Tue | Challenges — "Challenge your crew." | day2-feed.png | day2-story.png |
| 3 Wed | AI workouts — "It counts your reps." | day3-feed.png | day3-story.png |
| 4 Thu | Beat-It — "Think you can beat it?" | day4-feed.png | day4-story.png |
| 5 Fri | Streaks — "Don't break the chain." | day5-feed.png | day5-story.png |
| 6 Sat | Community — "Find your people." | day6-feed.png | day6-story.png |
| 7 Sun | Recap — "Your week, counted." | day7-feed.png | day7-story.png |

Files live in `social-media/rendered/`. Captions for every platform:
`social-media/week1-content-calendar.md` (fill in `[APP-STORE-LINK]`,
`[PLAY-STORE-LINK]`, `[@HANDLE]` before posting).

## Making a new post

1. Copy the closest `social-media/templates/dayN-*.html`, swap the
   kicker/headline/sub/CTA text and the screenshot
   (`assets/screens-clean/`). Rules in `brand/design-guide.md`.
2. Render with the pipeline (from `tools/`, which has Playwright installed):

```bash
node tools/shoot.mjs <jobs.json>
```

   where jobs.json is
   `[{"url":"file:///…/social-media/templates/my-post.html",
   "out":"…/social-media/rendered/my-post.png","width":1080,"height":1080,"scale":1}]`
   — see `store-assets/templates/jobs-*.json` for working examples.

3. For new app screenshots: serve the design repo
   (`cd "Buzzend Design/docs" && python3 -m http.server 8123`) and capture at
   viewport 360×800, scale 3, with localStorage
   `{"buzzend-palette":"energyorange","buzzend-font":"inter"}` and CSS
   `.state-switch,.theme-toggle{display:none!important}` injected.
   The prototype's demo data contains no real names.

## Hard rules

- Never publish anything from `assets/screens/` (raw device shots, real
  account data).
- Only `assets/screens-clean/` in outward-facing material. Approved demo
  identities: Ema William, Adesh Pokhrel, Kiran Shah, Riya, etc.
- All assets are local; templates must not reference external URLs.
- Marketing claims follow strategy §7 (no "perfect form", "guaranteed",
  "world's first", "medical-grade") and §40 (never fake or edit a rep
  count in any demo).
