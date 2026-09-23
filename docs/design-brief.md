# Portfolio site — design brief

Handoff document from the planning conversation in the Claude app. This file is the source of truth for layout and structure decisions. The mockup (`docs/mockup-v1.png`) is a mood and style reference, not a spec; where the two disagree, this file wins.

## Concept

A single-page scientific editorial portfolio built from four large alternating light/dark chapter bands. Each chapter fills roughly 70–90% of a desktop viewport, so it reads like a magazine spread without becoming a full-screen slide. Large serif typography, generous whitespace, scientific figures with captions and annotations, and only a few dominant elements per chapter. Work is the longest and most visual chapter; the others stay concise. As the user scrolls, the next contrasting band starts to show at the bottom of the viewport, which creates momentum.

Style name used in planning: **Scientific Editorial Modernism**.

Target balance: about 70% editorial composition, 30% conventional portfolio UI. The site should not read as a CV dashboard or a giant CV poster.

## Purpose

The site is curation, not the full CV. The downloadable CV holds the exhaustive chronology. The site answers four questions quickly:

| Question | Chapter |
| --- | --- |
| Who is this person? | 01 Profile |
| Why does this unusual background make sense? | 02 Journey |
| Can they actually build and research interesting things? | 03 Work |
| What can they do, and where are they heading? | 04 Toolkit & Direction |

## Page structure

```
HEADER            ~60–70 px, sticky nav with section anchors
01 PROFILE        paper white   ~70–80vh
02 JOURNEY        deep navy     ~80–90vh
03 WORK           paper white   ~120–150vh  (longest)
04 TOOLKIT        deep navy     ~70–85vh
FOOTER            paper white   ~25–35vh
```

Heights are starting points; content drives the final height. Profile, Journey and Toolkit should each feel like one editorial spread. Work should feel like a short feature section containing several spreads.

### Band transitions

- Hard color changes between warm paper white and deep navy. No gradients.
- Each band opens with a small chapter label in the form `02 / JOURNEY` (numbered like a journal chapter), followed by a thin rule.

## Chapters

Rule for every chapter: 2–3 major elements, not 4–5 small blocks.

### 01 — Profile (white)

- One large headline.
- A 2–3 sentence positioning statement.
- One strong convergence visual (biology, computation and engineering meeting).
- Two buttons: View work, Download CV (GitHub link may also sit here).
- No mini-dashboard.

### 02 — Journey (navy)

- One large chapter title.
- One dominant career phylogeny/timeline that does most of the storytelling. Branches run roughly biotech → bioinformatics → computer science → data science → ML/robotics, with degrees and roles attached to branches.
- A few concise annotations around the figure. No paragraph per step.

Known nodes (roles and dates still to be added in the content phase):

- BSc Industrial Biotechnology, Babeș-Bolyai University
- MSc Molecular Biotechnology, Babeș-Bolyai University
- BSc Computer Science, University of Twente
- MSc Data Science (Information Studies), University of Amsterdam, started Sept 2025, ongoing

The mockup's evenly spaced horizontal timeline with five equal columns is a placeholder. The target is a branching figure.

### 03 — Work (white)

- The main portfolio section. 4 featured projects to start (up to 6 later).
- Each project is treated like a figure or mini research feature: image/figure, short description, role, methods, outcome, links.
- **Asymmetric editorial layout, not equal cards.** Starting arrangement:

```
03 / SELECTED WORK

[ LARGE PROJECT 01 ]      [ PROJECT 02 ]

[ PROJECT 03 ]            [ LARGE PROJECT 04 ]
```

- The mockup's row of four equal bordered cards is exactly what to move away from.

### 04 — Toolkit & Direction (navy)

- Left ~2/3: a structured capability map grouped into Biology / Data & ML / Software / Systems & Robotics. A taxonomy, not skill bars and not dozens of scattered skill names.
- Right ~1/3: a strong "where I'm heading" composition.
- The mockup's four equal columns (with Direction as a fourth column) should become this 2/3 + 1/3 split.

### Footer (white)

Email · GitHub · LinkedIn · CV. Optional short tagline and "open to collaborations" note.

## Visual rules

- Larger headlines, bigger project imagery, more negative space.
- Fewer boxes and visible borders; use thin editorial rules instead.
- Fewer words per screen.
- Figure captions are first-class elements, set larger than typical UI captions.
- Occasional oversized section numbers.
- Serif for headlines and body; small letterspaced uppercase sans for labels, kickers and captions (as in the mockup).

## Tech stack

- **Astro**, no theme. Build components from the design tokens.
- Static output, zero JS by default. Interactive pieces (e.g. a hoverable phylogeny) added later as islands on single components only.
- Deploy to GitHub Pages via the official Astro GitHub Actions workflow. For a `<username>.github.io` user site, `base` stays `/`; set `site` in `astro.config.mjs`.
- Jekyll themes were considered and rejected: the layout is bespoke and a theme would mostly need overriding.

### Proposed structure

```
src/
  content/
    projects/        # one .md/.mdx per project, typed frontmatter
    journey/         # degrees + roles as nodes on the phylogeny
  data/
    capabilities.yml # Biology / Data & ML / Software / Systems & Robotics
  components/
    ChapterBand.astro
    ProjectFeature.astro
    Phylogeny.astro
    CapabilityMap.astro
  styles/
    tokens.css       # colors, type scale, spacing, rules
  pages/index.astro
public/
  cv.pdf
docs/
  design-brief.md    # this file
  mockup-v1.png
```

Project frontmatter should include at least: `title`, `order`, `featured`, `size` (`large` | `regular`), `figure`, `caption`, `role`, `methods`, `outcome`, `links`. Define it as a content collection schema so missing fields fail the build.

## Work plan

1. **Content architecture** — four chapters fixed (done, recorded here).
2. **Wireframe** — grayscale, low-detail full-page layout with exact proportions, column grid, section heights, text/image/figure/caption placement and the band alternation. (done, see "Wireframe decisions" below)
3. **Design system** — exact serif + sans pairing, paper white, deep navy, one accent color, spacing scale, grid, line weights, caption style, numbering style, button treatment. Lives in `tokens.css`. ← **next step**
4. **Prototype** — responsive Astro build with sticky nav, section anchors, hover states, project features, career diagram, GitHub Pages deploy. Placeholders allowed.
5. **Content** — shape the story from the CV, not a verbatim dump. Decide which roles, degrees, theses, projects, tools and achievements get prominence, and rewrite to fit the editorial format.

Do not polish individual project descriptions before the layout exists; the wireframe sets how much room each element has.

## Wireframe decisions

The wireframe is the Astro page itself (`npm run dev`), in grayscale. Tick "grid" in the header to overlay the 12-column grid. Step 3 restyles it by changing `src/styles/tokens.css`; the layout stays.

- **Grid:** 12 columns, max content width 1280 px, 24 px gutter, side margin `clamp(20px, 5vw, 64px)`.
- **Profile:** text in cols 1–6 (headline, statement, buttons); convergence figure in cols 8–12 with its caption.
- **Journey:** title cols 1–5 with one annotation in cols 8–12; phylogeny figure spans all 12 columns at 10:3; two short annotations under it.
- **Work:** row 1 = large project cols 1–7, regular project cols 9–12 pushed down ~12% to break the baseline; row 2 mirrors it (regular cols 1–5, large cols 7–12). Large figures 3:2, regular 4:3. Measured at 1440×900 with placeholder copy: Work ≈ 220vh, over the 120–150vh target. Hitting 150vh would need figures around 300 px tall, which works against "bigger project imagery"; the wireframe keeps the imagery and accepts the longer chapter. Decide in step 3.
- **Toolkit:** capability map cols 1–8 as a 2×2 taxonomy; Direction cols 10–12 behind a vertical rule.
- **Mobile (< 860 px):** everything stacks to one column in source order; the Work stagger and the vertical rule are dropped. The phylogeny SVG gets unreadably small on phones: it needs a vertical variant in the prototype step. This is the default answer to the open question below until someone argues otherwise.

## Open decisions

- Typeface pairing (serif + sans).
- Exact paper white, navy and accent values.
- Which 4 projects are featured and which two get the large slots.
- Final headline and positioning statement for Profile.
- Whether the phylogeny is static SVG first or interactive from the start.
- ~~Mobile behavior of the asymmetric Work grid and the 2/3 + 1/3 Toolkit split.~~ Defaulted to single-column stacking in the wireframe; revisit if needed.
