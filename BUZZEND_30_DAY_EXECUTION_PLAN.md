---
date: 2026-08-20
owner: Buzzend
status: Working Plan
title: Buzzend 30-Day Execution Plan (Day-by-Day)
based_on: BUZZEND_GROWTH_PRODUCT_STRATEGY_2026_FINAL.md (v2.0, §26 expanded)
---

# Buzzend 30-Day Execution Plan — Day by Day

> This expands §26 of the Growth & Product Strategy into a working
> checklist. Every day has an objective, step-by-step tasks, a concrete
> deliverable, and a "done when" check. Section references (§) point to
> the strategy document.

## How to run this plan

- **Assumes:** one owner, roughly **3–4 focused hours per day**. If you
  have less time, stretch a day over two — do not skip days, and do not
  reorder Week 2 (the tests only mean something back-to-back).
- **The goal of Month 1 is learning, not scale** (§27, §28): which
  audience, hook, message and exercise demo produces *real workouts*.
- **Budget this month:** $0–$100 (§28). No paid ads, no influencers yet.

### Daily non-negotiables (every day, ~30 min total)

1. **Log yesterday's numbers** (~10 min) into the metrics sheet before
   doing anything else.
2. **Reply to every comment/DM** (~15 min). Write down the exact words
   people use — questions like "is this real?" become future hooks.
3. **Post per the plan** (from Day 7 on, aim for ~5 videos/week, §22).

### The metrics sheet (create Day 7, update daily)

Columns: `date · platform · video/hook · views · avg watch time ·
retention % · likes · comments · shares · saves · profile visits ·
link taps · store visits · installs · first workouts · notes`

### Guardrails — do NOT do these during the 30 days (§47)

- No kids/school pivot, no "for kids" wording anywhere.
- No paid ads or large influencers (learning phase).
- Never fake or edit a rep count in a video (§40).
- No banned claims: "perfect form", "guaranteed", "world's first",
  "medical-grade", "replaces your trainer" (§7).
- No new feature building. The only engineering allowed this month:
  analytics events (Day 20) and activation-friction fixes (Day 19).
- No Discord yet (§35).

---

# WEEK 1 — Foundation (Days 1–7)

Goal: lock the words, lock the audience, get the machine ready, publish
the first proof video, and record a baseline.

---

## Day 1 — Lock the positioning

**Time:** ~2–3 h
**Objective:** end the day with one sentence that everyone uses, everywhere.

**Tasks**

1. Re-read strategy §5 (positioning), §6 (UVP) and §7 (banned claims). ~30 min.
2. Write the final one-sentence positioning. Start from the approved
   candidate — *"Buzzend uses your phone camera to count your workout
   reps and coach you while you exercise."* — and only change it if you
   can say exactly why yours is clearer.
3. Write the full **message ladder** in one file (from Appendix A):
   - One sentence: the positioning above
   - Five seconds: *"My phone just counted my squats."*
   - Ten seconds: *"Put your phone down, start moving, and Buzzend
     counts your reps while you work out."*
   - Social caption: *"Stop counting. Start moving."*
   - Campaign: *"Put Your Phone Down Challenge"*
   - CTA: *"Try your first AI workout."*
4. Run every line against the banned-claims list (§7). Delete anything
   that promises perfection, guarantees, or medical value.
5. Check that no line leads with technology words — no MediaPipe, pose
   landmarks, computer vision (§6). Benefit language only.
6. Save as `POSITIONING.md`. From now on, **every** bio, caption, store
   line and script copies its wording from this file.

**Deliverable:** `POSITIONING.md` with the approved message ladder.
**Done when:** you can answer "What is Buzzend?" in one sentence without
hesitating, and no future asset needs new wording invented.

---

## Day 2 — Lock the primary audience (ICP)

**Time:** ~2 h
**Objective:** a one-pager that makes every content decision fast.

**Tasks**

1. Write the **At-Home Starter** ICP (§8): age ≈18–35,
   beginner-to-intermediate, works out at home / small space, no or
   minimal equipment, smartphone-heavy, wants consistency and visible
   progress.
2. List their frustrations verbatim: loses count, doesn't know where to
   start, unsure about movement, hates complicated programs, doesn't
   want a trainer, struggles with consistency.
3. List install triggers: new fitness goal, starting again, failed
   routine, saw fitness content, friend challenge, wants to exercise at
   home.
4. Add the three secondary audiences (§9) as one line + one message each:
   - **Challenge Friend** — *"Don't just work out. Challenge someone."*
   - **Busy Professional** — *"No gym. No equipment. No manual counting."*
   - **Returning Exerciser** — *"Start small. Build the habit. Keep the streak."*
5. Write the explicit **"not now" list** (§10): advanced athletes, gym
   lifters, nutrition users, medical/rehab, trainers, schools, children.
   Pin it wherever you plan content.
6. Put the primary message + CTA at the top: *"Your phone can count and
   coach your workout."* → *"Try your first AI workout."*

**Deliverable:** `ICP.md`.
**Done when:** for any content idea you can answer in 5 seconds — "is
this for the At-Home Starter?" — and drop it if not.

---

## Day 3 — Audit five competitors

**Time:** ~3–4 h
**Objective:** know what everyone else says, so Buzzend says what only it can prove.

**Tasks**

1. Find 5 relevant apps: search the App Store and Google Play for
   *"AI rep counter"*, *"workout rep counter"*, *"home workout AI"*,
   *"AI fitness coach"*. Prioritize camera-based rep counters, plus 1–2
   big home-workout apps for contrast.
2. For each app capture: name, subtitle/short description, the first
   three screenshots and their captions, first 5 seconds of the preview
   video, price/subscription, rating, 3 recent positive + 3 recent
   negative reviews.
3. Check their social: top 3 performing videos and the hooks they use.
4. Score each against the §16 differentiation table: camera-first,
   automatic counting, real-time coaching, home/bodyweight, beginner
   friendliness, challenges, habit mechanics.
5. Write three conclusions:
   - (a) what they **all** say → avoid saying it the same way;
   - (b) what **nobody** shows that Buzzend can prove on camera → lead
     with it;
   - (c) which negative-review complaint Buzzend already solves →
     instant content ideas.

**Deliverable:** `COMPETITORS.md` — table + 3 conclusions.
**Done when:** for each competitor you can name one thing you won't copy
and one gap Buzzend exploits.

---

## Day 4 — Fix the social profiles + set up tracking

**Time:** ~2–3 h
**Objective:** anyone landing on any profile understands Buzzend in 5 seconds and can reach the store in one *measurable* tap.

**Tasks**

1. Same handle, avatar and display name on Instagram, TikTok, YouTube.
2. Write one bio from `POSITIONING.md`, e.g.: *"Your phone counts your
   reps & coaches your workout. Try your first AI workout ⬇"* — same
   everywhere, trimmed only for character limits.
3. Set up **tracked store links per platform** (App Store campaign
   links / Play Store UTM parameters, or a link-in-bio page with
   per-platform links) so Week 2 can attribute store visits to hooks.
4. Verify both store listings are live and each link opens the right
   page on a real device.
5. Archive or delete old posts that contradict the positioning.
6. Set up the content folder structure for raw/edited clips (use the
   buzzend-content repo conventions).

**Deliverable:** 3 consistent profiles + working tracked links.
**Done when:** you can see, per platform, how many people tapped through
to the store.

---

## Day 5 — Record five AI demos (one per exercise)

**Time:** ~3–4 h
**Objective:** raw proof footage for every supported exercise: squat, push-up, lunge, sit-up, jumping jack.

**Tasks**

1. **Pre-flight per §40:** for each exercise, verify the counter behaves
   on the exact device and camera position you will film. Dry-run
   before recording. If an exercise miscounts, file it as product
   feedback and film the ones that work — never plan to fix it in the
   edit.
2. Set up like a real user: phone on the floor or a low stand, full
   body in frame, good light, counter clearly visible. Capture **both**
   a screen recording of the app and the scene from a second camera,
   vertical 9:16.
3. Record each exercise: 10–20 real reps with the counter visibly
   incrementing, plus at least one coaching cue on screen/audio if it
   triggers.
4. Record B-roll: placing the phone down, walking into frame, a
   close-up of the "rep counted" moment, the result screen.
5. Confirm the displayed count matches reality on every keeper take.
6. Back up everything; label clips by exercise + take number.

**Deliverable:** 5 usable demo sets + a B-roll library.
**Done when:** every exercise has at least one take where the on-screen
count is correct end to end.

---

## Day 6 — Edit the first three videos

**Time:** ~3–4 h
**Objective:** three finished videos following the §23 formula: hook (0–2s) → proof (2–6s) → explanation (6–15s) → benefit (15–25s) → CTA.

**Tasks**

1. **Video A (squat):** hook *"My phone just counted my squats."*
   Cut: 0–2s counter incrementing close-up → 2–6s wide shot of person +
   counter → 6–15s one line: *"Buzzend uses your phone camera to count
   reps while you work out."* → 15–25s *"So you can focus on moving
   instead of counting."* → end card CTA *"Try your first AI workout."*
2. **Video B (push-up):** hook *"Stop counting your reps."* Same structure.
3. **Video C (jumping jack):** question hook *"Can AI count my jumping
   jacks?"* — the video visibly answers it.
4. Burn in captions/subtitles on all three — most viewers watch muted.
   Keep total length 15–30 seconds.
5. Export one 9:16 master per video for native upload. Never post a
   TikTok-watermarked file to Reels or Shorts.
6. Pick a cover frame that shows person + counter together.

**Deliverable:** 3 finished videos + cover frames.
**Done when:** a stranger watching 3 seconds with the sound off
understands the phone is counting the reps.

---

## Day 7 — Publish + record the baseline

**Time:** ~2 h
**Objective:** first post live, and the "before" numbers written down.

**Tasks**

1. Publish **Video A** natively to IG Reels, TikTok and YouTube Shorts.
   Hold B and C for the Week 2 tests.
2. Caption from the message ladder + CTA + "link in bio" (tracked link).
3. Create the **metrics sheet** (columns listed at the top of this doc).
4. Record the baseline *before* content effects: followers per platform,
   store page views, installs, first-workout completion rate, D1 if
   available — from App Store Connect, Play Console and your analytics.
5. Spend 15–30 min replying to comments. Save verbatim questions
   ("is this real?", "what app is this?") — they become hooks.

**Deliverable:** first post live + baseline metrics recorded.
**Done when:** the pre-experiment numbers exist. Without a baseline,
Week 2 tests prove nothing.

---

# WEEK 2 — Find the Hook (Days 8–14)

Goal: test five different hooks/angles under controlled conditions and
find what produces *workouts*, not likes.

**Test protocol (applies Days 9–13):** one variable at a time. Publish
one video per day at the **same time of day** on all three platforms,
same CTA, same structure unless the test says otherwise. Log 24-hour
metrics the next morning. Judge by the **winner rule** (§33): the winner
produces store visits, installs and first workouts — not likes.

---

## Day 8 — Analyze the first content + prep the test week

**Time:** ~2–3 h

**Tasks**

1. Pull Day 7's results per platform: views, average watch time, the
   retention curve, and exactly where viewers dropped off.
2. Read the drop-off: leaving before 2s = hook problem; before 10s =
   proof problem; later = length problem.
3. Read every comment; harvest exact user words for future hooks.
4. Fix the posting time for the week based on when your audience was
   actually online.
5. Prep the five test videos for Days 9–13 from Day 5–6 footage. Edit
   tonight what's missing (the beginner and challenge versions).
6. Write your hypothesis: which hook will win, and why.

**Deliverable:** 5 test videos ready + a written hypothesis.
**Done when:** the whole test week could run even if you had zero spare
time on test days.

---

## Day 9 — Hook test 1: "My phone counted my squats."

**Time:** ~1–2 h
**Angle tested:** first-person surprise / product proof.

1. Publish the squat demo with this exact hook spoken/on screen in the
   first 2 seconds, on all three platforms, at the fixed time.
2. Same CTA: *"Try your first AI workout."*
3. Log Day 8's numbers. Reply to comments (15 min/platform).

**Done when:** posted on all platforms + previous day fully logged.

## Day 10 — Hook test 2: "Stop counting your reps."

**Time:** ~1–2 h
**Angle tested:** command / problem language (vs Day 9's product language).

1. Publish the push-up demo with this hook. Same protocol.
2. Log Day 9's 24h numbers before posting.

## Day 11 — Hook test 3: "Can AI count my push-ups?"

**Time:** ~1–2 h
**Angle tested:** curiosity / skepticism question.

1. Publish the question-hook video — make sure the counter visibly
   answers the question by ~3 seconds.
2. Log Day 10's numbers. Note whether question hooks pull more comments
   (they usually do — comments are a hook goldmine).

## Day 12 — Test beginner-focused content

**Time:** ~1–2 h
**Angle tested:** encouragement (Pillar 6) vs tech proof.

1. Publish a beginner-confidence video, e.g. *"Start with 10."* — ten
   squats counted on camera, message: *"Your first workout doesn't need
   to be perfect. Five minutes is better than zero."*
2. Softer tone, same CTA. Log Day 11's numbers.

## Day 13 — Test challenge content

**Time:** ~1–2 h
**Angle tested:** challenge energy (Pillar 4) + challenge CTA.

1. Publish a challenge video: *"50 squats with Buzzend."* or *"Try 20
   squats with me."* — do the challenge on camera, counter proving it.
2. Use the challenge CTA (*"Challenge a friend."*) — note this also
   tests CTA style (§33 #8).
3. Log Day 12's numbers.

## Day 14 — Compare the week

**Time:** ~2–3 h
**Objective:** a ranked table and a decision.

**Tasks**

1. Complete the sheet through Day 13 (note Day 13's numbers finalize
   tomorrow — mark them partial).
2. Build the comparison: rows = the 6 videos (Day 7 + Days 9–13);
   columns = platform, views, retention, profile visits, link taps,
   store visits, installs, first workouts (as far as attribution allows).
3. Apply the **winner rule**: rank by qualified outcomes
   (store visits → installs → first workouts), never by views or likes.
4. Answer the three weekly questions (§50): Who responded? What message
   worked? Did they actually use Buzzend?
5. Pick the **top 2 hooks** to keep and **1 loser** to kill. Write one
   paragraph: what do you believe now that you didn't a week ago?

**Deliverable:** Week 2 comparison table + written decision.
**Done when:** next week's content defaults to the winning hooks.

---

# WEEK 3 — Improve Conversion (Days 15–21)

Goal: take what worked and push it into the store pages and the first-
workout funnel. Keep publishing ~5 videos/week in the background using
the winning hooks.

---

## Day 15 — Double down on the strongest hook

**Time:** ~2–3 h

**Tasks**

1. Take the winning hook and write **5 variations** (change the
   exercise, the setting, the camera angle, the wording slightly —
   one change per variation).
2. Record/edit 2 of them today; schedule the week's posts.
3. Write down **why** it won (audience match? curiosity? speed of
   proof?). This reasoning drives the store copy on Days 16–18.

**Deliverable:** a repeatable recipe: hook pattern + exercise + structure.
**Done when:** you could brief someone else to produce the next 10
videos without you.

## Day 16 — Improve the App Store screenshots

**Time:** ~3–4 h

**Tasks**

1. Follow the §25 sequence exactly:
   1. *"Your phone counts. You just move."* — live workout + counter
   2. *"Automatic rep counting"* — reps increasing
   3. *"Real-time workout coaching"* — a coaching cue
   4. *"Squats. Push-ups. Lunges. More."* — supported exercises
   5. *"Build your daily streak"* — goal/streak
   6. *"Challenge your friends"* — challenge flow
2. Use the existing store-shot pipeline in this repo
   (`store-assets/templates/store-shot.html` → render at 1320×2868 for
   iOS). Real UI, Energy Orange brand, no fake counts.
3. If the winning hook's language beats the default caption on
   screenshot 1, use it.
4. Keep the subtitle candidate *"AI Workout & Rep Counter"*; queue the
   alternates (*"AI Coach for Home Workouts"*, *"AI Rep Counter &
   Coach"*) for a later ASO test — don't change everything at once.
5. Upload to App Store Connect (or stage for the next release).

**Done when:** 6 screenshots exported at 1320×2868 and submitted/staged.

## Day 17 — Improve the Google Play screenshots + listing

**Time:** ~2–3 h

**Tasks**

1. Same §25 sequence at 1080×1920 via the same template pipeline
   (`store-assets/android/`).
2. Rewrite the short description (80 chars) from the positioning, e.g.
   *"Your phone counts your reps and coaches your workout."*
3. Review the full description: the first 3 lines must answer *what is
   it / why is it different / does it work* before the fold.
4. Upload/stage in Play Console.

**Done when:** the Play listing explains the product without scrolling.

## Day 18 — Improve the store preview video

**Time:** ~3–4 h

**Tasks**

1. Cut a 15–30s preview per §25: phone down → person moves → counter
   changes → coaching → result. **No logo intro.**
2. Reuse the best-performing social footage where store specs allow
   (mind App Store rules about showing real device UI).
3. Export to both platforms' specs; upload/stage.

**Done when:** the first 3 seconds of the preview show the counter moving.

## Day 19 — Onboarding friction audit

**Time:** ~2–3 h
**Objective:** know exactly how many seconds and taps stand between install and the first counted rep (§48: "reduce friction to the first workout").

**Tasks**

1. Fresh-install the production app on iOS **and** Android. Screen-
   record and time yourself: install → first counted rep.
2. Write down every screen, tap, permission and decision point in
   order. Count the taps.
3. Mark friction: is camera permission requested before any value is
   shown? Is there a signup wall before the first workout? Unclear
   copy? Dead ends?
4. Rank the top 3 friction points by expected activation impact and
   file them as product tickets. (This is one of the two allowed
   engineering workstreams this month.)

**Deliverable:** onboarding audit — tap count, time-to-first-rep, top 3 fixes.

## Day 20 — Measure first-workout completion (activation)

**Time:** ~2–3 h
**Objective:** a real activation number. Activation = a user completes at least one successful AI workout (§19).

**Tasks**

1. Verify the funnel events exist and actually fire (§31):
   `app_open → onboarding_complete → workout_selected → camera_ready →
   workout_started → rep_counted → workout_completed`.
   Test-fire each on a device and confirm arrival in analytics.
2. Compute **activation rate** = users with ≥1 completed AI workout ÷
   installs, over the last 14 days.
3. Find the biggest drop between adjacent funnel steps — that step is
   the activation problem.
4. If events are missing or broken, ship the tracking fix **now** —
   all of Week 4 depends on it.

**Done when:** you can state: "X% of installs complete a first AI
workout, and the biggest leak is between step A and step B."

## Day 21 — Interview five users

**Time:** ~3–4 h

**Tasks**

1. Recruit 5 recent users: from comments/DMs, personal-network
   installs, or an in-app prompt. 15–20 min each, call or chat.
2. Script: How did you find Buzzend? What did you expect? Walk me
   through your first workout. Did the counting work? What almost
   stopped you? Have you come back — why / why not? Would you
   challenge a friend?
3. Record exact words — their vocabulary becomes hooks and store copy.
4. Write one insight per user + one common thread.

**Deliverable:** 5 interview notes + a summary.
**Done when:** you have at least one confirmed reason people stay and
one reason they leave, in their own words.

---

# WEEK 4 — Retention (Days 22–30)

Goal: understand whether people come back, why, and what Month 2 should
attack. Content keeps publishing on the winning hooks throughout.

---

## Day 22 — Measure the second workout

**Time:** ~2 h

1. Define it: % of activated users completing a **2nd workout within
   3 days** of the first (§18: install → first workout → success →
   second workout is the sequence that matters).
2. Pull the number for recent cohorts.
3. Compare returners vs non-returners: did returners set a goal? start
   a streak? get more reps counted in workout 1?
4. Write the one lever most likely to lift it (e.g., a post-workout
   goal prompt) as a **Month 2 hypothesis** — do not build it yet (§39).

## Day 23 — Review D1 retention

**Time:** ~2 h

1. Cohort users by install day (last 2–3 weeks); compute D1.
2. Split by source where possible (hook/platform) and by activated vs
   non-activated.
3. Confirm the expected pattern: activated users' D1 should be far
   above non-activated. If activation doesn't predict retention,
   question the activation definition with data.
4. Log everything into the weekly dashboard structure (§30).

## Day 24 — Review D7 retention

**Time:** ~2 h

1. Same cohort table for D7.
2. Compare D7 for users **with** a streak/goal vs **without**.
3. Note the curve shape: where is the biggest drop — D1→D3 or D3→D7?
4. Write one sentence: "Our D7 is X%, and the users who stay differ
   by ___."

## Day 25 — Test streak behavior

**Time:** ~2–3 h

1. Walk the streak flow yourself: complete a daily goal → does the
   streak start and display clearly? What happens after a missed day?
2. Pull the data: % of activated users who start a streak, streak
   length distribution, `daily_goal_completed` counts.
3. Note confusions/friction and file tickets (don't build).
4. Content tie-in: film a *"7-day streak"* clip for this week's
   posting slot.

## Day 26 — Test challenge behavior

**Time:** ~2–3 h

1. Walk challenge creation and joining end to end with a second
   account or a friend, on both iOS and Android.
2. Verify events fire: `challenge_created`, `challenge_joined`. Pull
   participation numbers.
3. **Test the invite deep link:** does a non-user who taps it reach the
   store, and land in the challenge after installing? The referral
   loop (§36) depends on this exact path.
4. File any breakage as high priority.

## Day 27 — Test sharing

**Time:** ~2–3 h

1. Share a workout result from the app. Check what the shared
   card/link actually looks like in an IG story, WhatsApp and iMessage.
2. Check: is the result self-explanatory (counter/result visible
   without explanation)? Does the link track
   (`invite_sent → invite_install`)?
3. Measure the current share rate: shares ÷ completed workouts.
4. Note the single best improvement to the share card; ticket it for
   Month 2. (Strongest viral moment per §36: *"I just did something
   worth showing my friend."*)

## Day 28 — Interview active users

**Time:** ~2–3 h

1. Recruit 3–5 users with multiple workouts or streaks (find them in
   the data or the community).
2. Ask: What keeps you coming back? Which feature would you miss most?
   Have you shared or challenged anyone — why / why not? What almost
   made you quit?
3. Capture their retention language verbatim — this becomes the
   marketing for retention features (§38).

*Optional (if the client's Family question needs movement): add 1–2
parent interviews this week using the §44 question list — research
only, no building.*

## Day 29 — Interview inactive users

**Time:** ~2–3 h

1. Recruit 3–5 users who installed but never activated, or activated
   and then disappeared for 7+ days.
2. Ask: What did you expect? What happened on your first try? Did the
   counting work? What would bring you back?
3. Categorize the churn reasons: product bug / unmet expectation / no
   habit hook / wrong audience.
4. Match the categories against the Day 19–20 friction findings — they
   should corroborate each other.

## Day 30 — Month 1 report + choose Month 2 experiments

**Time:** ~3–4 h

**Tasks**

1. Fill the §51 month-end template completely:
   - **What worked:** top audience, top hook, top exercise, top format,
     top CTA.
   - **What didn't:** audience, hook, content, store page, CTA.
   - **Product behavior:** installs, first workouts, activation rate,
     second workouts, D1, D7, D30, challenges, shares, referrals.
2. Make three explicit decisions: **Continue** (what gets more effort),
   **Stop** (what gets killed), **Test** (next hypotheses).
3. Pick Month 2 experiments from the §33 list. Recommended starting
   set (§27 Month 2):
   - 10–15 variants of the winning hook
   - 5 micro-creator tests (5K–100K followers, unique tracked links, §34)
   - 2 store-page variants
   - 2 CTA styles (*"Try your first AI workout"* vs *"Challenge a friend"*)
4. Set Month 2 KPI targets: activation rate, D7, referral rate, cost
   per activated user if paid starts.
5. Save as `MONTH_1_REPORT.md`.

**Done when:** Month 2 has a written plan with numbered experiments —
and evidence, not opinion, decided them.

---

# After Day 30 — what happens next (§27)

- **Month 2 — Testing:** find repeatable acquisition. KPIs: activation,
  D7, referral rate, cost per activated user.
- **Month 3 — Scaling:** scale only what has evidence — best creatives,
  best creator, best store pages, then Apple Search Ads / Meta / TikTok
  paid. KPIs: stable acquisition cost, stable activation, improving
  D7/D30, growing organic share.
- **Family/School:** research only (§44–45). Nothing gets built until
  parent demand is validated.
