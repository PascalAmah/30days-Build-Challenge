# Apex Footer (Astro)

A pixel-matched rebuild of the "Thank you for your curiosity" footer, including:

- Responsive layout (desktop 3-column links, mobile stacked/2-col grid)
- 13 hand-placed "blob" tag chips positioned to match the reference (colors, sizes, rotation baked into each PNG's own art)
- Load-in animation: blobs float in one-by-one with a staggered delay, triggered when the footer scrolls into view (IntersectionObserver)
- Hover interaction: each blob jiggles and its crossed-out label becomes normal text
- Mobile: the blob strip is horizontally scrollable, matching the reference mobile screenshot

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components/Footer.astro` — the footer component (all markup, styles, and the load-in/hover script)
- `src/pages/index.astro` — demo page that renders the footer
- `public/images/blob_*.png` — the 13 blob tag artworks (shape + baked-in rotation), used as CSS masks so the label text can be swapped between crossed-out and normal without needing separate image assets
