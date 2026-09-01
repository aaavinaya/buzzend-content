---
title: Buzzend 30-Day Execution Master
status: READY
owner: Buzzend
date: 2026-08-23
sources:
  - ../BUZZEND_GROWTH_PRODUCT_STRATEGY_2026_FINAL.md (v2.0 — "the strategy", § refs)
  - ../BUZZEND_30_DAY_EXECUTION_PLAN.md (the working plan this expands)
---

# Buzzend 30-Day Execution Master

This is the full operational version of the 30-day plan. It is written so
that **someone who has never read the strategy documents can execute every
day**. Where a § appears, it points to the strategy document for background —
reading it is optional; acting on this file is not.

## The one-paragraph brief

Buzzend is a camera-powered workout companion: you put the phone down, you
move, and Buzzend **counts your reps and coaches you in real time**. The
customer is the **At-Home Starter** — a beginner-to-intermediate home
exerciser, roughly 18–35, no equipment, smartphone-heavy (§8). Month 1 has
one goal: **learning, not scale** — find which audience, hook, message and
exercise demo produces *real completed workouts* (§26–27). Budget this
month: **$0–$100. No paid ads. No influencers.** (§28)

## Fixed vocabulary — copy, never re-invent

| Use | Approved wording |
|---|---|
| Positioning (one sentence) | "Buzzend uses your phone camera to count your workout reps and coach you while you exercise." |
| Five-second version | "My phone just counted my squats." |
| Ten-second version | "Put your phone down, start moving, and Buzzend counts your reps while you work out." |
| Social caption line | "Stop counting. Start moving." |
| Campaign name | "Put Your Phone Down Challenge" |
| Primary CTA | "Try your first AI workout." |
| Challenge CTA | "Challenge a friend." |

**Banned claims (§7):** "perfect form", "guaranteed", "injury-proof",
"replaces your trainer", "medical-grade", "most accurate", "world's first",
"scientifically proven". **Banned lead words (§6):** MediaPipe, pose
landmarks, computer vision, algorithms — benefit language only.

## Definitions used everywhere

- **Activated user (§19):** installed AND completed ≥1 successful AI
  workout. Not "opened the app". Not "granted camera permission".
- **Winner rule (§33):** a piece of content wins on **store visits →
  installs → first workouts**, never on views or likes.
- **The 5 core metrics (§29):** store visits · installs · first-workout
  rate · D7 retention · referrals/shares.

## Standing daily routine (~30 min, every day, Days 7–30)

1. **Log yesterday's numbers** into the metrics sheet (defined Day 7)
   before doing anything else. (~10 min)
2. **Reply to every comment/DM** on all platforms. Copy verbatim user
   phrases ("is this real?", "what app is this?") into a `hooks-inbox`
   note — they become future hooks. (~15 min)
3. **Post per today's Distribution section.** Native upload per platform,
   never a watermarked re-upload.

## Guardrails — never during these 30 days (§47)

- No kids/school pivot; no "for kids" wording anywhere.
- No paid ads, no influencer spend (learning phase).
- Never fake, edit, or splice a rep count in any video (§40). Before any
  demo is filmed: verify the counter on the exact exercise, camera
  position, and device. If it miscounts — file product feedback and film
  a different exercise.
- No new feature building. Allowed engineering: analytics events (Day 20)
  and activation-friction fixes (Day 19) only.
- No Discord (§35). Reddit is research/participation only — no promo spam.

## Existing assets you already have (see CONTENT_ASSET_INDEX.md)

- 14 finished week-1 static posts (`buzzend-content` repo →
  `social-media/rendered/`) + captions
  (`social-media/week1-content-calendar.md`) — use as Stories/support
  posts, not as substitutes for the video plan.
- 13-second launch teaser video (`video/teaser-1080x1920.mp4`).
- Store screenshot pipeline (`store-assets/templates/store-shot.html` +
  `jobs-*.json` + `tools/shoot.mjs`) with current iOS/Android sets.
- Clean, publishable app screens (`assets/screens-clean/` — demo
  identities only: Ema William, Adesh Pokhrel, Kiran Shah…).

Content asset IDs (V01, WH-1, ST-1…) referenced below are specified in
`CONTENT_PRODUCTION_PLAN.md`.

**Scheduling assumption:** Day 1 is a Monday. Posting time is fixed on
Day 8 from real audience data; until then use 18:00–21:00 local for
TikTok, 11:30–12:30 for IG (per the week-1 calendar's tested windows).

---

# WEEK 1 — FOUNDATION (Days 1–7)

Week goal: lock the words, lock the audience, get profiles + tracking
ready, film proof, publish the first video, record the baseline.

---

## Day 1 (Mon) — Lock the positioning

- **Objective:** end the day with one sentence everyone uses, everywhere.
- **Priority:** Critical · **Time:** ~2–3 h · **Dependencies:** none.

**Tasks / exact actions**

1. Read strategy §5 (positioning), §6 (UVP), §7 (banned claims) once. (30 min)
2. Adopt the approved positioning sentence from the table above. Only
   change it if you can write down exactly why yours is clearer — then
   record that reason.
3. Create `POSITIONING.md` in this folder containing the full message
   ladder (the Fixed-vocabulary table above, verbatim).
4. Run every line against the banned-claims list; delete anything that
   promises perfection, guarantees, or medical value.
5. Confirm no line leads with technology words (MediaPipe, CV, landmarks).

**Content today:** none (foundation day).
**Product/growth work:** none.
**Distribution:** none.
**Metrics:** none yet.
**Deliverable:** `POSITIONING.md` (status READY).
**Done when:** you can answer "What is Buzzend?" in one sentence without
hesitating, and every future asset can copy its wording from this file.

---

## Day 2 (Tue) — Lock the primary audience (ICP)

- **Objective:** a one-pager that makes every content decision take 5 seconds.
- **Priority:** Critical · **Time:** ~2 h · **Dependencies:** Day 1.

**Tasks / exact actions**

1. Create `ICP.md` with four blocks:
   - **At-Home Starter (primary, §8):** age ≈18–35, beginner–intermediate,
     home/small space, no equipment, smartphone-heavy; wants consistency,
     strength, visible progress.
   - **Frustrations (verbatim):** loses count · doesn't know where to
     start · unsure about movement · hates complicated programs · doesn't
     want a trainer · struggles with consistency.
   - **Install triggers:** new fitness goal · starting again · failed
     routine · saw fitness content · friend challenge · wants to work out
     at home.
   - **Secondary audiences (§9), one line + message each:**
     Challenge Friend — "Don't just work out. Challenge someone." ·
     Busy Professional — "No gym. No equipment. No manual counting." ·
     Returning Exerciser — "Start small. Build the habit. Keep the streak."
2. Add the **"not now" list (§10)** at the bottom: advanced athletes, gym
   lifters, nutrition users, medical/rehab, trainers, schools, children.
3. Top of file: primary message "Your phone can count and coach your
   workout." → CTA "Try your first AI workout."

**Content today / distribution / metrics:** none.
**Deliverable:** `ICP.md` (READY).
**Done when:** for any content idea you can answer in 5 seconds — "is this
for the At-Home Starter?" — and drop it if not.

---

## Day 3 (Wed) — Audit five competitors

- **Objective:** know what everyone else says, so Buzzend says what only it can prove.
- **Priority:** High · **Time:** ~3–4 h · **Dependencies:** Day 1–2 (you need the lens).

**Tasks / exact actions**

1. Search the App Store and Google Play for: "AI rep counter", "workout
   rep counter", "home workout AI", "AI fitness coach". Pick 5 apps —
   prioritize camera-based rep counters + 1–2 big home-workout apps for
   contrast.
2. For each, capture into `COMPETITORS.md`: name · subtitle/short
   description · first 3 screenshots + captions · first 5 s of preview
   video · price/subscription · rating · 3 recent positive + 3 recent
   negative reviews.
3. Check each app's TikTok/IG: top 3 videos and their hooks.
4. Score each against the §16 table: camera-first, automatic counting,
   real-time coaching, home/bodyweight, beginner-friendliness,
   challenges, habit mechanics.
5. Write three conclusions: (a) what they **all** say → avoid copying;
   (b) what **nobody shows on camera** that Buzzend can prove → lead with
   it; (c) which negative-review complaint Buzzend already solves →
   instant content ideas (feed these into CONTENT_PRODUCTION_PLAN ideas).

**Deliverable:** `COMPETITORS.md` — table + 3 conclusions (READY).
**Done when:** per competitor you can name one thing you won't copy and
one gap Buzzend exploits.

---

## Day 4 (Thu) — Fix social profiles + set up tracked links

- **Objective:** anyone landing on any profile understands Buzzend in 5 s and reaches the store in one **measurable** tap.
- **Priority:** Critical (Week 2 attribution depends on it) · **Time:** ~2–3 h · **Dependencies:** Day 1.

**Tasks / exact actions**

1. Unify handle, avatar (app icon), and display name on **Instagram,
   TikTok, YouTube**. (Facebook exists from the week-1 kit — keep it
   consistent, but it is a secondary mirror; the strategy's P1 channels
   are Reels/TikTok/Shorts + ASO, §20.)
2. One bio from `POSITIONING.md`, e.g.: *"Your phone counts your reps &
   coaches your workout. Try your first AI workout ⬇"* — identical
   everywhere, trimmed only for character limits.
3. Create **tracked store links per platform**: App Store campaign links
   + Play Store UTM parameters, or a link-in-bio page with per-platform
   links. Name them `ig`, `tt`, `yt` so Week 2 can attribute store
   visits to hooks.
4. On a real device, tap each link from each profile → confirm it opens
   the correct store page.
5. Archive/delete old posts that contradict the positioning (anything
   teal-brand, anything off-message).
6. Create the raw-footage folder convention for clips:
   `footage/<exercise>-take<N>.mp4` (outside the repo; the repo stores
   finished assets only).

**Deliverable:** 3 consistent profiles + working tracked links.
**Done when:** you can see store taps **per platform** in your link tool.

---

## Day 5 (Fri) — Record five AI demos (one per exercise)

- **Objective:** raw proof footage for all five exercises: squat, push-up, lunge, sit-up, jumping jack.
- **Priority:** Critical (all Week 1–2 content depends on it) · **Time:** ~3–4 h · **Dependencies:** none technically, but do Days 1–2 first for framing.

**Tasks / exact actions**

1. **Pre-flight (§40, mandatory):** for each exercise, dry-run the
   counter on the exact device + camera position you'll film. If an
   exercise miscounts, log it as product feedback and drop it from
   filming — never plan to "fix it in the edit".
2. Set up like a real user: phone on floor or low stand, full body in
   frame, good light, counter clearly legible. Record **two angles
   simultaneously**: screen recording of the app + a second camera on
   the scene, vertical 9:16.
3. Film 10–20 real reps per exercise with the counter visibly
   incrementing; capture at least one coaching cue if it triggers.
4. Film B-roll: placing the phone down · walking into frame · close-up
   of a "rep counted" tick · the result screen.
5. Verify on every keeper take: displayed count == actual reps.
6. Back up all footage; label `<exercise>-take<N>`.

**Deliverable:** 5 usable demo sets + B-roll library.
**Done when:** every exercise has ≥1 take with a correct on-screen count
end to end.

---

## Day 6 (Sat) — Edit the first three videos (V01–V03)

- **Objective:** three finished 15–30 s verticals following the §23 formula: hook 0–2 s → proof 2–6 s → explanation 6–15 s → benefit 15–25 s → CTA.
- **Priority:** Critical · **Time:** ~3–4 h · **Dependencies:** Day 5 footage.

**Tasks / exact actions**

1. **V01 — squat.** Hook (spoken + on-screen, first 2 s): *"My phone just
   counted my squats."* Cut: 0–2 s counter close-up incrementing → 2–6 s
   wide shot person+counter → 6–15 s: *"Buzzend uses your phone camera to
   count reps while you work out."* → 15–25 s: *"So you can focus on
   moving instead of counting."* → end card: **Try your first AI workout.**
2. **V02 — push-up.** Hook: *"Stop counting your reps."* Same structure.
3. **V03 — jumping jack.** Question hook: *"Can AI count my jumping
   jacks?"* — the counter must visibly answer by ~3 s.
4. Burn in captions/subtitles on all three (most viewers watch muted).
5. Export one clean 9:16 master per video (1080×1920, no watermark).
   Never cross-post a TikTok-watermarked file.
6. Choose a cover frame per video showing **person + counter together**.

**Deliverable:** V01, V02, V03 finished + covers (READY).
**Done when:** a stranger watching 3 s with sound off understands *the
phone is counting the reps*.

---

## Day 7 (Sun) — Publish + record the baseline

- **Objective:** first post live; the "before" numbers written down.
- **Priority:** Critical · **Time:** ~2 h · **Dependencies:** Days 4, 6.

**Tasks / exact actions**

1. Publish **V01** natively to IG Reels, TikTok, YouTube Shorts. Hold
   V02/V03 for Week 2 tests. Caption from the message ladder + "link in
   bio" (tracked link). Optional: mirror to Facebook with the
   `social-media/rendered/day1-feed.png` static + calendar caption.
2. Create the **metrics sheet** (spreadsheet) with columns:
   `date · platform · video/hook · views · avg watch time · retention % ·
   likes · comments · shares · saves · profile visits · link taps ·
   store visits · installs · first workouts · notes`.
3. Record the **baseline before content effects**: followers/platform ·
   store page views · installs · first-workout completion rate · D1 if
   available — from App Store Connect, Play Console, and app analytics.
4. Reply to every comment for 15–30 min; harvest verbatim phrases into
   `hooks-inbox`.

**Content today:** V01 (Pillar 1 — AI in Action).
**Distribution:** IG Reels + TikTok + YT Shorts (native), FB optional mirror.
**Metrics:** baseline row + V01 24 h row tomorrow.
**KPI note:** this baseline *is* the Week 1 KPI — no baseline, no valid Week 2 tests.
**Deliverable:** live post + completed baseline row (PUBLISHED).
**Done when:** the pre-experiment numbers exist in the sheet.

---

# WEEK 2 — FIND THE HOOK (Days 8–14)

Week goal: test 5 hooks/angles under controlled conditions; find what
produces **workouts**, not likes.

**Test protocol (Days 9–13):** one variable at a time. One video/day,
same time of day, all three platforms, same CTA, same §23 structure
unless the test says otherwise. Log 24 h metrics next morning. Judge by
the winner rule only.

---

## Day 8 (Mon) — Analyze first content + prep the test week

- **Priority:** Critical · **Time:** ~2–3 h · **Dependencies:** Day 7 published ≥24 h ago.

**Tasks / exact actions**

1. Pull V01's per-platform results: views, avg watch time, retention
   curve, drop-off point.
2. Interpret drop-off: exit before 2 s = hook problem · before 10 s =
   proof problem · later = length problem. Write one sentence per platform.
3. Read every comment; move exact user words into `hooks-inbox`.
4. **Fix the posting time** for the rest of the month from when your
   audience was actually online (platform analytics).
5. Prep all five test videos (V01 variant, V02, V03, V04 beginner, V05
   challenge) from Day 5–6 footage. Edit tonight whatever is missing —
   V04 (*"Start with 10."*) and V05 (*"50 squats with Buzzend."*).
6. Write the hypothesis in the sheet: *which hook will win and why.*

**Deliverable:** 5 test videos READY + written hypothesis + fixed post time.
**Done when:** the entire test week could run even with zero spare time
on test days.

---

## Days 9–13 — The five hook tests

Shared protocol per day (~1–2 h): publish at the fixed time on IG Reels +
TikTok + YT Shorts → log yesterday's 24 h numbers first → 15 min/platform
comment replies. Same CTA unless stated.

### Day 9 (Tue) — Test 1 · V01-B squat
- **Hook:** *"My phone just counted my squats."* (angle: first-person surprise/product proof)
- **CTA:** Try your first AI workout.
- **Priority:** Critical.
- **Done when:** posted ×3 platforms + Day 8 numbers logged.

### Day 10 (Wed) — Test 2 · V02 push-up
- **Hook:** *"Stop counting your reps."* (angle: command/problem language)
- **CTA:** Try your first AI workout.
- **Done when:** posted ×3 + Day 9 logged.

### Day 11 (Thu) — Test 3 · V03 question hook
- **Hook:** *"Can AI count my push-ups?"* (angle: curiosity/skepticism;
  use the strongest question-hook footage — the counter must answer the
  question on camera by ~3 s).
- Note in the sheet whether the question hook pulls more comments — it
  usually does, and comments are a hook goldmine.
- **Done when:** posted ×3 + Day 10 logged.

### Day 12 (Fri) — Test 4 · V04 beginner angle
- **Hook:** *"Start with 10."* — ten squats counted on camera. Message:
  *"Your first workout doesn't need to be perfect. Five minutes is better
  than zero."* (Pillar 6 — Beginner Confidence; softer tone.)
- **CTA:** Try your first AI workout.
- **Done when:** posted ×3 + Day 11 logged.

### Day 13 (Sat) — Test 5 · V05 challenge angle
- **Hook:** *"50 squats with Buzzend."* or *"Try 20 squats with me."* —
  do the challenge on camera, counter proving it. (Pillar 4.)
- **CTA:** **Challenge a friend.** (this also tests CTA style, §33 #8)
- **Done when:** posted ×3 + Day 12 logged.

---

## Day 14 (Sun) — Compare the week, pick winners

- **Priority:** Critical · **Time:** ~2–3 h · **Dependencies:** Days 9–13 logged.

**Tasks / exact actions**

1. Complete the sheet through Day 13 (mark Day 13 partial — its 24 h
   numbers finalize tomorrow).
2. Build the comparison table: rows = 6 videos (Day 7 + Days 9–13);
   columns = platform · views · retention · profile visits · link taps ·
   store visits · installs · first workouts (as far as attribution allows).
3. Apply the **winner rule**: rank by store visits → installs → first
   workouts. Never by likes.
4. Answer the three §50 questions in writing: Who responded? What message
   worked? **Did they actually use Buzzend?**
5. Pick **top 2 hooks to keep** and **1 loser to kill**. Write one
   paragraph: *what do you believe now that you didn't a week ago?*

**Deliverable:** Week 2 comparison table + written decision (feeds
WEEKLY_REVIEW_SYSTEM Week 2 review).
**Done when:** next week's content defaults to the winning hooks.

---

# WEEK 3 — IMPROVE CONVERSION (Days 15–21)

Week goal: push what worked into the store pages and the first-workout
funnel. Publishing continues ~5 videos this week using winning hooks
(assets WH-1…WH-5 — see CONTENT_PRODUCTION_PLAN).

---

## Day 15 (Mon) — Double down on the strongest hook

- **Priority:** Critical · **Time:** ~2–3 h · **Dependencies:** Day 14 decision.

**Tasks / exact actions**

1. Write **5 variations** of the winning hook (WH-1…WH-5): change exactly
   one thing per variation — exercise, setting, camera angle, or slight
   wording. Log each variation's single changed variable in the sheet.
2. Record/edit **WH-1 and WH-2 today**; schedule the week: WH-1 today,
   WH-2 Tue, WH-3 Wed, WH-4 Thu (educational variant), WH-5 Fri.
3. Write down **why the hook won** (audience match? curiosity? speed of
   proof?) — this reasoning becomes the store copy on Days 16–18.

**Content today:** WH-1 (winning hook, variation 1) → IG/TikTok/YT at
fixed time.
**Deliverable:** a repeatable recipe: hook pattern + exercise + structure,
documented so someone else could produce the next 10 videos.
**Done when:** WH-1 published; WH-2 ready; recipe written.

---

## Day 16 (Tue) — Improve the App Store screenshots

- **Priority:** High · **Time:** ~3–4 h · **Dependencies:** Day 14 (winning language), store pipeline (exists).

**Tasks / exact actions**

1. Follow the §25 sequence exactly — captions:
   1. *"Your phone counts. You just move."* — live workout + counter
   2. *"Automatic rep counting"* — reps increasing
   3. *"Real-time workout coaching"* — a coaching cue
   4. *"Squats. Push-ups. Lunges. More."* — supported exercises
   5. *"Build your daily streak"* — goal/streak
   6. *"Challenge your friends"* — challenge flow
2. Use the repo pipeline: edit captions/screens in
   `store-assets/templates/jobs-ios-1284x2778.json`, then
   `node tools/shoot.mjs <jobs>` (renders via
   `store-assets/templates/store-shot.html`). Sizes: 1320×2868 (6.9")
   and/or 1284×2778 (6.5" — what App Store Connect currently accepts for
   this listing). Real UI, Energy Orange, demo names only, no fake counts.
3. If the winning hook's language beats the default caption on
   screenshot 1, use the winning language.
4. Keep subtitle *"AI Workout & Rep Counter"*. Queue alternates ("AI
   Coach for Home Workouts", "AI Rep Counter & Coach") for a later ASO
   test — change one thing at a time.
5. Upload to App Store Connect (or stage for next release).

**Content today:** WH-2 published (standing schedule).
**Deliverable:** 6 iOS screenshots rendered + submitted/staged.
**Done when:** the new set is in App Store Connect.

---

## Day 17 (Wed) — Improve the Google Play listing

- **Priority:** High · **Time:** ~2–3 h · **Dependencies:** Day 16 captions.

**Tasks / exact actions**

1. Same §25 sequence via the same pipeline for Android:
   `jobs-android-1080x1920.json` (phone → `store-assets/android/phone/`),
   re-render tablet-10 set via `jobs-android-1440x2560.json` if captions
   changed; copy phone renders to `tablet-7/`.
2. Rewrite the **short description (80 chars)** from the positioning:
   *"Your phone counts your reps and coaches your workout."*
3. Full description: first 3 lines must answer *what is it / why is it
   different / does it work* before the fold.
4. Upload all three slots in Play Console (phone, 7", 10" — one folder
   each, upload as-is).

**Content today:** WH-3 published.
**Deliverable:** updated Play listing staged/live.
**Done when:** the Play page explains the product without scrolling.

---

## Day 18 (Thu) — Improve the store preview video

- **Priority:** High · **Time:** ~3–4 h · **Dependencies:** best Week 2 footage.

**Tasks / exact actions**

1. Cut a 15–30 s preview per §25: phone down → person moves → counter
   changes → coaching → result. **No logo intro** — the counter must be
   moving within the first 3 seconds.
2. Reuse the best-performing social footage where store specs allow
   (App Store previews must show real device UI — check compliance).
3. Export to both platforms' specs; upload/stage in both consoles.

**Content today:** WH-4 published (educational variant — Pillar 2, e.g.
*"Why didn't this rep count?"* — phone positioning/framing tips).
**Deliverable:** preview video staged on both stores.
**Done when:** first 3 s of the preview show the counter moving.

---

## Day 19 (Fri) — Onboarding friction audit

- **Objective:** know exactly how many seconds and taps stand between install and the first counted rep (§48).
- **Priority:** Critical · **Time:** ~2–3 h · **Dependencies:** none.

**Tasks / exact actions**

1. Fresh-install the production app on iOS **and** Android. Screen-record
   and time: install → first counted rep.
2. Write down every screen, tap, permission, decision point, in order.
   Count the taps.
3. Mark friction: camera permission requested before any value shown?
   signup wall before first workout? unclear copy? dead ends?
4. Rank the top 3 friction points by expected activation impact → file as
   product tickets. (This is one of the two allowed engineering
   workstreams this month.)

**Content today:** WH-5 published.
**Deliverable:** onboarding audit — tap count, time-to-first-rep, top 3
ranked fixes, filed as tickets.
**Done when:** an engineer could pick up ticket #1 without asking questions.

---

## Day 20 (Sat) — Measure activation

- **Objective:** a real activation number. Activation = ≥1 successful AI workout (§19).
- **Priority:** Critical · **Time:** ~2–3 h · **Dependencies:** analytics access.

**Tasks / exact actions**

1. Verify the §31 funnel events exist and fire:
   `app_open → onboarding_complete → workout_selected → camera_ready →
   workout_started → rep_counted → workout_completed`.
   Test-fire each on a device; confirm arrival in the analytics tool.
2. **Activation rate** = users with ≥1 completed AI workout ÷ installs,
   last 14 days. Write the number down.
3. Find the biggest drop between adjacent funnel steps — that is the
   activation problem to attack.
4. If events are missing/broken: ship the tracking fix **now** (the
   second allowed engineering workstream). All of Week 4 depends on it.

**Content today:** weekend community piece (§49) — e.g. repost the best
week-2 video as a Story + poll (*"Which exercise should AI count next?"*).
**Deliverable:** stated sentence: "X% of installs complete a first AI
workout; the biggest leak is between step A and step B."
**Done when:** that sentence is written in the sheet with real numbers.

---

## Day 21 (Sun) — Interview five users

- **Priority:** High · **Time:** ~3–4 h · **Dependencies:** some real users (from installs to date).

**Tasks / exact actions**

1. Recruit 5 recent users via comments/DMs, personal-network installs, or
   an in-app prompt. 15–20 min each, call or chat.
2. Script: How did you find Buzzend? What did you expect? Walk me through
   your first workout. Did the counting work? What almost stopped you?
   Have you come back — why/why not? Would you challenge a friend?
3. Record exact words — their vocabulary becomes hooks and store copy.
4. Write one insight per user + one common thread; add to Week 3 review.

**Deliverable:** 5 interview notes + summary.
**Done when:** you have ≥1 confirmed reason people stay and ≥1 reason they
leave, in their own words.

---

# WEEK 4 — RETENTION (Days 22–30)

Week goal: understand whether people come back, why, and what Month 2
should attack. Content keeps publishing on winning hooks all week
(assets R-1…R-5).

---

## Day 22 (Mon) — Measure the second workout

- **Priority:** Critical · **Time:** ~2 h · **Dependencies:** Day 20 events verified.

**Tasks / exact actions**

1. Define: % of activated users completing a **2nd workout within 3 days**
   of the first (§18 sequence).
2. Pull the number for recent cohorts.
3. Compare returners vs non-returners: did returners set a goal? start a
   streak? get more reps counted in workout 1?
4. Write the single most likely lever (e.g., post-workout goal prompt) as
   a **Month 2 hypothesis** — do not build it (§39).

**Content today:** R-1 (winning hook, new exercise) published.
**Deliverable:** second-workout rate + returner profile + 1 hypothesis.

## Day 23 (Tue) — Review D1 retention

- **Priority:** High · **Time:** ~2 h.

1. Cohort users by install day (last 2–3 weeks); compute D1.
2. Split by source (hook/platform) where possible, and by activated vs
   non-activated.
3. Confirm: activated users' D1 ≫ non-activated. If activation doesn't
   predict retention, question the activation definition with data.
4. Log into the weekly dashboard (§30 structure — see KPI_TRACKING.md).

**Content today:** R-2 published.
**Deliverable:** D1 by cohort/segment in the dashboard.

## Day 24 (Wed) — Review D7 retention

- **Priority:** High · **Time:** ~2 h.

1. Same cohort table for D7.
2. Compare D7 **with** streak/goal vs **without**.
3. Note curve shape: biggest drop D1→D3 or D3→D7?
4. Write one sentence: "Our D7 is X%, and the users who stay differ by ___."

**Content today:** R-3 published.
**Deliverable:** that sentence, with numbers.

## Day 25 (Thu) — Test streak behavior

- **Priority:** High · **Time:** ~2–3 h.

1. Walk the streak flow yourself: complete a daily goal → does the streak
   start/display clearly? What happens after a missed day?
2. Pull data: % of activated users starting a streak · streak-length
   distribution · `daily_goal_completed` counts.
3. File confusions/friction as tickets (don't build).
4. **Content tie-in:** film the *"7-day streak"* clip (R-4) for tomorrow's slot.

**Content today:** Story — streak screenshot from
`assets/screens-clean/streak.png` template set (or repost
`social-media/rendered/day5-story.png`).
**Deliverable:** streak funnel numbers + tickets + R-4 filmed.

## Day 26 (Fri) — Test challenge behavior

- **Priority:** Critical (referral loop depends on it) · **Time:** ~2–3 h.

1. Walk challenge creation + joining end-to-end with a second account or
   a friend, on iOS **and** Android.
2. Verify events fire: `challenge_created`, `challenge_joined`. Pull
   participation numbers.
3. **Test the invite deep link:** non-user taps it → reaches the store →
   lands in the challenge after install? (§36 loop depends on this exact
   path.)
4. File any breakage as **high-priority** tickets.

**Content today:** R-4 published (*"7-day streak"* — Pillar 4/6 blend).
**Deliverable:** challenge funnel verified or breakage filed.

## Day 27 (Sat) — Test sharing

- **Priority:** High · **Time:** ~2–3 h.

1. Share a workout result from the app. Inspect what the card/link
   actually looks like in an IG Story, WhatsApp, and iMessage.
2. Check: result self-explanatory (counter/result visible without
   explanation)? Link tracked (`invite_sent → invite_install`)?
3. Measure share rate = shares ÷ completed workouts.
4. Write the single best share-card improvement; ticket for Month 2
   (§36: the strongest viral moment is *"I just did something worth
   showing my friend."*).

**Content today:** weekend community piece — repost best R-video as Story
+ ask followers to duet/stitch their attempt.
**Deliverable:** share-flow findings + share rate + 1 Month-2 ticket.

## Day 28 (Sun) — Interview active users

- **Priority:** High · **Time:** ~2–3 h.

1. Recruit 3–5 users with multiple workouts/streaks (find in data or
   community).
2. Ask: What keeps you coming back? Which feature would you miss most?
   Have you shared/challenged anyone — why/why not? What almost made you
   quit?
3. Capture retention language verbatim — it becomes marketing copy for
   retention features (§38).

*Optional (only if the client's Family question needs movement): add 1–2
parent interviews using the §44 question list — research only, no
building (§47).*

**Deliverable:** 3–5 interview notes with verbatim quotes.

## Day 29 (Mon) — Interview inactive users

- **Priority:** High · **Time:** ~2–3 h.

1. Recruit 3–5 users who installed but never activated, or activated then
   disappeared 7+ days.
2. Ask: What did you expect? What happened on your first try? Did the
   counting work? What would bring you back?
3. Categorize churn reasons: product bug / unmet expectation / no habit
   hook / wrong audience.
4. Cross-check against Day 19–20 friction findings — they should
   corroborate. If they contradict, trust the users and re-audit.

**Content today:** R-5 published (best-performing angle of the month, new
footage).
**Deliverable:** categorized churn reasons.

## Day 30 (Tue) — Month 1 report + Month 2 experiments

- **Priority:** Critical · **Time:** ~3–4 h · **Dependencies:** everything above.

**Tasks / exact actions**

1. Fill the §51 month-end template completely in `MONTH_1_REPORT.md`:
   - **What worked:** top audience · top hook · top exercise · top
     format · top CTA (· top creator — N/A this month).
   - **What didn't:** audience · hook · content · store page · CTA.
   - **Product behavior:** installs · first workouts · activation rate ·
     second workouts · D1 · D7 · D30 · challenges · shares · referrals.
2. Three explicit decisions: **Continue** (more effort) · **Stop**
   (killed) · **Test** (next hypotheses).
3. Pick Month 2 experiments from §33. Recommended starting set (§27):
   - 10–15 variants of the winning hook
   - 5 micro-creator tests (5K–100K followers, unique tracked links, §34)
   - 2 store-page variants
   - 2 CTA styles ("Try your first AI workout" vs "Challenge a friend")
4. Set Month 2 KPI targets: activation rate · D7 · referral rate · cost
   per activated user (if paid starts).
5. Save as `MONTH_1_REPORT.md` in this folder.

**Deliverable:** `MONTH_1_REPORT.md` + numbered Month 2 experiment list.
**Done when:** Month 2 has a written plan decided by evidence, not opinion.

---

# KPI targets for the month

Month 1 is a **learning month** — the strategy deliberately avoids vanity
targets. These are the execution targets (output you control) and
calibration thresholds (signals you read). Numbers marked ⚠ are
assumptions to calibrate against the Day 7 baseline, not strategy quotas
— see KPI_TRACKING.md for the full system.

| KPI | Target | Warning threshold |
|---|---|---|
| Videos published | ≥20 in 30 days (≥5/week from Day 7) | <4 in any week |
| Hook tests completed | 5, back-to-back, protocol respected | any test skipped/reordered |
| Baseline recorded | Day 7 | missing = Week 2 invalid |
| Activation rate known | real % by Day 20 | events broken past Day 20 |
| Funnel events verified | all 7 core events by Day 20 | any missing |
| Store pages updated | both stores by Day 18 | not staged by Day 21 |
| User interviews | ≥11 total (5 + 3–5 + 3–5) | <8 |
| ⚠ Hook signal | ≥1 hook with ≥2× baseline store-visit rate | none after Day 14 → widen angles, not volume |
| ⚠ Second-workout rate | measured; directionally ≥40% of activated | <20% → onboarding/first-workout problem |
| Month 1 report | written Day 30 with 3 decisions | — |

# What happens after Day 30 (§27)

- **Month 2 — Testing:** find repeatable acquisition (10–15 hook
  variants, 5 creators, 2 store variants, 2 CTA styles). KPIs:
  activation, D7, referral rate, cost per activated user.
- **Month 3 — Scaling:** scale only what has evidence — best creatives,
  creator, store pages; then Apple Search Ads / Meta / TikTok paid.
- **Family/School:** research only (§44–45). Nothing gets built until
  parent demand is validated.
