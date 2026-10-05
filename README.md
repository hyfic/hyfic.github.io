# Hyfic

Fadhil Saheer’s project collection and freelance landing page. Astro builds it as plain HTML, CSS and small browser scripts. Hosting needs no application server, database or framework runtime.

## Develop

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

Astro writes the complete static site to `dist/`. The source stays on `main`. On pushes to `main`, `.github/workflows/deploy.yml` checks and builds the site, then commits only `dist/` to the existing `website` branch. For GitHub Pages, select **Deploy from a branch → website → / (root)** in repository settings. `public/CNAME` preserves `hyfic.org`, and `public/.nojekyll` lets Pages serve the generated `_astro` assets.

## Pages

- `/` — project collection and contact links, `src/pages/index.astro`
- `/manavalan-finance/` — Astro page at `src/pages/manavalan-finance/index.astro`, with its sections in `src/components/manavalan/`; its existing CSS, JavaScript, and assets remain in `public/manavalan-finance/`
- `/log-horizon/` — local desktop diary, `src/pages/log-horizon/index.astro`
- `/openvia/` — macOS link routing, `src/pages/openvia/index.astro`

All routes are generated as files and work on direct navigation. Shared Astro components live in `src/components/`. CSS stays in `src/app.css`, `src/lib/home.css` and `src/styles/`; the project pages keep their existing palettes and layouts.

## Releases

- [Manavalan Finance v2.0.0 APK](https://github.com/fadhilsaheer/manavalan-finance/releases/download/v2.0.0/manvalan-finance.apk)
- [OpenVia v1.0.0 DMG](https://github.com/hyfic/openvia/releases/download/v1.0.0/OpenVia.dmg)
- Log Horizon: release link still pending.

The site links directly to GitHub releases. It stores no APK or DMG files. Add future release links to the corresponding page under `src/pages/`, or to the standalone finance HTML page.

Contact links: https://cal.com/fadhilsaheer, mailto:fadhil@hyfic.org and https://fadhilsaheer.me.

## Assets

The coastal scene is an eight-second, silent 2560 × 1440 video loop with a still poster. `PixelWorld.astro` pauses on request, offscreen, in hidden tabs and for reduced motion. Regenerate the video with `python3 scripts/render-scene.py` (NumPy, OpenCV and FFmpeg are needed only to render the asset).

Log Horizon’s screenshot uses sample diary data. Manavalan’s screenshot uses illustrative records. OpenVia’s rules window is a labeled HTML illustration based on its SwiftUI source; its example interaction does not launch a browser. App icons come from the companion repositories.

Free fonts are bundled locally or through Fontsource: Pixeloid Sans Regular, Onest, Figtree, Kanit, Literata and Instrument Sans. Font licenses accompany the sources in `public/fonts/` and `public/manavalan-finance/assets/`. Pixeloid is by GGBotNet: https://www.fontspace.com/pixeloid-font-f69232.
