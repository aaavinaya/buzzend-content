# Buzzend — Social media content kit

Marketing content for the Buzzend app (Facebook · Instagram · TikTok), built on
the app's shipped **Energy Orange** design language. Week-1 launch campaign:
7 days × (feed post + story/TikTok visual) + captions + an animated teaser video.

## What's here

```
buzzend-content/
├── DESIGN-GUIDE.md        Design contract for building new posts (read first)
├── brand/brand.css        Brand tokens + reusable components (phone, pills, chips)
├── assets/
│   ├── app-icon.png       App icon (from the iOS project)
│   ├── fonts/             Inter + Nunito (local woff2 — no external requests)
│   ├── screens-clean/     App screens in Energy Orange with DEMO NAMES ONLY
│   │                      (captured from the design prototype — safe to publish)
│   ├── screens/           Raw device screenshots (reference ONLY — real names,
│   │                      never publish these)
│   └── app-mock/          HTML mocks of app screens (ai-counter)
├── templates/             dayN-feed.html (1080×1080) · dayN-story.html (1080×1920)
├── rendered/              Final PNGs, ready to post
├── copy/week1-content-calendar.md   Day-by-day captions, hashtags, posting times
└── video/
    ├── teaser.html        13s animated teaser (CSS animation)
    ├── teaser-1080x1920.mp4   Ready for TikTok / Reels / Stories
    └── record.mjs         Records teaser.html → video via Playwright
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

Captions for every platform: `copy/week1-content-calendar.md`
(fill in `[APP-STORE-LINK]`, `[PLAY-STORE-LINK]`, `[@HANDLE]` before posting).

## Making a new post

1. Copy the closest `templates/dayN-*.html`, swap the kicker/headline/sub/CTA
   text and the screenshot (`assets/screens-clean/`). Rules in DESIGN-GUIDE.md.
2. Render (needs `npm i playwright` + `npx playwright install chromium-headless-shell`
   in a working dir, plus the `shoot.mjs` helper — see below):

```js
// shoot.mjs input: [{"url":"file:///…/templates/my-post.html",
//   "out":"…/rendered/my-post.png","width":1080,"height":1080,"scale":1}]
```

3. For new app screenshots: serve the design repo
   (`cd "Buzzend Design/docs" && python3 -m http.server 8123`) and capture at
   viewport 360×800, scale 3, with localStorage
   `{"buzzend-palette":"energyorange","buzzend-font":"inter"}` and CSS
   `.state-switch,.theme-toggle{display:none!important}` injected.
   The prototype's demo data contains no real names.

## Hard rules

- Never publish anything from `assets/screens/` (raw device shots, real names).
- Only `assets/screens-clean/` in outward-facing material.
- All assets are local; templates must not reference external URLs.
