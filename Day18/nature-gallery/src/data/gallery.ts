export type GalleryRatio = "1:1" | "2:3" | "4:5" | "3:2" | "4:3" | "16:9";

export interface GalleryItem {
  title: string;
  year: string;
  image: string; // path under /public — replace the file in-place with your own photo
  ratio: GalleryRatio; // semantic aspect ratio drives the editorial rhythm
}

// Main gallery — four curated editorial columns (18 / 18 / 34 / 18)
// Column 1 — portrait 2:3, square 1:1
// Column 2 — portrait 4:5, landscape 3:2
// Column 3 (hero, 34%) — hero 16:9, square 1:1, square 1:1
// Column 4 — portrait 2:3, tall portrait 4:5
export const gallery: GalleryItem[] = [
  // Column 1
  {
    title: "All green",
    year: "2024",
    image: "/images/all-green.png",
    ratio: "2:3",
  },
  { title: "Nature", year: "2020", image: "/images/nature.png", ratio: "1:1" },

  // Column 2
  {
    title: "In the garden with him",
    year: "2023",
    image: "/images/in-the-garden.png",
    ratio: "1:1",
  },
  {
    title: "Play time",
    year: "2004",
    image: "/images/play-time.png",
    ratio: "2:3",
  },
  // Column 3 (hero)
  {
    title: "A life in paradise",
    year: "2025",
    image: "/images/a-life-in-paradise.png",
    ratio: "4:3",
  },
  {
    title: "Silence",
    year: "2017",
    image: "/images/silence.png",
    ratio: "1:1",
  },
  {
    title: "Battles we don't see",
    year: "2023",
    image: "/images/battles-we-dont-see.png",
    ratio: "1:1",
  },
  // Column 4
  {
    title: "Less noise",
    year: "2026",
    image: "/images/less-noise.png",
    ratio: "1:1",
  },
  {
    title: "Alive again",
    year: "2019",
    image: "/images/alive-again.png",
    ratio: "2:3",
  },
];

// Closing strip — the wry coda (square tiles)
export const coda: GalleryItem[] = [
  {
    title: "Tech bros are weird?",
    year: "",
    image: "/images/tech-bros-are-weird.png",
    ratio: "2:3",
  },
  {
    title: "Yes they are!",
    year: "",
    image: "/images/yes-they-are.png",
    ratio: "2:3",
  },
  {
    title: "Just look at him, alone!",
    year: "",
    image: "/images/just-look-at-him-alone.png",
    ratio: "2:3",
  },
  {
    title: "Oh wait, tech sis are also weird!",
    year: "",
    image: "/images/oh-wait.png",
    ratio: "2:3",
  },
];
