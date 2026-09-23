# Day 16 — Gaurab

**Objective:** Freeze the complete Sprint-1 baseline into one tracker tab — every Sprint-2 claim gets judged against these numbers — and confirm the Day-2 iOS metadata actually went live.
**Total time:** ~2.5–3h

## Task 1 · 🔥 Build the `Sprint2-Baseline` tab from the full Sprint-1 numbers (100–120 min)

**Why:** Sprint 2 is about scaling acquisition from 4–5 installs/day, and "scaling" only means something against a frozen starting line. One tab, every number, dated today — on Day 28 we put the results right next to it.
**Where:** play.google.com/console + App Store Connect + Growth Tracker.
**Tools:** Play Console login, browser, Growth Tracker (`Daily Numbers`, `Social`, `Store-iOS`, `Store-Android` tabs), `buzzend-marketing/13-analytics/metrics-for-beginners.md` (the funnel dictionary).

**Steps:**
1. First thing, send Avinaya ONE message: "Please add me in App Store Connect → Users and Access so I can run iOS store work this sprint." Then keep working — don't wait on the reply. iOS console actions are yours from today; this message is the only setup.
2. Create a new tab in the Growth Tracker named exactly `Sprint2-Baseline` and put the date in cell 1: "Baseline frozen Day 16 (2026-09-22)".
3. **Installs/day, both stores:** Play Console → Statistics (Days 1–15 range) for Android; for iOS use App Store Connect → Analytics → Metrics if your access has landed, otherwise copy the iOS column from `Daily Numbers` and mark the rows "from tracker — refresh from ASC when access lands". Record the Days 1–15 daily numbers and the average/day.
4. **Conversion rate, both stores:** store listing visitors → installs for the Sprint-1 window (Play: Statistics; iOS: ASC Analytics or the `Store-iOS` audit rows from Day 10/14).
5. **Search terms:** Play Console → Store performance → Search — paste every term with its visitors and conversion as of today. This snapshot is what Day 24 compares against.
6. **Reviews:** current review count + rating on both stores (one row each).
7. **Per-post reach:** from the `Social` tab, copy each Sprint-1 post's reach into a compact table (post, platform, reach) plus the total.
8. **Link clicks:** open https://winjee-dev.firebaseio.com/sprint/links.json in a browser and record the click counts for `/go/ios` and `/go/android`.
9. Sanity-read the tab top to bottom: every metric has a number or an explicit "no data yet" — never a blank cell.

**Deliverable:** A complete, dated `Sprint2-Baseline` tab in the Growth Tracker.
**Done when:** Every metric above has a number or an explicit "no data yet", the tab is date-stamped, and the ASC-access message to Avinaya is sent.
**Depends on:** —

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
