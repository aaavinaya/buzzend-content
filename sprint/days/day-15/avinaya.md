# Day 15 — Avinaya

**Objective:** Close the sprint properly: run the retro that turns 15 days of numbers into next sprint's three goals, and leave the sprint system ready to continue.
**Total time:** ~2.5h

## Task 1 · 🔥 Run the 45-minute team retro and write it up (90–110 min)

**Why:** Without a retro, the sprint ends as a pile of numbers and tired people. Forty-five structured minutes turn it into decisions — what we keep doing, what we stop, and three concrete goals someone owns. This document plus Gaurab's SOP is what makes the sprint repeatable.
**Where:** Team call/meeting + new file `buzzend-marketing/14-weekly-reports/sprint-retro.md`.
**Tools:** Timer, `buzzend-marketing/14-weekly-reports/sprint-readout.md`, the Experiments tab, `buzzend-marketing/16-templates/planning-templates.md` (template #12's CONTINUE/STOP/TEST structure).

**Steps:**
1. Before the call: close out both Day-12 experiments in the `Experiments` tab — the 72h windows are done. Fill in control vs variant numbers and a verdict each: WINNER / LOSER / UNCLEAR-retest, plus one line of "what we now believe".
2. Run the retro to a visible timer, exactly 45 minutes:
   - **Numbers recap (10 min):** you present the readout's three proofs + both experiment verdicts. No debate yet.
   - **Keep / kill / scale per channel (20 min):** walk each channel and tactic — Instagram, TikTok, YouTube, Facebook, the challenge, creator outreach, personal invites, review replies. Team calls each one: KEEP as-is, KILL, or SCALE. Disagreements get 5 minutes, then a decision or a test — house rule from `buzzend-marketing/15-team-workflow/team-system.md`.
   - **Next-sprint goals (15 min):** set exactly 3 goals. Each must be a number with a date and ONE owner ("X installs by [date] — Gaurab"), grounded in what we actually hit this sprint — our numbers, not fantasy numbers.
3. Write `buzzend-marketing/14-weekly-reports/sprint-retro.md` the same day: the keep/kill/scale table, both experiment verdicts, the 3 goals with owners, and one honest paragraph on what this team learned about itself.
4. Link it in team chat; reports are append-only history — never edit it later, correct in the next report.

**Deliverable:** Experiments closed with verdicts + `buzzend-marketing/14-weekly-reports/sprint-retro.md` with 3 owned, measurable goals.
**Done when:** Each goal has a number, a date, and exactly one owner who said "yes, mine" out loud.
**Depends on:** Avinaya · Day 14 · Task 1 (the retro runs on the corrected readout).

## Task 2 · 🟡 Set the sprint system up for what comes next (30–40 min)

**Why:** If the retro decided to continue, the dashboard should be ready before momentum cools. If it decided to pause, the system should be left clean enough that restarting in a month takes ten minutes.
**Where:** This repo — `sprint/config.js`, `sprint/days/`, `sprint/README.md`.
**Tools:** Code editor, git.

**Steps:**
1. If the team continues: follow `sprint/README.md`, "Adding Day 16+" section — create `sprint/days/day-16/` with `avinaya.md`, `gaurab.md`, `riya.md` following `sprint/AUTHORING.md` exactly (copy an existing day as the template). Seed Day 16 from the retro: each person's first task = their next-sprint goal's first step.
2. Verify `sprint/config.js` still holds correct links and handles; update anything that changed during the sprint (bio link, handles).
3. If the team pauses: leave a short dated note in the tracker's `Daily Numbers` ("sprint 1 ended [date] — see sprint-retro.md") so the numbers story has a clean seam.
4. Commit and push — the site rebuilds itself; confirm the dashboard still renders.

**Deliverable:** Either a seeded Day 16 or a clean pause note; config verified; dashboard live.
**Done when:** The dashboard reflects the team's actual next step.
**Depends on:** Avinaya · Day 15 · Task 1 (the retro decides which branch).
