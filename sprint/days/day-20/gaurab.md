# Day 20 — Gaurab

**Objective:** Get the first four Sprint-2 days into the tracker with a readable trend line, and make sure everything we've published this sprint actually plays right on Android.
**Total time:** ~2h

## Task 1 · 🔥 Data pull #1 — Days 16–19 into the tracker + trend note to READY/ (60–75 min)

**Why:** Sprint 2's whole promise is "scale acquisition" — the only way to know if it's happening is a daily line that gets read, not admired. This is the first of three pulls; small, regular, honest.
**Where:** Play Console + App Store Connect + browser + Growth Tracker `Daily Numbers` tab.
**Tools:** Play Console, ASC (access from Day 16), https://winjee-dev.firebaseio.com/sprint/links.json, Growth Tracker, `buzzend-marketing/13-analytics/metrics-for-beginners.md`.

**Steps:**
1. For each of Days 16–19, fill the `Daily Numbers` row: installs (both stores, from the consoles), link clicks (`/go/ios` + `/go/android` from the links.json URL — record the running totals and compute the per-day delta), and challenge joins (participant counts from the in-app challenge screens).
2. If ASC access still hasn't landed, fill the iOS install column from wherever you filled it on Day 16 and mark it — same fallback, no waiting.
3. Compare against the `Sprint2-Baseline` averages: are installs/day above, at, or below the 4–5/day Sprint-1 line?
4. Write a 3-line trend note — line 1: installs/day vs baseline; line 2: what moved most (clicks, joins, a store); line 3: the one thing the numbers suggest doing more of. Plain words, no chart needed.
5. Drop the trend note in the shared drive **READY/** folder, dated "Day 20 — data pull #1" — Avinaya reviews async; nothing waits on him.

**Deliverable:** Days 16–19 complete in `Daily Numbers` + the 3-line trend note in READY/.
**Done when:** All four daily rows are full (or explicitly "no data yet") and the dated note is in READY/.
**Depends on:** —

## Task 2 · 🟡 Android QA pass on every published Sprint-2 post (45–60 min)

**Why:** Half our audience sees our content on Android screens, and Sprint 1 taught us that captions and playback break quietly. A 45-minute pass catches what analytics never will.
**Where:** Instagram, TikTok, YouTube, Facebook apps on your Android phone (handles in `sprint/config.js`).
**Tools:** Android phone, Growth Tracker, the Day-12 "Android checks" list from Sprint 1.

**Steps:**
1. List every post published since Day 16 from the `Social` tab.
2. Open each one in its platform app on your phone — logged out or in a second account where possible, so you see what a stranger sees.
3. Run the Day-12 checks on each: video plays cleanly from the feed, captions legible at phone size (not cropped by UI), cover frame sensible, link/CTA present and tappable, sound levels sane.
4. Log a pass/fail line per post in the tracker `Notes` — post, platform, what's wrong if anything.
5. Anything broken becomes a follow-up, not a panic: note the exact fix needed ("re-upload with caption moved up 10%"), drop the note in **READY/** for whoever owns that post's platform, and move on. No product changes, no deleting posts on your own.

**Deliverable:** A pass/fail QA line for every Sprint-2 post + fix notes in READY/ where needed.
**Done when:** Every published Sprint-2 post has a logged verdict and every fail has a written follow-up.
**Depends on:** —
