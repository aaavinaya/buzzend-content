# Day 7 — Gaurab

**Objective:** Turn our first genuine users into honest store reviews — the right way — and find out whether Play lets us run listing experiments for Day 10.
**Total time:** ~2h

## Task 1 · 🔥 Ask 5 genuine early users for an honest store review (60–75 min)

**Why:** Review count and recency lift store conversion, and this week created real users — friends who installed, joined the challenge, and had reps counted. They're the only people we ever ask: real users, individually, honestly. Strangers, incentives, and star-scripts are permanently off the table.
**Where:** WhatsApp / Messenger — the same threads where you invited them.
**Tools:** Phone, `Outreach` tab, store links from `sprint/config.js`.

**Steps:**
1. From `Outreach`, list everyone you and the team invited on Days 4–5, and keep only people who ACTUALLY use it — they installed and did at least one counted workout or challenge day. Confirm in the thread if unsure ("did the squat counter behave for you?").
2. Pick the 5 with the most real usage. If fewer than 5 qualify, ask fewer — never pad the list with someone who hasn't genuinely used the app.
3. Message each one individually, in your own words: thank them for trying it, then ask for an **honest** review on the store they use — explicitly say "whatever you really think helps us". No incentives, no "5 stars would be great", no copy-paste text.
4. Send each the right link from `sprint/config.js` (Play for Android friends, App Store for iOS) so it's one tap.
5. If someone had a bad experience, do NOT push the review — get the details, log them in tracker Notes, and tell them you'll ping them when it's fixed. That thread is worth more than a review.
6. Log all 5 asks in `Outreach`: name · date · "review ask" · store · response.

**Deliverable:** Up to 5 personal review asks sent + `Outreach` rows for each.
**Done when:** Every qualifying user is asked and logged, and nobody on the list is a stranger or non-user.
**Depends on:** —

## Task 2 · 🟡 Check Play Console for Store listing experiments (30–40 min)

**Why:** Day 10 is store-experiment day. Whether we can A/B test the listing properly — or must fall back to before/after comparison — changes how we prepare, so we find out now, not then.
**Where:** play.google.com/console.
**Tools:** Play Console login, tracker `Experiments` tab.

**Steps:**
1. In Play Console, go to Grow (Store presence) and look for **Store listing experiments** for Buzzend.
2. If it's available: open it and note exactly what we can test — icon, feature graphic, screenshots, short/full description — plus minimum audience requirements and how long Google suggests running a test.
3. If it's not available (account too new / not eligible): note that, and write the manual fallback — change ONE listing element, compare store listing conversion rate (acquisitions ÷ visitors) for 7 days before vs 7 days after, using the `Store-Android` baseline rows from Day 1.
4. Either way, write one line on WHICH element you'd test first and why — Riya's Day-1 competitor teardown (`buzzend-marketing/03-competitors/sprint-teardown.md`) says what screenshot styles dominate; our difference (camera-counted challenges with friends) should be visible in frame 1.
5. Record findings in the `Experiments` tab as a "Day 10 prep" row and post a one-liner in team chat.

**Deliverable:** `Experiments` row: experiments available yes/no, what's testable, first-test recommendation.
**Done when:** The team chat one-liner is posted and Day 10 has a clear path (real experiment or manual before/after).
**Depends on:** —
