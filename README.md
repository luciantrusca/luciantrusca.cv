# Github_CV

Portfolio site for Lucian Trusca, built with Astro (static, almost no JS). The site copy comes from `Resume_DS.tex` and lives in `src/data/site.ts` on each design branch.

`main` holds only a placeholder `index.html` plus the CV sources (`Resume_DS.tex`, `Resume_DS.pdf`). The original mockup images are in `Design mockups/` (not tracked by git). The site itself lives on the design branches below.

## Design variants

Each variant is its own git branch. All four are pushed to `Curriculum_vite` (github.com/luciantrusca/luciantrusca.cv).

| Branch | Look | Mockup it follows | Local worktree |
|---|---|---|---|
| `worktree-wireframe` | Alternating paper / navy bands, brass accent, `01 / 04` chapter labels | `docs/mockup-v1.png` | `.claude/worktrees/wireframe` |
| `cv-color-splash` | All-paper bands with red/blue splashes, big-numeral rails, hover spotlight, FEATURED/NEW tags, icon-tile toolkit | `docs/mockup-v2.png` | `.claude/worktrees/color-splash` |
| `cv-color-blocks` | Same as color-splash but colour-blocked: cream Profile, sky Journey, navy Work, sand Toolkit | `docs/mockup-v3.png` | `.claude/worktrees/color-blocks` |
| `cv-impact` (latest) | "Data Science for Real-World Impact." headline, At a glance panel, navy buttons, cards with outcome bullets, navy Skills band with pill groups and a Current direction card | `docs/mockup-v4.png` | `.claude/worktrees/impact` |

Every branch has a full-page screenshot at `docs/screenshot-desktop.png`, and a design brief with a revision log at `docs/design-brief.md`.

## Viewing a variant

### Quick look (no install)
Open `docs/screenshot-desktop.png` on the branch, either in the worktree folder or on GitHub (switch branch, then open `docs/`).

### Run it locally
The worktrees are already checked out side by side, so there is nothing to switch:

```sh
cd ".claude/worktrees/impact"   # or color-blocks / color-splash / wireframe
npm run dev                           # http://localhost:4321
```

`color-splash`, `color-blocks` and `impact` symlink `node_modules` from `wireframe`, so no install is needed.

### Fresh checkout (worktrees gone, or another machine)

```sh
git fetch Curriculum_vite
git worktree add ../cv-blocks cv-color-blocks   # any branch from the table
cd ../cv-blocks && npm install && npm run dev
```

Build a static copy with `npm run build`; the output goes to `dist/`, and `npm run preview` serves it.

### Compare two variants side by side
Run two dev servers on different ports:

```sh
(cd .claude/worktrees/color-blocks && npx astro dev --port 4321) &
(cd .claude/worktrees/impact && npx astro dev --port 4322)
```

## Where things live (on the design branches)

| Path | What |
|---|---|
| `src/data/site.ts` | All copy: profile, journey steps, projects (incl. `badge: 'featured' \| 'new'`), toolkit / skills |
| `src/styles/tokens.css` | Colours, type, buttons, and the `.spot` / `.best` hover-spotlight rule |
| `src/components/ChapterBand.astro` | Section band with the big-numeral rail (`tone` prop on `cv-color-blocks`) |
| `src/pages/index.astro` | Page markup and section styles |
| `src/components/ProjectFigure.astro` | Schematic SVG project figures (placeholders for real plots) |
| `public/cv.pdf` | The downloadable CV (contains a phone number) |

## Picking a winner

Merge the chosen branch into `main` (for example with a PR from `cv-impact`). Then set `site` (and `base` if the repo stays `luciantrusca.cv`) in `astro.config.mjs`, and deploy with the official Astro GitHub Pages workflow. The note in `astro.config.mjs` explains the `base` setting.
