import { defineConfig } from 'astro/config';

// ponytail: site assumes the repo becomes a GitHub Pages site at this URL.
// Repo is currently luciantrusca.cv (a project site) -> set base: '/luciantrusca.cv'
// or rename the repo to luciantrusca.github.io before deploying.
export default defineConfig({
  site: 'https://luciantrusca.github.io',
});
