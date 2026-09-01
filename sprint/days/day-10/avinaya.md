# Day 10 — Avinaya

**Objective:** Find out whether the Day-2 metadata change actually moved iOS conversion — and if it didn't, change exactly one thing and log it as an experiment.
**Total time:** ~2.5h

## Task 1 · 🔥 iOS conversion audit + one-screenshot iteration (90–120 min)

**Why:** We changed the iOS metadata on Day 2 on a hypothesis. A week of data now exists — today we read it, and either keep our hands off or make ONE deliberate change. Changing several things at once teaches us nothing.
**Where:** App Store Connect → Analytics; `Store-iOS` + `Experiments` tabs; the store-assets pipeline if a change is needed.
**Tools:** App Store Connect, Growth Tracker, `store-assets/templates/store-shot.html`, `store-assets/templates/jobs-ios-1284x2778.json`, `tools/shoot.mjs`, `buzzend-marketing/16-templates/planning-templates.md` (template 13 — Experiment tracker).

**Steps:**
1. In App Store Connect → Analytics → Metrics, pull two windows: **A =** the 7 days ending the day before the Day-2 metadata change, **B =** the 7 days after it (Days 3–9).
2. Record both into `Store-iOS`: Impressions, Product Page Views, Total Downloads — plus two computed rates per window: page views ÷ impressions, and downloads ÷ page views.
3. Write a verdict row: up / flat / down. Our numbers are small, so they wobble — treat anything under ~15% relative change as flat.
4. If conversion is clearly up: change nothing. Note in `Store-iOS` what we believe worked, and skip to step 8.
5. If flat or down: change ONE thing — screenshot #1's headline. Open `store-assets/templates/jobs-ios-1284x2778.json`: the first job's URL carries `title=Fitness+is+better+*with+friends.*`. Rewrite the `title` (and `sub` if it must match) to lead with proof — e.g. a rep-counting line in your words. Check `buzzend-marketing/00-strategy/what-is-buzzend.md`: no banned words.
6. Rebuild: from `tools/` run `node tools/shoot.mjs ../store-assets/templates/jobs-ios-1284x2778.json` (Playwright lives in `tools/` — see the repo README, "Making a new post"). For the 6.9" size, duplicate the first job entry with width 1320 / height 2868 and out `…/01-social-1320x2868.png`, and run again.
7. Upload the new 01-social PNGs to App Store Connect (App Store tab → screenshots, replace slot 1) and submit.
8. Log an `Experiments` row using template 13 in `planning-templates.md`: **Hypothesis** ("a proof-led first screenshot lifts page-view→install conversion") → **Change** (exact old/new headline + today's date) → **Metric to watch** (downloads ÷ page views over the next 7 days). If you changed nothing, log that decision too — "no change, conversion up X%" is a result.

**Deliverable:** Before/after table + verdict in `Store-iOS`; either a "no change" note or the new screenshot #1 submitted; one `Experiments` row.
**Done when:** Both 7-day windows have every number, and the decision — keep or one change — is logged with a date.
**Depends on:** —

## Task 2 · 🟡 Keyword rank check vs Day 1 (30 min)

**Why:** Conversion tells us if the page sells; rank tells us if anyone sees it. Movement on our top keywords is the earliest signal the Day-2 metadata is working.
**Where:** App Store search on your iPhone; `Store-iOS` tab.
**Tools:** iPhone, Growth Tracker, Gaurab's Day-1 ranking screenshots.

**Steps:**
1. Take your top 5 keywords (the bolded ones from Day 1 in `Store-iOS`).
2. Search each in the App Store exactly like a stranger would; record today's position — scroll to 50 max, "not found" is a valid answer.
3. Put today's positions next to the Day-1 positions (Gaurab's Day-1 screenshots + your notes) in `Store-iOS`, one row per keyword, with the delta.
4. Anything that moved 5+ places either way: one line on the likely cause, and flag it in team chat — it hints which metadata words are pulling.

**Deliverable:** 5-keyword rank comparison (Day 1 vs Day 10) in `Store-iOS`.
**Done when:** All 5 keywords have both positions and a delta.
**Depends on:** —
