# Day 2 — Gaurab

**Objective:** Ship a Play listing built on real search phrases — Play indexes the whole description, so today's rewrite is our biggest Android ranking lever — then make sure it actually reads well on a phone.
**Total time:** ~2.5h

## Task 1 · 🔥 Rewrite the Play title, short description and full description, then publish (90–120 min)

**Why:** Google reads every word of the listing for ranking. Yesterday you found the phrases people actually type and the terms we already rank for; today they go into the listing — naturally, because keyword-stuffing gets listings suppressed.
**Where:** play.google.com/console → Buzzend → Grow → Store presence → Main store listing.
**Tools:** Play Console login, `Store-Android` tab of the Growth Tracker (your Day-1 table, top 5 bolded), a character counter.

**Steps:**
1. Open your Day-1 `Store-Android` table. Line up the top 5 bolded keywords, plus any terms from Play's own Search report (the ones we already rank for — cheapest wins first).
2. Draft the title, max **30 characters**: app name + your #1 phrase.
3. Draft the short description, max **80 characters**: your strongest search phrase written as a benefit a human would tap, not a keyword list. Use the approved one-liner from `buzzend-marketing/00-strategy/what-is-buzzend.md` as raw material.
4. Rewrite the full description: opening paragraph = the approved one-liner (Avinaya is drafting the same paragraph for iOS today — sync so the stores match); then short benefit paragraphs and a feature list covering only real features (AI rep counting for squats/push-ups/sit-ups/jumping jacks/lunges, camera-verified challenges, Beat-It, streaks, leaderboards, discover).
5. Weave each of the top 5 keywords in naturally **2–3 times each** across the full description — in sentences a human would write. Read it out loud: if a sentence exists only to hold a keyword, rewrite it.
6. Check against the banned-words list in `what-is-buzzend.md`. Zero tolerance.
7. Record the before/after in `Store-Android`: old title/short/full vs new, plus today's date.
8. Paste all three fields into Play Console, save, and publish (it goes into Google review — note the time in the tracker).

**Deliverable:** New title, short description and full description published to review + before/after in `Store-Android`.
**Done when:** Play Console shows the listing changes in review and the tracker holds both versions with the date.
**Depends on:** Gaurab · Day 1 · Task 2 (the keyword table with top 5 bolded).

## Task 2 · 🟡 Verify the updated listing renders well on a real device (30–40 min)

**Why:** Play truncates titles in search results, collapses the full description behind one tap, and eats line breaks — a listing that looks great in the Console form can look broken on a phone. Nobody installs from a broken-looking listing.
**Where:** Play Store app on your Android phone (+ the Console preview while review is pending).
**Tools:** Android phone, screenshots, `Store-Android` tab.

**Steps:**
1. While Google review is pending, use the Main store listing preview in Play Console to sanity-check layout first.
2. As soon as the update is live (check every few hours), open our listing in the Play Store app on your real device.
3. Search one of your top keywords and screenshot how the title renders in search results — is it truncated mid-word? Does the short description show in full on the listing page?
4. Open the full description ("About this app" → expand): check that paragraph breaks survived, the feature list is scannable, and the first two lines shown before expansion carry the strongest message.
5. Screenshot everything into the tracker. If anything truncates badly or the line breaks collapsed, fix the text in the Console and republish today.
6. Log one row in `Store-Android`: "Listing verified on device — date + result".

**Deliverable:** Device screenshots of the live (or previewed) listing + a verified/fixed note in `Store-Android`.
**Done when:** Title, short description and full-description formatting all confirmed readable on a real device (or the fix is republished).
**Depends on:** Gaurab · Day 2 · Task 1.
