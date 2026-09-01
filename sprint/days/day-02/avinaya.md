# Day 2 — Avinaya

**Objective:** Turn yesterday's keyword research into live iOS metadata — the single highest-leverage ASO change of the sprint — and start the new description.
**Total time:** ~2.5h

## Task 1 · 🔥 Rewrite the iOS title, subtitle and keyword field, then submit (90–120 min)

**Why:** The App Store ranks us almost entirely on title, subtitle and the hidden keyword field. Yesterday's 20-keyword table is worthless until those exact words are in the live listing — and review takes a day or two, so it ships today.
**Where:** App Store Connect (appstoreconnect.apple.com) → My Apps → Buzzend → App Store tab.
**Tools:** App Store Connect login, `Store-iOS` tab of the Growth Tracker (your Day-1 keyword table), a character counter (`=LEN()` in a spare sheet cell works).

**Steps:**
1. Open your Day-1 keyword table and put the top 3 bolded keywords in front of you.
2. Draft 3 title options, max **30 characters** including spaces: app name + the strongest keyword phrase (shape: *Buzzend: AI Rep Counter* — but use YOUR #1 keyword). Count every option with `=LEN()`.
3. Draft 2 subtitle options, max **30 characters**, built on keyword #2. Rule: never repeat a word that's already in the title — Apple indexes each word once, repeats waste a slot.
4. Fill the **100-character** keyword field with the rest of the shortlist: comma-separated, no spaces after commas, no words already used in title/subtitle, no singular+plural of the same word. Squeeze until you're at 95+ characters used.
5. In `Store-iOS`, record the before/after: old title, subtitle, keyword field on one row; the new versions + today's date on the next. Day 15 attributes ranking changes to this exact moment.
6. In App Store Connect, open the editable version (create a new version if none is editable), paste the new title, subtitle and keyword field, and save.
7. Submit for review. Note the submission time in the tracker `Notes` — metadata only goes live after Apple approves.

**Deliverable:** New title/subtitle/keyword field submitted, before/after documented in `Store-iOS`.
**Done when:** App Store Connect shows the version as submitted ("Waiting for Review") and the tracker shows both old and new metadata with the date.
**Depends on:** Avinaya · Day 1 · Task 2 (the keyword table with top 3 bolded).

## Task 2 · 🟡 Draft the new iOS description opening paragraph (30–40 min)

**Why:** Apple doesn't rank us on the description, but humans read the first two lines before tapping "more" — that's a conversion lever. We draft it now, with approved wording, so it's ready to ship with the current or next submission.
**Where:** A doc linked in the tracker, wording from `buzzend-marketing/00-strategy/what-is-buzzend.md`.
**Tools:** Laptop, `Store-iOS` tab.

**Steps:**
1. Re-read the approved wording table in `buzzend-marketing/00-strategy/what-is-buzzend.md` — the opening line is a version of "Buzzend uses your phone camera to count your workout reps and coach you while you exercise." Copy, don't invent.
2. Write a 3–4 sentence first paragraph: the one-liner, then what it counts (squats, push-ups, sit-ups, jumping jacks, lunges), then the together layer (camera-verified challenges with friends, Beat-It, streaks, live leaderboards).
3. Check it against the banned-words list in the same file (no "perfect form", "guaranteed", "world's first", no tech-speak like "computer vision") — delete on sight.
4. Read it out loud once; cut anything that sounds like an ad.
5. Paste the paragraph into `Store-iOS`. If your Task-1 version is still editable in App Store Connect, drop it in as the description opener before it goes to review; otherwise mark it "ships with next update".
6. Ping Gaurab with the paragraph — his Play full description today should use the same approved phrases so the stores stay consistent.

**Deliverable:** Approved-wording opening paragraph in `Store-iOS`, shared with Gaurab.
**Done when:** The paragraph is in the tracker, banned-word-free, and Gaurab has it.
**Depends on:** —
