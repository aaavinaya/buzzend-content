# Day 25 — Gaurab

**Objective:** Follow a click all the way to an install with real numbers at every step, name the leakiest step in writing, and keep our community standing warm.
**Total time:** ~2.5h

## Task 1 · 🔥 Technical funnel check — clicks vs store visits vs installs (90–110 min)

**Why:** We track link clicks, store visits, and installs in three different places and have never lined them up. The step that loses the most people is where the cheapest win of the sprint is hiding.
**Where:** Browser + play.google.com/console + App Store Connect + Growth Tracker.
**Tools:** https://winjee-dev.firebaseio.com/sprint/links.json, Play Console, ASC, Growth Tracker (`Sprint2-Baseline`, `Daily Numbers`), `buzzend-marketing/13-analytics/metrics-for-beginners.md` (the funnel hierarchy).

**Steps:**
1. Pick a clean window: Days 16–24. Pull `/go/ios` and `/go/android` click counts for the window from links.json (running total now minus the Day-16 baseline number).
2. Pull the same window from the consoles: store listing visitors and installs for Play; product page views and installs for iOS from ASC.
3. Build the conversion table in the `Sprint2-Baseline` tab under a "Funnel check — Day 25" heading, one row per store: **link clicks → store visits → installs**, with the percentage at each arrow.
4. Read it honestly: clicks can undercount (people who search the store directly never touch `/go/` links) and visitors include non-click sources — write these caveats under the table so nobody over-reads it.
5. Circle the leakiest step (the biggest percentage drop) and write a short note for **READY/**, dated "Day 25 — funnel leak": which step, both stores' numbers, and one no-budget idea to test against it (e.g. leak at click→visit points at broken/slow links; leak at visit→install points at the listing itself — screenshots, first lines, rating).
6. Test both `/go/` links from your own phone end-to-end while you're at it: tap → correct store page loads. Log the result; a broken redirect would explain a lot.

**Deliverable:** The funnel conversion table in the tracker + the leakiest-step note in READY/.
**Done when:** Both stores have every step filled (or an explicit "no data"), the caveats are written, and READY/ has the dated note naming one step.
**Depends on:** —

## Task 2 · 🟡 Community participation round — help only (40–50 min)

**Why:** Between announcement days, the account has to keep being a member, not a billboard. Rounds like this are why the announcement days work at all.
**Where:** The top-ranked communities in `buzzend-marketing/12-community/where-were-welcome.md`.
**Tools:** Reddit + Discord accounts, `buzzend-marketing/12-community/community-playbook.md`, Growth Tracker.

**Steps:**
1. Check every thread you've touched this sprint (Days 19, 21, 23) and reply to anyone who responded — these come first.
2. Answer 2–3 new beginner questions properly (staying consistent, counting reps, home setups). Zero links, zero app mentions unless someone directly asks what you use — then one honest line with disclosure.
3. Join one ongoing conversation like a regular — react, add a real opinion, no agenda.
4. Log the round in the tracker next to the earlier community notes.

**Deliverable:** All open threads answered + 2–3 new genuine answers, logged.
**Done when:** No reply to us sits unanswered and today's log shows zero unprompted promo.
**Depends on:** —
