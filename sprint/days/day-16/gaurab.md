# Day 16 — Gaurab

**Objective:** Freeze the complete Sprint-1 baseline into one tracker tab — every Sprint-2 claim gets judged against these numbers — and confirm the Day-2 iOS metadata actually went live.
**Total time:** ~2.5–3h

## Task 2 · 🟡 Verify the Day-2 iOS metadata actually shipped (30–40 min)

**Why:** The Day-2 iOS metadata went in as a submission, and metadata only goes live after Apple approves. If it never shipped, two weeks of iOS ASO exists only in a console draft — we need to know today, not on Day 28.
**Where:** The live iOS listing in a web browser (apps.apple.com renders it — no iPhone needed) + App Store Connect if your access has landed.
**Tools:** Browser, the App Store link from `sprint/config.js`, Growth Tracker `Store-iOS` tab (the Day-2 metadata log — old vs new).

**Steps:**
1. Open the App Store link from `sprint/config.js` in a browser and read the live title and subtitle exactly as shown.
2. Compare against the `Store-iOS` metadata log from Day 2: does the live listing show the NEW title/subtitle or still the old one?
3. **If live:** screenshot the listing, file it in `Store-iOS` dated today, and write one line: "Day-2 metadata confirmed live."
4. **If not live:** check the version status in App Store Connect if you have access ("Waiting for Review", "Rejected", or never submitted). No access yet? Note "status unknown — checking first thing Day 17".
5. Either way, write the exact next step into `Store-iOS` for tomorrow's metadata round — e.g. "version 1.x sits in Waiting for Review: don't touch, layer the approved set into the NEXT version" or "metadata never shipped: enter and submit the approved set field-by-field on Day 17". Day 17 Task 1 starts from this line with zero digging.

**Deliverable:** A dated "live or not" verdict in `Store-iOS` with the exact Day-17 release step written down.
**Done when:** The live listing has been read against the Day-2 log and `Store-iOS` says exactly what Day 17 must do.
**Depends on:** —
