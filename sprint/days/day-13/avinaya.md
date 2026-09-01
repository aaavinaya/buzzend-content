# Day 13 — Avinaya

**Objective:** Know whether the people we won are staying, park the re-engagement ideas somewhere safe for later, and thank every single person who reviewed us.
**Total time:** ~2.5h

## Task 1 · 🔥 Take the retention snapshot and write the future-ideas doc (75–90 min)

**Why:** Installs without retention is a leaky bucket — Day 14's readout must say not just "we got X installs" but "and Y% came back". And the ideas this exercise generates are valuable but out of scope: this sprint changes marketing, never the product. Writing them down properly is how they don't die AND don't derail us.
**Where:** App Store Connect, Play Console, the Buzzend app (challenge leaderboard), a new doc in this repo.
**Tools:** App Store Connect login, Play Console (Gaurab can pull the Android side), phone with Buzzend, code editor.

**Steps:**
1. In App Store Connect → Analytics, open Retention and note Day-1 and Day-7 retention for the sprint period (record "no data yet" explicitly if the sample is too small — that's a finding too).
2. In Play Console → Statistics, look for returning/active-user data for the same window; ask Gaurab to pull it if his session is open.
3. If the console data is thin, approximate with what we can see: open the 7-Day Squat Starter leaderboard and count participants still logging counted workouts on day 5+ of the challenge ÷ total joined. That percentage is our honest retention proxy.
4. Record whatever you got in the tracker (`Daily Numbers` notes + a small table in `Store-iOS`/`Store-Android`): metric, number, source, date.
5. Create `buzzend-marketing/13-analytics/re-engagement-future-ideas.md`. First line, bold: **FUTURE IDEAS — NOT FOR THIS SPRINT. No product changes. Nothing here ships without a founder decision.**
6. Fill it with the ideas that came up while staring at the numbers: notification copy concepts (streak-save reminders, "your challenge friends did their squats" nudges), win-back message drafts, ideas that lean on features we already have (streaks, Beat-It, leaderboards). Copy concepts only — no feature requests.
7. Link the doc in the tracker and mention it in team chat as "parked for after the sprint".

**Deliverable:** Retention numbers (or explicit proxy) in the tracker + `buzzend-marketing/13-analytics/re-engagement-future-ideas.md`.
**Done when:** The readout can quote a retention figure with its source, and the future-ideas doc opens with the not-for-this-sprint warning.
**Depends on:** —

## Task 2 · 🟡 Personally thank every store reviewer so far (40–50 min)

**Why:** Review replies are public — the next person deciding whether to install reads them. A warm, specific reply signals a team that's home, and reviewers who feel heard often become the users who tell friends.
**Where:** App Store Connect (Ratings and Reviews) + Play Console (Ratings and reviews — Gaurab has the access if you don't).
**Tools:** App Store Connect login, Play Console login, Growth Tracker.

**Steps:**
1. In App Store Connect → your app → Ratings and Reviews, reply to every review that doesn't have a reply yet.
2. Repeat in Play Console → Ratings and reviews (do it together with Gaurab if the access lives with him).
3. Rules for every reply: use something specific from their review ("glad the squat counter kept up with you"), thank them like a human, no corporate boilerplate, no copy-paste — if two replies read identical, rewrite one. For critical reviews: acknowledge honestly ("fair point — here's what it can't do yet"), never argue, never promise features.
4. Log in the tracker: total reviews per store, how many now have replies, today's date.

**Deliverable:** Every existing review on both stores has a personal reply; counts logged in the tracker.
**Done when:** Zero unanswered reviews on either store.
**Depends on:** —
