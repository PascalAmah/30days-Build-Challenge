# Driven by Creativity — retro TV hero (Astro)

A hero section built to match the reference layout: a script eyebrow, a bold
condensed headline, a retro CRT television, and body copy underneath. The
television's screen is no longer a flat white rectangle — it's a hole cut out
of the bezel photo with `clip-path`, and a `<video>` sits behind it so a
showreel plays right where the glass would be.

## Drop in your assets

I didn't have your original photo file available on disk in this session
(only the visual preview), so it isn't bundled. Add these three files to
`public/`:

- `tv-frame.png` — your television cutout (transparent background is fine,
  the screen itself can stay whatever color it currently is; it gets clipped
  away in CSS).
- `showreel.mp4` — the video you want playing in the screen. Keep it short,
  muted-friendly, and roughly the aspect ratio of the screen opening for the
  cleanest crop (`object-fit: cover` handles minor mismatches).
- `showreel-poster.jpg` — a still frame shown before the video loads / if
  `prefers-reduced-motion` is on.

## Fine-tune the screen shape

`src/components/RetroTVHero.astro` defines the screen's outline once, as an
SVG `<path>` in `objectBoundingBox` units (0–1, relative to the `.tv` box),
reused for both:

1. `#screenHole` — punches the screen out of the frame image (evenodd).
2. `#screenOnly` — clips the video to that exact same shape, so it can never
   peek out past the glass.

The coordinates shipped here are a close approximation traced from the
reference photo. Open the page, toggle your browser's dev tools, and nudge
the `d` values until the corners line up with your actual bezel — the two
paths share the same points, so you only ever edit them in one place.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` outputs a static site to
`dist/`.

## Notes

- The video autoplays muted/looped/inline (required for autoplay in every
  major browser) and is paused automatically for people with
  `prefers-reduced-motion: reduce`, falling back to the poster frame.
- Scanline + vignette layers sit above the video for a bit of CRT texture —
  delete `.tv__scanlines` / `.tv__glow` in the component if you want a clean
  flat video instead.
