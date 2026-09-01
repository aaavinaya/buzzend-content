# Day 1 — Avinaya

**Objective:** Know today's real numbers (so we can prove growth later) and build the iOS keyword list everything ASO depends on.
**Total time:** ~3h

## Task 1 · 🔥 Create the Growth Tracker sheet and record every baseline number (45–60 min)

**Why:** In 15 days we need to say "installs went from X to Y". Without today's X, nothing we do can be measured.
**Where:** Google Sheets + App Store Connect (appstoreconnect.apple.com) + each social app.
**Tools:** Google Sheets, App Store Connect login, phone.

**Steps:**
1. Create a Google Sheet named **Buzzend Growth Tracker**, share edit access with Gaurab and Riya.
2. Add 6 tabs: `Daily Numbers`, `Store-iOS`, `Store-Android`, `Social`, `Outreach`, `Experiments`.
3. In App Store Connect → Analytics → Metrics, set the range to the last 7 days and copy into `Store-iOS`: Impressions, Product Page Views, Conversion Rate, Total Downloads.
4. In `Social`, make one row per account (Instagram, TikTok, YouTube, Facebook) with columns: Followers today, Posts so far, Best post reach.
5. Open each social profile and fill the row — exact numbers, not guesses.
6. In `Daily Numbers`, make columns: Date, iOS installs, Android installs, New followers (total), Challenge joins, Notes. Fill today's row.
7. Read `buzzend-marketing/13-analytics/metrics-for-beginners.md` (15 min) so the words above mean something.

**Deliverable:** Growth Tracker sheet, all baseline cells filled, link posted in the team chat.
**Done when:** Gaurab and Riya can open the sheet and see today's numbers for both stores and all socials.
**Depends on:** —

## Task 2 · 🔥 Research 20 iOS keywords real people search (60–90 min)

**Why:** The App Store shows Buzzend only for terms in our metadata. We currently guess; today we find what people actually type.
**Where:** App Store on your iPhone (search suggestions are the research tool).
**Tools:** iPhone, `Store-iOS` tab of the Growth Tracker.

**Steps:**
1. Write down 8 seed terms from `buzzend-marketing/00-strategy/what-is-buzzend.md` — e.g. *AI workout, rep counter, squat counter, workout with friends, fitness challenge app, home workout, push up counter, workout streak*.
2. In the App Store search bar, type each seed slowly and record every suggestion that appears (suggestions = real search demand). Aim for 30–40 raw terms.
3. Add any keywords visible in competitor titles/subtitles (Riya's Day-1 teardown lists them — check her doc mid-afternoon).
4. In `Store-iOS`, make a table: Keyword · Relevance (H/M/L) · Guessed volume (H/M/L, based on how early it autocompleted) · Competition (how many big apps rank for it).
5. Shortlist the best 20: relevant + decent volume + not owned by giants ("workout" is hopeless; "AI rep counter" is winnable).
6. Mark your top 3 title/subtitle candidates in bold — Day 2 uses them.

**Deliverable:** 20-keyword table with the top 3 bolded, in `Store-iOS`.
**Done when:** Every keyword has all three ratings and the top 3 are chosen.
**Depends on:** Riya · Day 1 · Task 1 (for competitor keywords — start without it, merge later).

## Task 3 · 🟡 Fill in sprint/config.js with our real links (15 min)

**Why:** Every task and the dashboard reference the store links and handles from one file — placeholders in, broken bio links out.
**Where:** This repo, `sprint/config.js`.
**Tools:** Code editor, git.

**Steps:**
1. Open `sprint/config.js` and replace every `PASTE-…` placeholder: App Store URL, Play Store URL, Instagram/TikTok/YouTube/Facebook handles, sprint start date (today).
2. Commit and push — the site redeploys itself.
3. Open the live dashboard and confirm the footer shows the real links.

**Deliverable:** Updated `sprint/config.js` on `main`.
**Done when:** Live dashboard footer links open our real store pages.
**Depends on:** —
