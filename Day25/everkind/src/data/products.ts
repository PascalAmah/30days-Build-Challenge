export interface Product {
  slug: string;
  name: string;
  price: number;
  colours: number;
  badge: string;
}

export const products: Record<string, Product> = {
  midnight: {
    slug: "midnight-sculptural-gown",
    name: "Midnight Sculptural Gown",
    price: 480500,
    colours: 3,
    badge: "NEW IN",
  },
  crimson: {
    slug: "crimson-drop-cape-earring",
    name: "Crimson Drop Cape Earring",
    price: 100500,
    colours: 1,
    badge: "ACCESSORIES",
  },
  camel: {
    slug: "camel-textured-power-suit",
    name: "Camel Textured Power Suit",
    price: 580000,
    colours: 3,
    badge: "CLOTHING",
  },
  jeans: {
    slug: "up-and-down-casual-jeans",
    name: "Up and Down Casual Jeans",
    price: 180000,
    colours: 4,
    badge: "ACCESSORIES",
  },
  ivory: {
    slug: "ivory-textured-cape-suit",
    name: "Ivory Textured Cape Suit",
    price: 200000,
    colours: 2,
    badge: "CLOTHING",
  },
};

export function formatNaira(amount: number): string {
  return "\u20A6" + amount.toLocaleString("en-NG", { minimumFractionDigits: 2 });
}
