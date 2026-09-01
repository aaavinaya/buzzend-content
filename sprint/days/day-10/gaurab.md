# Day 10 — Gaurab

**Objective:** Run the same before/after conversion audit on Play, start one real store-listing experiment, and hand Riya the leaderboard footage for her carousel.
**Total time:** ~2.5h

## Task 1 · 🔥 Play conversion audit + one store listing experiment (90–105 min)

**Why:** Play gives us what iOS doesn't — proper A/B experiments. If your Day-7 check found them available, today we stop guessing and let the store tell us which listing converts.
**Where:** play.google.com/console; `Store-Android` + `Experiments` tabs.
**Tools:** Play Console, Growth Tracker, `store-assets/android/feature-graphic-1024x500.png`, `store-assets/templates/feature-graphic.html`, `buzzend-marketing/16-templates/planning-templates.md` (template 13).

**Steps:**
1. In Play Console → Statistics, pull the same two windows as Avinaya: **A =** 7 days before the Day-2 listing change, **B =** the 7 days after.
2. Record into `Store-Android` for both: Store listing visitors, Store listing acquisitions, and the conversion rate (acquisitions ÷ visitors). Verdict: up / flat / down (under ~15% relative change = flat).
3. Check your Day-7 note: are Store listing experiments available for us (Grow → Store presence → Store listing experiments)?
4. **If yes:** create ONE experiment — a feature-graphic headline variant. Ping Avinaya early (he's in the render pipeline today anyway) to render the variant from `store-assets/templates/feature-graphic.html` with one changed headline — existing screens only, no new assets, no banned words. Set the split 50/50, metric = first-time installers, and start it.
5. **If no:** do the manual version — swap ONE thing (the feature graphic or the short description, not both) and write the exact swap date/time in `Store-Android` so the before/after windows stay clean.
6. Log the `Experiments` row (template 13): **Hypothesis** ("a benefit-led feature graphic lifts visitor→install conversion") → **Change** (old vs new, date) → **Metric to watch** (visitors→acquisitions over the next 7 days).

**Deliverable:** Before/after table + verdict in `Store-Android`; a running experiment (or dated manual swap); one `Experiments` row.
**Done when:** Both windows have every number and the experiment shows "running" in the console — or the manual swap is live with its date logged.
**Depends on:** —

## Task 2 · 🟡 Record the challenge leaderboard screen for Riya's carousel (30 min)

**Why:** Riya's "How the AI rep counter works" carousel ends on the payoff — your verified score on a real leaderboard. A real screen with real (cleared) names beats any mockup.
**Where:** Buzzend app on your Android phone.
**Tools:** Android screen recorder, yesterday's permission-cleared names list, team chat.

**Steps:**
1. Open the flagship "7-Day Squat Starter" leaderboard.
2. Check the frame against yesterday's cleared list — only names with an explicit yes may appear. Anyone else visible: re-record tighter or leave them off-screen.
3. Screen-record 10–15 seconds: a slow scroll down the leaderboard, steady hands.
4. Grab 2–3 clean stills of the best frames as well.
5. Send the video + stills to Riya (Drive/AirDrop) and drop them in team chat before midday — her carousel ships today.
6. Note the file location in the tracker so we can reuse the footage later.

**Deliverable:** 10–15s leaderboard recording + 2–3 stills, delivered to Riya before midday.
**Done when:** Riya confirms received, and every visible name is on the cleared list.
**Depends on:** Gaurab · Day 9 · Task 2 (the permission-cleared names list).
