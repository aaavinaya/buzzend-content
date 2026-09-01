# Buzzend — KPI & Tracking System

The measurement layer for Month 1. Sources: strategy §19 (activation),
§29 (core metrics), §30 (weekly dashboard), §31 (events), §33 (winner
rule), §50 (three questions).

## Ground rules

- **The 5 that matter first (§29):** store visits · installs ·
  first-workout rate · D7 · referrals/shares. When time is short, track
  these five and skip the rest.
- **Winner rule (§33):** content is judged by qualified outcomes (store
  visits → installs → first workouts), never views/likes.
- **Revenue metrics: N/A this month.** Monetization isn't active; per
  §30, add purchases / subscription conversion / CAC / LTV / ROAS only
  when it is. Nothing else in this file changes when that happens.
- **⚠ marks assumption targets.** The strategy defines *what* to measure
  but sets no Month-1 quotas (Month 1 = learning). ⚠ numbers are
  calibration thresholds to compare against your own Day-7 baseline —
  re-set them on Day 14 once real data exists.

## Instrumentation checklist (verify Day 20, §31)

`app_open · onboarding_complete · workout_selected · camera_ready ·
workout_started · rep_counted · workout_completed · daily_goal_completed ·
streak_started · challenge_created · challenge_joined · workout_shared ·
invite_sent · invite_install · invite_activation`

Plus: per-platform tracked store links (`ig`/`tt`/`yt`, Day 4), App Store
Connect + Play Console access, the metrics sheet (Day 7).

---

## Awareness

| KPI | Definition | Why it matters | Source | Cadence | Target | Warning | If below target |
|---|---|---|---|---|---|---|---|
| Reach | Unique accounts that saw any content | Top of funnel exists at all | IG/TikTok/YT analytics | Weekly | ⚠ growing week-over-week from Day 7 baseline | 2 consecutive flat/down weeks | Hook problem — widen hook angles (new pillar mix), not volume |
| Video views | Views per video per platform | Raw distribution per piece | Platform analytics | Daily (24 h after post) | ⚠ trend vs. your own median | single video ≪ median | Check first-2 s: was the counter visible? Re-cut, don't repost |
| Avg watch time / retention % | How far viewers get | Diagnoses hook (exit <2 s), proof (<10 s), length | Platform analytics | Daily per post | ⚠ ≥50% avg watched | <30% | Exit <2 s → new hook; <10 s → faster proof; late → cut to ≤20 s |
| Profile visits | Views → profile | Interest beyond the scroll | Platform analytics | Daily | ⚠ rising with view count | views up, visits flat | CTA/caption mismatch — restate CTA on end card |

## Engagement

| KPI | Definition | Why | Source | Cadence | Target | Warning | If below |
|---|---|---|---|---|---|---|---|
| Comments | Comments per post | Questions = hook goldmine + algorithm fuel | Platforms | Daily | reply to 100% | unanswered >24 h | Do the standing 15-min block; it's non-negotiable |
| Shares / saves | Sends + bookmarks per post | Best organic-quality signal | Platforms | Daily | ⚠ shares+saves ≥1% of views | ~0 on proof videos | Proof not surprising enough — tighten to counter close-up |
| Engagement rate | (likes+comments+shares+saves)/views | Cross-video comparability | Sheet (computed) | Weekly | ⚠ beat your own median | falling 2 weeks | Rotate pillar mix; check for repetitive cuts |

## Acquisition

| KPI | Definition | Why | Source | Cadence | Target | Warning | If below |
|---|---|---|---|---|---|---|---|
| Link taps | Taps on `ig`/`tt`/`yt` links | Content→store intent, attributable per hook | Link tool | Daily | ⚠ ≥0.5% of views | ~0 with good views | CTA missing/weak in final seconds; bio link broken — retest Day 4 setup |
| Store visits | Store product-page views | The §29 metric #1 | App Store Connect / Play Console | Daily | ⚠ ≥1 hook drives ≥2× baseline by Day 14 | none by Day 14 | Angle problem, not volume: test new pillars before making more of the same |
| Installs | First-time downloads | §29 #2 | ASC / Play Console | Daily | ⚠ conversion (installs/store visits) ≥ store category norm; watch trend | conversion falls after page update | Roll back the store change — one variable at a time (Day 16–18) |
| Signups | Accounts created (if account exists pre-workout) | Funnel step if present | App analytics | Weekly | — measure only | big install→signup drop | It's onboarding friction — feed Day 19 audit |
| Install conversion per hook | installs attributed to a hook's window/link | What Month 2 scales | Sheet (manual attribution) | Per test (Days 9–13) | best hook identified Day 14 | attribution impossible | Fix link discipline; same-day single-post protocol exists exactly for this |

## Activation (§19)

| KPI | Definition | Why | Source | Cadence | Target | Warning | If below |
|---|---|---|---|---|---|---|---|
| First-workout starts | Users firing `workout_started` | Intent inside the app | App analytics | Weekly | — baseline | ≪ installs | Onboarding wall — Day 19 top-3 tickets |
| **Activation rate** | Users with ≥1 `workout_completed` ÷ installs (14-day window) | **The primary KPI (§53)** | App analytics | Weekly (first real read Day 20) | ⚠ ≥30% aspiration; know your real number | <15% | Attack the biggest funnel-step drop (Day 20 finding) before making any new content |
| Onboarding completion | `onboarding_complete` ÷ `app_open` (new users) | Where pre-value drop-off happens | App analytics | Weekly | — baseline | <50% | Permission timing/signup wall — Day 19 tickets |
| Camera-ready rate | `camera_ready` ÷ `workout_selected` | Camera permission = the scary step | App analytics | Weekly | — baseline | big drop here | Explain value *before* asking permission (ticket, don't build features) |
| First successful count | ≥1 `rep_counted` in first session | The "wow" actually happened | App analytics | Weekly | — baseline | starts ≫ counted | Product reliability — §40 also blocks demos of broken exercises |

## Retention

| KPI | Definition | Why | Source | Cadence | Target | Warning | If below |
|---|---|---|---|---|---|---|---|
| D1 | % of install-day cohort active next day | Immediate stickiness | App analytics (cohorts) | Weekly (deep-dive Day 23) | ⚠ activated-user D1 ≫ non-activated | activation doesn't predict D1 | Question the activation definition with data (Day 23 task) |
| D7 | % active 7 days after install | §29 #4; Month-2 headline KPI | Cohorts | Weekly (deep-dive Day 24) | ⚠ know it + know how streak users differ | D7 ≈ 0 despite activation | First workout under-delivers — interviews (Days 21/29) tell you why |
| D30 | % active 30 days after install | Habit signal (readable late in month) | Cohorts | Day 30 report | — first read only | — | — |
| Second-workout rate | % of activated completing 2nd workout ≤3 days | The §18 sequence's key link | App analytics | Day 22, then weekly | ⚠ ≥40% directional | <20% | Post-workout next-step prompt = top Month-2 hypothesis |
| Returning users / workout frequency | Workouts per activated user per week | Depth beyond binary retention | App analytics | Weekly | — baseline | falling | Check streak/goal usage (Day 25) |
| Streak starts | `streak_started` ÷ activated | Retention feature adoption | App analytics | Day 25, weekly | — baseline | ≈0 | Streak invisible post-workout? Ticket it |

## Referral / share (§36)

| KPI | Definition | Why | Source | Cadence | Target | Warning | If below |
|---|---|---|---|---|---|---|---|
| Share rate | `workout_shared` ÷ `workout_completed` | §29 #5; the viral loop's first step | App analytics | Day 27, weekly | — baseline | ≈0 | Share card not worth showing — Day 27 improvement ticket |
| Challenge participation | `challenge_created` + `challenge_joined` | The strongest loop Buzzend owns | App analytics | Day 26, weekly | — baseline | joins ≈ 0 | Deep-link path broken? Day 26 test is mandatory |
| Invites → installs → activations | `invite_sent → invite_install → invite_activation` | True referral chain | App analytics | Weekly | — baseline | breaks mid-chain | Fix tracking first; you can't improve what you can't see |

## Weekly dashboard assembly (§30)

Every Friday (and in each WEEKLY_REVIEW): one row per week —
Acquisition (reach, views, store visits, installs) · Activation (starts,
completions, rate) · Retention (D1/D7/D30) · Engagement (workouts/user,
reps counted, goals, streaks, challenges, shares) · Referral (invites,
referred installs, referred activations). Then answer §50: Who responded?
What message worked? **Did they actually use Buzzend?**
