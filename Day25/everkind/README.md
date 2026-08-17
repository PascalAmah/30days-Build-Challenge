# Everkind — Editorial E-commerce (Astro)

A recreation of the Everkind fashion storefront: an editorial, image-led
homepage built with [Astro](https://astro.build).

## Highlights

- **Astro static output** — zero client-side JS framework, tiny bundle.
- **Automatic image optimisation** — every photo is served as responsive
  `srcset` WebP via `astro:assets` (source PNG/JPGs of 1–3 MB are built down
  to roughly 10–350 KB per variant).
- **Bento-style product grid** that collapses gracefully from a 4-column
  desktop layout to a 2-column tablet layout to a single column on mobile,
  matching the reference design at every breakpoint.
- **Small, purposeful interactivity**: sticky header, mobile menu drawer,
  inline search reveal, hover-zoom product imagery, and a wishlist
  bookmark toggle — all in a few lines of vanilla JS with no dependencies.
- **Accessible by default**: semantic landmarks, visible focus states,
  `prefers-reduced-motion` respected.

## Project structure

```
src/
  assets/products/      source photography (optimised at build time)
  components/           Header, Footer, ProductTile, FeatureTile,
                         StoryCard, IntroText
  data/products.ts      product catalogue + Naira formatter
  layouts/Layout.astro  document shell + design tokens (CSS variables)
  pages/index.astro     homepage assembly (bento grid)
```

## Commands

| Command           | Action                                     |
| ------------------ | ------------------------------------------- |
| `npm install`       | Install dependencies                       |
| `npm run dev`       | Start local dev server at `localhost:4321` |
| `npm run build`     | Build the production site to `./dist/`     |
| `npm run preview`   | Preview the production build locally       |

## Notes

- Colours, type, and spacing live as CSS custom properties in
  `src/layouts/Layout.astro` — change the palette or fonts in one place.
- Fonts use the system serif/sans stack (no external font requests), which
  keeps the site fast and avoids a render-blocking network call.
- Prices are stored as plain integers and formatted with an
  `Intl`-backed `toLocaleString` call for the Naira (₦) symbol.
