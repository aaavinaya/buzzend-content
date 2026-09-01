# Day 14 — Gaurab

**Objective:** Replace our Day-1 keyword guesses with what two weeks of real search data says, in both stores' metadata — then verify nothing broke.
**Total time:** ~3h

## Task 1 · 🔥 Run ASO iteration 2 from real search terms (120–140 min)

**Why:** On Day 1–2 we picked keywords from autocomplete guesses. We now have something better: two weeks of what people ACTUALLY typed before finding us. Metadata built on real queries beats metadata built on hunches — this is the single highest-leverage hour of the week.
**Where:** Play Console + App Store Connect + Growth Tracker (`Store-iOS`, `Store-Android` tabs).
**Tools:** Play Console login, App Store Connect login, Growth Tracker, our Day-1 keyword tables.

**Steps:**
1. Play Console → Store performance → Search: export/copy every search term from the last 2 weeks with its visitors and conversion. These are real humans typing real words.
2. App Store Connect is stingier: Analytics → Sources shows how much traffic came from App Store Search but not the words. Note the search-traffic volume, then use the Play terms + our Day-10 audit notes as the best available proxy for what iOS searchers type — say so honestly in the tracker.
3. In `Store-Android`, put the real terms next to the Day-1/2 picks. Mark each original pick: CONFIRMED (people actually search it), DEAD (zero appearances), or SURPRISE (a term we never targeted that's bringing people in).
4. Rewrite the Play short description and full description keyword placements: drop the DEAD terms, work the SURPRISE terms in naturally (Play indexes the whole description — repetition should read like a human wrote it). Approved wording only, per `buzzend-marketing/00-strategy/what-is-buzzend.md`; banned words stay banned. Save the changes — Play edits go live within hours, no release needed.
5. Rebuild the iOS 100-character keyword string the same way (drop DEAD, add SURPRISE, no spaces after commas, no words already in title/subtitle). Important: the iOS keyword field only takes effect with an app version release — stage the new string in App Store Connect if a version is already in progress, otherwise save it in `Store-iOS` marked "ready for next release". Do NOT push a product release just for keywords — no product changes this sprint.
6. Log before/after in the tracker: old string/description phrases → new ones, date, and which real search terms justified each swap. Day-14's readout conversion section will reference this as "change #3".

**Deliverable:** Updated Play descriptions live, new iOS keyword string staged, before/after + justification in the tracker.
**Done when:** Every keyword swap has a real search term behind it, and the tracker shows old vs new for both stores.
**Depends on:** —

## Task 2 · 🟡 Verify both listings on real devices (40–50 min)

**Why:** Same rule as Day 2: metadata edits sometimes truncate, garble, or render differently than the console preview. Two weeks of ASO work dies if the live listing reads broken.
**Where:** Play Store on your Android device + App Store on an iPhone (grab Avinaya's).
**Tools:** Both phones, screenshots, Growth Tracker.

**Steps:**
1. Once the Play edits show live, open our listing on a real Android device: read the short description exactly as shown, check where the full description truncates ("Read more" fold), confirm no keyword-stuffed sentence reads robotic.
2. Search "buzzend" plus 3 of the new SURPRISE terms on Play; screenshot our position for each (scroll max 50).
3. On the iPhone, confirm the current iOS listing is unchanged and intact (the keyword string is staged, not live — nothing should have moved).
4. Screenshot both listings and file them in the tracker next to the Day-2 verification shots, dated — the before/after picture pair for the readout.
5. Anything broken: fix in the console today and re-verify.

**Deliverable:** Dated verification screenshots + search-position notes in the tracker.
**Done when:** Play listing reads clean on-device and all screenshots are filed.
**Depends on:** Gaurab · Day 14 · Task 1.
