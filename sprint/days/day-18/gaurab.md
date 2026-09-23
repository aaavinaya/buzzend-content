# Day 18 — Gaurab

**Objective:** Map exactly how a user invites a friend into a challenge — tap by tap, friction and all — so every future invite ask points at the smoothest real path, and re-check where we rank.
**Total time:** ~2.5h

## Task 1 · 🔥 Audit the challenge join-code and share flows on Android (90–110 min)

**Why:** Users inviting users is the only free channel that scales itself, and right now nobody on the team can say from memory what a friend actually sees. Today we walk it as a stranger would and write it down — reference material, not product tickets.
**Where:** Buzzend app on your Android phone; new file `buzzend-marketing/12-community/how-to-invite-friends.md`.
**Tools:** Android phone, screenshots, code editor, `buzzend-marketing/12-community/how-to-join-squat-starter.md` (the format to mirror).

**Steps:**
1. In the app, open a challenge you're in and find every way to bring a friend in: the share button, the join code, and whatever link the share sheet actually produces. Follow each path to its end.
2. Send yourself the shareable link/code (second device or a messaging app) and complete the join as the RECEIVING side: what opens, how many taps from tap-to-joined, where a brand-new user without the app would land.
3. Write `buzzend-marketing/12-community/how-to-invite-friends.md`, mirroring the structure of `how-to-join-squat-starter.md`: one numbered tap-by-tap sequence per flow (share flow, join-code flow), written so a beginner can follow it with the phone in hand.
4. Screenshot each step for your own reference while writing. Raw device screenshots are internal working material only — they never get published (brand rule: only `assets/screens-clean/`-style imagery goes public).
5. Add a "Friction" section at the bottom: every point where you hesitated, hunted for a button, or the receiving side hit a wall. Reference-only — no product changes this sprint, no tickets; this list feeds content and invite wording.
6. Note the doc path in the Growth Tracker so Riya and Aditya can pull the exact invite steps into captions and stories without asking.

**Deliverable:** `buzzend-marketing/12-community/how-to-invite-friends.md` — both flows tap-by-tap plus a friction list (3+ observations).
**Done when:** Someone who has never invited anyone could do it using only the doc, and the friction section has at least 3 honest entries.
**Depends on:** —

## Task 2 · 🟡 Fresh keyword rank check on both stores vs baseline (40–50 min)

**Why:** Yesterday's metadata round only matters if positions move. Checking now, one day in, gives us the "before movement" marker the Day-24 deep dive will lean on.
**Where:** Play Store on your Android device + the iOS App Store (an iPhone if you can borrow one).
**Tools:** Android phone, Growth Tracker (`Store-Android`, `Store-iOS`), the Day-1/Day-14 keyword tables.

**Steps:**
1. Take the top-10 keywords from the Day-14 table (the CONFIRMED + SURPRISE terms).
2. Search each on the Play Store from your device; record Buzzend's position (scroll max 50; "not found" is a valid answer). Screenshot the best three.
3. iOS: repeat on a borrowed iPhone if one is within reach today. If not, mark the iOS column "not checked — no iOS device today" and move on; an honest gap beats a guessed number.
4. Log every position in `Store-Android`/`Store-iOS` right next to the Sprint-1 positions from Day 10/14, dated, with a one-line delta note ("up 4", "flat", "new entry").
5. Anything that moved 5+ places either way gets one line on the likely cause.

**Deliverable:** Top-10 keyword positions logged vs baseline for Play (and iOS if a device was available), dated.
**Done when:** All 10 Play positions are recorded with deltas, and iOS is either recorded or explicitly marked not-checked.
**Depends on:** —
