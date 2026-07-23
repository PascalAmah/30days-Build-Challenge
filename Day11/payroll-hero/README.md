# Payroll Hero Section (Astro)

Pixel-close recreation of the "Your smartest hire yet, without the payroll" hero section.

## Features
- Responsive layout matching the desktop and mobile designs
- Scroll-based parallax on the gorilla image
- Auto-scrolling ("ticker") logo strip at the bottom of the image, pauses on hover
- Dismissible announcement bar
- Google Fonts: Anton (display) + Inter (body)

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Structure
- `src/pages/index.astro` — the entire hero page (markup, styles, scripts)
- `public/images/gorilla.png` — hero image asset
