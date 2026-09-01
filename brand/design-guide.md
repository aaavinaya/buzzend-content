# Buzzend — Week-1 social campaign design guide

Guide for building the day-N social templates. Read this fully, then read the two
exemplars before writing anything: `social-media/templates/day1-feed.html` and
`social-media/templates/day1-story.html`. Your files must follow the exact same
structure, class names and quality bar.

## Product & tone

Buzzend is a social fitness app: challenges with friends, daily streaks, live
leaderboards, and an **AI camera that counts your reps** (pose detection, camera
verification — "no honor system"). Tone: energetic, confident, playful —
never corporate. Short punchy headlines; subs are one or two friendly sentences.

## Brand (Energy Orange — the shipped app palette)

All tokens live in `brand/brand.css` — link it as `../../brand/brand.css` and use
the CSS variables; never hard-code other colors. Font is Inter (loaded locally
by brand.css — no external URLs of any kind).

- `--primary` #ff6b00 · `--primary-deep` #e25a00 · `--accent` #ff9f43
- Cream light surfaces: `--canvas` #fff8f2, `--surface-alt` #ffe8d6, `--border` #f5ddc8
- `--ink` #222222, `--text-secondary` #6b7280
- Dark: `--dark-canvas` #111111, `--dark-surface` #1a1a1a
- `--gold` #f7b733 (podium/achievements), `--green` #14bb4c (success)
- Gradients: `--hero-grad` (orange), `--hero-grad-deep` (dark ombré → orange)

Reusable classes from brand.css: `.canvas`, `.glow`, `.lockup`, `.pill`,
`.phone` + `.screen` (phone mockup with notch), `.chip` (floating white callout).

## Files you create

For day N you write exactly two files (nothing else):

- `social-media/templates/dayN-feed.html` — 1080×1080 (Instagram + Facebook feed)
- `social-media/templates/dayN-story.html` — 1080×1920 (IG Stories/Reels cover + TikTok + FB story)

First line of each file must be the card marker comment, matching the exemplar:
`<!-- @dsCard group="Week 1 · Feed posts" -->` for feeds,
`<!-- @dsCard group="Week 1 · Stories" -->` for stories.

Structure requirements (match the exemplar):
- `<meta charset="utf-8">`, `<title>` naming the day and size
- `body { width/height exact; overflow: hidden; }` and a single `.canvas` div
- Logo lockup (`../../assets/app-icon.png` + word "Buzzend")
- Kicker pill: `DAY N · FEATURE-NAME`
- Headline ≤ 3 short lines, weight 900, tight letter-spacing, one `<em>` word
  in an accent color (em is `font-style: normal`)
- Sub: 1–2 sentences, weight 500–600, comfortable line-height
- One CTA pill
- Phone mockup with the day's app screenshot, tilted ±4–5°, cropped by a canvas
  edge (phone must run off the canvas, never float fully inside)
- One floating `.chip` callout near the phone (emoji + short stat)
- Two `.glow` blobs for depth

Screenshots: `../../assets/screens-clean/<name>.png` — 1080×2400 (aspect 0.45).
In the exemplar pattern the `.screen` height crops the bottom of the shot.
These screens contain ONLY safe demo names (Ema William, Adesh Pokhrel, Riya…).

## Hard rules

- No real person names anywhere. Never use "Avinaya" or screenshots from
  `assets/screens/` (raw device shots) — only `assets/screens-clean/`.
- No external resources (no Google Fonts URLs, no CDN, no http(s) images).
- Text must never clip or collide with the phone — check widths (copy column
  ≈ 560px wide at left margin 72px on feeds).
- Feed safe margins 72px; story: keep critical text between y≈300 and y≈1650.
- Don't run render/screenshot commands — rendering happens centrally.
- Emoji are fine (⚡ 🔥 🏆 🥇 👑 📈) — used sparingly, one per pill/chip.

## Day-by-day art direction

| Day | Theme | Background | Screen asset | Kicker pill style |
|----|--------|-----------|--------------|-------------------|
| 1 | Launch | `--hero-grad` orange | `home.png` | glass (white 16%) — done |
| 2 | Challenges | light cream (`#fff` → `--canvas` → `#ffeede`) | `challenge.png` | `--primary` bg, white text |
| 3 | AI workouts | dark (`#111` → `#2b1200`) | `ai-counter.png` | `--primary` bg, white text |
| 4 | Beat-It / leaderboards | peach (`--surface-alt` tint gradient) | `activity.png` | `--ink` bg, white text |
| 5 | Streaks | light cream with warm `--gold` glows | `streak.png` | `--gold` bg, ink text |
| 6 | Community | light cream with `--primary`+`--accent` glows | `discover.png` | `--primary` bg, white text |
| 7 | Weekly recap / download | `--hero-grad` orange | `profile.png` | glass (white 16%) |

Suggested copy (tighten if you can do better — keep meaning):

- Day 2 — headline "Challenge your *crew*." · sub "Create a 30-day challenge and
  invite your friends. The camera counts every rep automatically — no honor
  system." · CTA "Start a challenge ⚡" · chip "🏆 245 members · ranked by reps"
- Day 3 — headline "It counts your *reps*." · sub "Point the camera at yourself
  and go. AI pose detection tracks every squat, push-up and jumping jack —
  hands-free." · CTA "Try an AI workout" · chip "⚡ 12 reps · counted live"
- Day 4 — headline "Think you can *beat it*?" · sub "Post your best set. Your
  friends get one camera-verified shot to top it — the live leaderboard settles
  it." · CTA "Take the podium 🥇" · chip "👑 Adesh · 4k reps"
- Day 5 — headline "Don't break the *chain*." · sub "One quick workout a day
  keeps the flame alive. 10 push-ups, 10 squats or 3,000 steps — your pick." ·
  CTA "Start day one 🔥" · chip "🔥 47-day streak"
- Day 6 — headline "Find your *people*." · sub "Trending challenges every week.
  Join with a code, follow friends, and cheer every rep." · CTA "Join a
  challenge" · chip "🏃 Sunrise Squats · 88 joining"
- Day 7 — headline "Your week, *counted*." · sub "Every rep, step and streak in
  one place. Start Monday with your crew on Buzzend." · CTA "Download free" ·
  chip "📈 47 days · 14 challenges"

Dark/orange backgrounds: white text, `#ffe3c9`-family em. Light backgrounds:
`--ink` text, `--primary` em, `--text-secondary` subs. Always check contrast.
