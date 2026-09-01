# Reorganization Changelog — 2026-08-23

Full record of the content-library audit, reorganization, and the
creation of this execution-plan folder. Every file in the repo was
inspected before being moved, archived, or deleted.

## Files created

`buzzend-execution-plan/` (new folder, 9 documents):

- `README.md` — how to use this folder
- `BUZZEND_30_DAY_EXECUTION_MASTER.md` — full day-by-day execution system
- `DAILY_EXECUTION_CHECKLIST.md` — Day 1–30 checkbox version
- `CONTENT_PRODUCTION_PLAN.md` — 30-day content map + asset register
- `SOCIAL_MEDIA_EXECUTION.md` — per-platform plans + publishing schedule
- `KPI_TRACKING.md` — full KPI system (definitions, sources, targets, actions)
- `WEEKLY_REVIEW_SYSTEM.md` — 4 week-end review frameworks
- `CONTENT_ASSET_INDEX.md` — master index of the reorganized repo
- `REORGANIZATION_CHANGELOG.md` — this file

Also created: `archive/README.md` (explains every archived item).

## Files moved (references updated)

| From | To | Reference fixes |
|---|---|---|
| `templates/` (14 day-post HTML) | `social-media/templates/` | all `../brand/`→`../../brand/`, `../assets/`→`../../assets/` rewritten in the 14 files; verified by re-rendering day1-feed successfully |
| `rendered/` (14 PNGs) | `social-media/rendered/` | calendar's relative refs still resolve |
| `copy/week1-content-calendar.md` | `social-media/week1-content-calendar.md` | `copy/` folder removed (empty) |
| `DESIGN-GUIDE.md` | `brand/design-guide.md` | internal path examples updated to the new template location; kebab-case rename |
| `tools/debug-reveal.mjs`, `shot-home.mjs`, `test-legacy.mjs`, `test-site.mjs` | `archive/website-debug-scripts/` | not referenced anywhere |
| `video/teaser-raw.webm` | `archive/` | not referenced |

## Files renamed

- `DESIGN-GUIDE.md` → `brand/design-guide.md` (naming standard:
  lowercase-kebab-case; also moved into brand/ where it belongs).
- No other renames were needed — the library already used kebab-case.
- The two strategy documents keep their original UPPERCASE names and
  root location on purpose: they are the source of truth and are
  referenced by name from multiple documents.

## Files merged

- None. The audit found **no true content duplicates** among documents —
  README, design guide, calendar, and strategy docs each hold distinct
  information. (README was rewritten in place to describe the new
  structure and absorb the pipeline how-to that was previously split
  between prose and comments.)

## Files archived (uncertain-but-possibly-useful → `archive/`)

| File | Reason |
|---|---|
| `teaser-raw.webm` (1.7 MB) | Intermediate raw recording; the deliverable `video/teaser-1080x1920.mp4` exists; regenerable via `tools/record.mjs` |
| `website-debug-scripts/` — `debug-reveal.mjs`, `shot-home.mjs`, `test-legacy.mjs`, `test-site.mjs` | One-off Playwright debug/test scripts targeting the Buzzend **website** dev server (`localhost:4280`); they belong to the website project, not the content pipeline; kept in case website work resumes |

## Files deleted (verified safe)

| File | Why safe |
|---|---|
| `video/record.mjs` | Byte-identical duplicate of `tools/record.mjs` (verified with `diff`); the tools/ copy lives next to its Playwright environment |
| `store-assets/android.zip` (12 MB) | Zip packaging of `store-assets/android/` made for a Play Console upload; contents verified identical to the live folder; regenerable with one `zip` command |
| `assets/icons/` | Empty directory (0 bytes, no files) |

## Important decisions

1. **Folder placement:** the git repo *is* the project root and is itself
   named `buzzend-content`, so `buzzend-execution-plan/` was created at
   the repo root as a sibling of the content folders — matching the
   spirit of the requested layout (execution plan fully separated from
   content) while keeping everything under version control. No
   execution-plan file lives inside a content folder.
2. **Structure based on actual content:** of the suggested categories,
   only those with real content were created (`social-media/`,
   `archive/`; `brand/`, `assets/`, `store-assets/`, `video/`, `tools/`
   already existed and are correct). Empty placeholder folders
   (captions/, scripts/, prompts/, campaigns/, website/, testimonials/)
   were **not** created — captions live inside the week-1 calendar,
   scripts/prompts don't exist yet as separate assets.
3. **`assets/screens/` (43 raw device shots) kept as REFERENCE**, not
   archived: the design guide and app-mock generators actively reference
   specific IMG numbers as layout sources. Its never-publish status is
   documented in README, the design guide, and the asset index.
4. **`assets/screens-clean/real-*.png` names kept:** they are referenced
   by the store-shot jobs JSONs; renaming would touch the render
   pipeline for zero information gain. The index documents that "real-"
   means "recreated from the real app with demo identities", not raw.
5. **Week-1 static campaign retained as a support library.** It was
   built before the final strategy; the strategy's cadence is
   video-first. The statics now serve the Stories/support slots
   (ST-1…ST-5) rather than being the primary campaign.

## Conflicts found between sources (flagged, not silently rewritten)

1. **Platform set:** the week-1 content calendar targets IG + Facebook +
   TikTok; the strategy's Priority-1 channels (§20) are IG Reels +
   TikTok + **YouTube Shorts** (no Facebook). **Resolution: strategy
   wins.** YT Shorts added as a first-class channel; Facebook demoted to
   an optional zero-effort mirror. Recorded in SOCIAL_MEDIA_EXECUTION.md.
2. **Week-1 posting cadence:** the calendar assumes statics posted Days
   1–7; the 30-day plan's Week 1 is foundation work with the first post
   on Day 7. **Resolution: 30-day plan wins** (it is the §26 expansion);
   statics repurposed as Story/support assets on the schedule.
3. **iOS screenshot size:** the 30-day plan (Day 16) says render at
   1320×2868; App Store Connect currently only offers this listing the
   6.5" slot (1284×2778 / 1242×2688). **Resolution: keep both sets;**
   upload whichever slot ASC offers. Master Day 16 documents both.
4. **Store screenshot captions:** the currently-rendered store sets use
   the social-campaign captions ("Fitness is better with friends." …),
   while §25 specifies a conversion sequence ("Your phone counts. You
   just move." …). Not a bug — the §25 rework **is** Day 16–17's job.
   Flagged in CONTENT_ASSET_INDEX.md so it isn't missed.

## Assumptions

- Day 1 of the plan is a Monday (aligns the §49 weekly rhythm and the
  calendar's Mon–Sun structure).
- KPI numbers marked ⚠ in the master/KPI docs are calibration thresholds,
  not strategy quotas — the strategy intentionally sets no Month-1
  numeric targets (learning month). They must be re-set against the real
  Day-7 baseline.
- The demo identities in `screens-clean/` (Ema William, Adesh Pokhrel,
  Kiran Shah…) are confirmed safe by `brand/design-guide.md` ("These
  screens contain ONLY safe demo names").

## Unresolved issues (need a human decision / action)

1. **Placeholders unfilled:** `[APP-STORE-LINK]`, `[PLAY-STORE-LINK]`,
   `[@HANDLE]` in `social-media/week1-content-calendar.md` — fill on
   Day 4 when tracked links are created.
2. **Play feature graphic:** verify `feature-graphic-1024x500.png` is
   Energy Orange (the live Play listing was seen carrying old teal-brand
   screenshots); re-render from `feature-graphic.html` if needed (Day 17).
3. **YouTube channel:** the week-1 kit never targeted YouTube — confirm a
   channel exists/has the unified handle before Day 4 completes.
4. **Analytics tool unknown:** the plan assumes app analytics with the
   §31 events; Day 20 verifies. If no analytics SDK is integrated at
   all, Day 20 becomes a build task and Week 4's data days shift by a
   few days.
5. **Uncommitted repo:** everything (reorg + this folder) is uncommitted
   in git. Recommend one commit for the reorg so history marks the
   before/after cleanly.
