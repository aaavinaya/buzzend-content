# The content production pipeline

Every piece of content moves through these 14 stages. The owner is fixed
per stage. A piece's current stage lives in its content-idea file
(template in `16-templates/`).

```
RESEARCH → IDEA → HOOK → SCRIPT → PRODUCTION → EDITING → REVIEW
→ CAPTION → SCHEDULING → PUBLISHING → ENGAGEMENT → ANALYTICS
→ LEARNING → REPURPOSE
```

| # | Stage | Owner | What actually happens | Output | Time |
|---|---|---|---|---|---|
| 1 | Research | P1 | Daily research block: competitors, trends, comments. Promising directions → idea backlog with a note on WHY. | 3–5 backlog entries/week | 1 h/day |
| 2 | Idea | P2 | Pick tomorrow's calendar slot; pull the matching idea from the backlog (or write one) using the idea template: pillar, audience moment, platform. | 1 filled idea template | 10 min |
| 3 | Hook | P2 | Pick a hook category (`05-hooks/hook-system.md`), write 3 options via the formula, say them out loud, keep the most human one. | 1 chosen hook + 2 spares logged | 15 min |
| 4 | Script | P2 | Fill the script template: hook (0–2s) → proof (2–6s) → explanation (6–15s) → benefit (15–25s) → CTA. Write it as spoken words, not prose. | 1 script (≤80 spoken words) | 20 min |
| 5 | Production | P2 | Film per the script. Phone propped, counter legible, good light, real reps. §40 pre-flight FIRST (test the exercise on that phone/position — if the counter's wrong, don't film it). | Raw takes, labeled | 30–60 min |
| 6 | Editing | P2 | Cut to 15–30s. Burn in captions (most watch muted). On-screen hook on frame 1. End card = CTA. Export clean 9:16 1080×1920, no watermark. | 1 master file + cover frame | 30–45 min |
| 7 | Review | **P1** | Run the 6-point sanity check + banned-words scan. Reply "approved" or list fixes. Max 30-min turnaround, async. | Approval or fix list | 10 min |
| 8 | Caption | P2 (P3 tweaks) | Write from the caption template: first line = hook restated, 1–3 lines value, one CTA, "link in bio". P3 adapts per platform + adds keywords/hashtags. | Platform-ready captions | 15 min |
| 9 | Scheduling | P3 | Slot at the fixed posting time (set from our own analytics). Native upload each platform — never cross-post watermarked files. | Scheduled posts | 10 min |
| 10 | Publishing | P3 | Post goes live. Verify: plays, caption right, link in bio works (tap it!). | Live URLs logged in calendar row | 10 min |
| 11 | Engagement | P3 | First 60 min matter: reply to every early comment, pin the best one, answer questions with warmth. Paste notable phrases → hooks-inbox. | All comments answered | 30–45 min |
| 12 | Analytics | P1 | Next morning: log the 24h row (views, watch %, likes, comments, shares, saves, profile visits, link taps, store visits, installs). | Metrics sheet row | 10 min |
| 13 | Learning | P1 | Compare to our median. Winner rule: did it move store visits/installs, not just likes? Verdict on the calendar row: WON / LOST / RETEST. | Verdict + one-line why | 10 min |
| 14 | Repurpose | P2 | Winners get variations (new exercise/setting/wording — change ONE thing). Every video's best 3s → a Story within 48h. Losers get archived with a one-line lesson. | Next assets queued | 15 min |

## Batching (how 3 beginners keep up)

- **Film Tuesdays:** one setup, 2–3 scripts shot back-to-back. A week of
  proof footage in one session.
- **One master, many children:** each shoot must yield the main video +
  at least one Story cut + one alternate-hook version (see the
  repurposing map).
- **Friday stocking:** next week's calendar filled (P1), 5 new hooks
  (P2), weekend post pre-made (P2→P3).

## Where files live

- Raw footage + exports: shared drive folder `buzzend-footage/`
  (`<exercise>-take<N>.mp4` / `<asset-id>-master.mp4`) — big video files
  stay OUT of this git repo.
- Finished statics/graphics: made from `../../social-media/templates/`
  via the render pipeline (`../../README.md` explains it).
- The written system (ideas, scripts, calendars, reports): this
  `buzzend-marketing/` folder.
