# Sprint task-file format (read before writing or editing any day file)

Every file in `days/day-NN/` follows this exact structure — the build
script (`tools/build-sprint.mjs`) parses it to power the dashboard.

```md
# Day 7 — Riya

**Objective:** One sentence — what this person's day achieves.
**Total time:** ~2.5h

## Task 1 · 🔥 Imperative title here (45–60 min)

**Why:** One or two sentences — the reason this matters now.
**Where:** The app/site/tool where the work happens.
**Tools:** Comma list (phone, Canva, Google Sheet, …).

**Steps:**
1. Numbered, concrete, no ambiguity.
2. Each step is something you physically do.
3. 4–8 steps typical.

**Deliverable:** The artifact that exists when done (file, post URL, sheet row…).
**Done when:** An observable check — how you know it's finished.
**Depends on:** — (or e.g. "Avinaya · Day 7 · Task 2")

## Task 2 · 🟡 Next title (30 min)
…
```

Parser rules (violating these breaks the dashboard build):

- H1 must be `# Day N — Name` (name: Avinaya, Gaurab, or Riya).
- `**Objective:**` and `**Total time:**` lines must exist before the first task.
- Every task heading must match: `## Task N · <🔥|🟡|🟢> <title> (<time>)`.
  🔥 = must happen today · 🟡 = important · 🟢 = optional (say why in **Why:**).
- Body sections are plain markdown; `**Depends on:**` is `—` when none.
- 2–4 tasks per person per day; total time 2–4 hours, realistic.

Content rules:

- Ground every task in this repo: reference real docs by path
  (`buzzend-marketing/05-hooks/hook-system.md`), real assets
  (`social-media/rendered/day3-feed.png`, `video/teaser-1080x1920.mp4`),
  and real app features only (AI rep counter for squats/push-ups/sit-ups/
  jumping jacks/lunges, camera-verified challenges, Beat-It, streaks,
  leaderboards, discover). Never invent features.
- Approved wording lives in `buzzend-marketing/00-strategy/what-is-buzzend.md`.
  Banned words: "perfect form", "guaranteed", "world's first".
- Store/social links are placeholders in `sprint/config.js` — tasks say
  "the App Store link from config.js", never a made-up URL.
- Outreach is value-first and personal — no copy-paste spam, no fake reviews,
  never ask strangers for ratings; only genuine users.
- Assume zero marketing knowledge, but no textbook theory — steps only.
