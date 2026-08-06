export interface Slide {
  eyebrow: string;
  blurb: string;
  date: string;
  titleLines: [string, string];
  image: string;
  imageAlt: string;
  bg: string;
  bgSoft: string;
  fg: string;
  fgMuted: string;
  accent: string;
  imageWidth: string;
}

export const slides: Slide[] = [
  {
    eyebrow: "The social club",
    blurb:
      "Designed to clearly showcase Stirling Interiors\u2019 commercial interior design, fit-out and refurbishment services, with a focus on usability, clarity, and driving high-quality enquiries.",
    date: "23\u201304\u201326",
    titleLines: ["Annoyed", "Princess"],
    image: "/images/slide-1-doll.png",
    imageAlt:
      "A wide-eyed doll figure with glittering purple ear-shaped hair, holding a small bouquet of daisies",
    bg: "#241242",
    bgSoft: "#31195a",
    fg: "#e6def6",
    fgMuted: "#b6a9d8",
    accent: "#8a6fd6",
    imageWidth: "min(34vw, 480px)",
  },
  {
    eyebrow: "The social club",
    blurb:
      "Designed to clearly showcase Stirling Interiors\u2019 commercial interior design, fit-out and refurbishment services, with a focus on usability, clarity, and driving high-quality enquiries.",
    date: "23\u201304\u201326",
    titleLines: ["Gentle", "Princess"],
    image: "/images/slide-2-dress.png",
    imageAlt:
      "An illustrated figure with a pearl-like head and a tiered emerald ballgown holding a needle and thread, shaped like a clock",
    bg: "#0b5f43",
    bgSoft: "#0f7752",
    fg: "#d9f6ea",
    fgMuted: "#9dcdb9",
    accent: "#12a06e",
    imageWidth: "min(56vw, 740px)",
  },
  {
    eyebrow: "The social club",
    blurb:
      "Designed to clearly showcase Stirling Interiors\u2019 commercial interior design, fit-out and refurbishment services, with a focus on usability, clarity, and driving high-quality enquiries.",
    date: "23\u201304\u201326",
    titleLines: ["Annoyed", "Princess"],
    image: "/images/slide-3-dog.png",
    imageAlt:
      "A skeptical, droopy-eared cartoon dog wearing a studded collar, looking unimpressed",
    bg: "#136390",
    bgSoft: "#1a7fb4",
    fg: "#dcf0fb",
    fgMuted: "#9fc7dd",
    accent: "#2ea0d6",
    imageWidth: "min(34vw, 480px)",
  },
];
