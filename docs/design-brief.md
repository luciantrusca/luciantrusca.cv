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
2. **Wireframe** — grayscale, low-detail full-page layout with exact proportions, column grid, section heights, text/image/figure/caption placement and the band alternation. (done, see "Current build" below)
3. **Design system** — exact serif + sans pairing, paper white, deep navy, one accent color, spacing scale, grid, line weights, caption style, numbering style, button treatment. Lives in `tokens.css`. (first pass done)
4. **Prototype** — responsive Astro build with sticky nav, section anchors, hover states, project features, career diagram, GitHub Pages deploy. Placeholders allowed.
5. **Content** — shape the story from the CV, not a verbatim dump. Decide which roles, degrees, theses, projects, tools and achievements get prominence, and rewrite to fit the editorial format.

Do not polish individual project descriptions before the layout exists; the wireframe sets how much room each element has.

## Current build (steps 2–3, plus first content pass)

**Revision 2 (owner feedback): the mockup's layout now wins over this brief's structural changes.** The owner found the phylogeny, asymmetric Work grid and 2/3 + 1/3 Toolkit "all over the place" and asked to follow the mockup. So: horizontal timeline, four equal project cards, title + four toolkit columns.

**Revision 8 (branch `cv-evidence`): evidence over editorial.**
- **At a glance:** five factual rows, including "4 theses" and EHA's tools.
- **Hero tags:** specific (ML & XAI, Computer Vision, Bioinformatics, Multiomics).
- **Journey:** merged education and work; each stop has a kind chip, an achievement and a "Gained" line. An Experience Highlights strip (Molecular Biotech → Embedded ML) sits above the timeline.
- **Work:** cards show Problem → What I did → Result, using CV-backed results only. Meadow Birds is a wide featured card with a key-facts grid; Traffic Signs is the second featured card.
- **Skills:** four CV-derived groups in a 2×2 grid, plus a concrete "Current focus" list.
- **Quotes replaced:** the header now shows the current focus, and the footer shows the current thesis.
- **Results that still need a real number:** Meadow Birds (accuracy/mAP), Sales Forecasting (error metric), Security Dashboard (users/feedback), Movile Cave (samples/taxa).

**Revision 7 (branch `cv-impact-2`): owner's cut list.** Leaf illustration (`public/img/leaf.png`, 548 px wide, replace with hi-res if available) replaces the etched art. "View My CV" and "View all projects" both became "View more projects" linking to GitHub repositories (no CV link on the page by choice). Contact Me and Let's Talk show the email address. Skill pills carry 1–3 level dots with a legend. Tagline "Data scientist × Life sciences"; footer line "MSc Data Science · University of Amsterdam". Journey subtitle shortened and the band sizes to content. Work: project count line, card description lines removed, Movile Cave bullets made specific, and a native `<details>` "See more projects" reveals four extra cards (Cottages, Training system, Chessmate, Cassini). Nav underline follows the section in view (the page's only script). Deferred: per-project links, deploy.

**Revision 6 (branch `cv-impact`): layout and positioning from `docs/mockup-v4.png`.** The headline is "Data Science for Real-World Impact." and the tagline "Data scientist × Engineer × Problem solver". Profile has skill pills, three navy buttons (View My CV, GitHub, Contact Me), the etched art over beige offset squares, and an "At a glance" panel (location, MSc, EHA, languages). Journey is "Education & Career Journey." with role / institution / one line per step and an open end ring. Work is on cream: five white cards with an italic role line, three outcome bullets and tags, plus "View all projects" linking to GitHub repositories. Skills (navy) has two spotlight pill groups and a Current direction card with Let's Talk. Buttons are navy (`--btn` / `--btn-ink` tokens). Bands keep revision 5's heights via `minH`; Work grew to about 104vh because of the bullets.

**Revision 5 (branch `cv-color-blocks`): colour blocking from `docs/mockup-v3.png`.** The bands use `ChapterBand`'s `tone` prop: Profile cream, Journey sky, Work navy (cream cards; lighter red and blue via local token overrides), Toolkit sand. The rail rule now sits under `/ NAME`. The hero full stop is red, a steel-blue block sits behind the profile art, and the lit card lifts. Heights are unchanged from revision 4. Revision 4 is kept on `cv-color-splash`.

**Revision 4 (owner feedback): follow `docs/mockup-v2.png` for colour and chapter chrome, keep revision 3's section heights.** All bands are paper now, split by hairlines. Each band has a left rail: an oversized numeral, a short red or blue rule, `/ NAME` and a keyword list (the rail folds into a header row below 1100 px). Red `#b3342b` and blue `#2359c4` replace brass. A CSS-only spotlight (`.spot` / `.best` in `tokens.css`) lights the best item in a group, and hovering or focusing another item moves the light there. It is used on the buttons (View My Work), the timeline (Present), the cards (FEATURED Meadow Bird in blue, NEW Sales Forecasting in red) and the toolkit tiles (Computation). Toolkit is now "Skills for What's Next.": three icon tiles plus a "Heading toward" column.

Visual language from `docs/mockup-v1.png`: paper `#f7f7f3`, navy `#0e2638`, Source Serif 4 (bold headlines, italic quotes) + Inter for letterspaced labels + Caveat for the one handwritten note, `01 / 04` labels with a rule, quote columns behind thin vertical rules, navy + outline buttons with arrow icons, brass `#c29a5b` as the single accent. All copy comes from `Resume_DS.tex` and lives in `src/data/site.ts`.

Measured at 1440×900 (content-driven, tightened in revision 3): Profile 64vh, Journey 76vh, Work 95vh, Toolkit 39vh, Footer 14vh.

- **Header:** name + `Biology × Computation × Data`, numbered serif nav + Contact, two-line motto right, hairline under.
- **Profile:** 44/56 split with a vertical rule. Left: headline, lead, buttons, `×` kicker. Right: italic quote + triad over the etched art (cropped from the mockup, text inpainted out, edges faded; replace with hi-res art), small-caps note top-right, handwritten note bottom-right.
- **Journey:** title | paragraph | quote, split by rules. Timeline: track with dots, dotted run-out to an arrow circle, five ruled columns (dates, phase, degree/role, one line) + italic end column. Vertical below 1100 px.
- **Work:** title | intro. Five equal bordered cards (number, area, schematic SVG figure, title, text, tags + arrow; the arrow opens role/outcome via `<details>`, no JS). "Also built" strip of four below.
- **Toolkit:** title block + four icon columns (Biology, Computation, Engineering, Direction) split by rules.
- **Footer:** name | quote | GitHub, LinkedIn, mail icons | "Open to collaborations".
- **Responsive:** five cards stay on one row down to 900 px (cards grow taller); toolkit wraps below 1200 px; single column below 900 px, nav hidden.

## Open decisions

- ~~Typeface pairing~~ Source Serif 4 + Inter for now.
- ~~Colors~~ sampled from the mockup; accent brass `#c29a5b`.
- EHA Data Analyst role has no dates in the CV; it is mentioned in the 2025 – Present column.
- No per-project links yet (no repo URLs in the CV). "View all projects" removed for now; five featured projects instead of four.
- Project figures are schematic SVGs; replace with real plots/screenshots.
- Headline uses the mockup's "Curiosity Bridges Worlds."; final wording open.
- `public/cv.pdf` contains a phone number.
