import aura from "@/assets/aura.jpg";
import auraDetalle from "@/assets/aura-detalle.jpg";
import blusa from "@/assets/blusa.jpg";
import falda from "@/assets/falda.jpg";
import bolso from "@/assets/bolso.jpg";
import aretes from "@/assets/aretes.jpg";
import coleccion from "@/assets/coleccion.jpg";
import estiloCombinacion from "@/assets/estilo-combinacion.jpg";

export type Category = "Vestidos" | "Blusas" | "Faldas" | "Accesorios";

export interface ColorOption {
  name: string;
  swatch: string; // CSS var reference
}

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  description: string;
  longDescription: string;
  tag?: string;
  images: string[];
  colors: ColorOption[];
  sizes: string[];
  keywords: string[];
}

const BEIGE = { name: "Beige", swatch: "oklch(0.86 0.035 70)" };
const ROSA = { name: "Rosa pálido", swatch: "oklch(0.9 0.035 10)" };
const BLANCO = { name: "Blanco roto", swatch: "oklch(0.977 0.008 80)" };
const CREMA = { name: "Crema", swatch: "oklch(0.95 0.025 85)" };
const PERLA = { name: "Perlado", swatch: "oklch(0.95 0.012 80)" };

export const products: Product[] = [
  {
    slug: "vestido-aura",
    name: "Vestido Aura",
    category: "Vestidos",
    price: 189900,
    oldPrice: 229900,
    description: "Vestido midi fluido, ideal para un look femenino y sencillo.",
    longDescription:
      "El Vestido Aura es una pieza ligera de silueta fluida, pensada para pasar del día a la noche con facilidad. Su diseño sencillo lo convierte en un básico femenino ideal para combinar con accesorios delicados.",
    tag: "Destacado",
    images: [aura, auraDetalle],
    colors: [BEIGE, ROSA, BLANCO],
    sizes: ["S", "M", "L"],
    keywords: ["vestido", "midi", "beige", "rosa", "blanco"],
  },
  {
    slug: "blusa-luna",
    name: "Blusa Luna",
    category: "Blusas",
    price: 89900,
    description: "Blusa de manga amplia en tono crema, perfecta para el día a día.",
    longDescription:
      "Una blusa ligera de manga amplia y cuello redondo, con un fruncido suave que acompaña el movimiento. Combina con faldas midi o pantalones de lino.",
    images: [blusa, coleccion],
    colors: [CREMA],
    sizes: ["S", "M", "L"],
    keywords: ["blusa", "crema", "manga"],
  },
  {
    slug: "falda-serenidad",
    name: "Falda Serenidad",
    category: "Faldas",
    price: 119900,
    description: "Falda midi de corte limpio en beige suave.",
    longDescription:
      "Falda midi de cintura alta y caída limpia. Una base serena para tus combinaciones de diario, con camisetas, blusas o punto fino.",
    images: [falda, estiloCombinacion],
    colors: [BEIGE],
    sizes: ["S", "M", "L"],
    keywords: ["falda", "midi", "beige"],
  },
  {
    slug: "bolso-eter",
    name: "Bolso Éter",
    category: "Accesorios",
    price: 149900,
    description: "Bolso pequeño de diseño minimalista con correa ajustable.",
    longDescription:
      "Un bolso pequeño de líneas limpias con asa superior y correa ajustable. Lo justo para llevar lo esencial con un aire delicado.",
    images: [bolso, estiloCombinacion],
    colors: [CREMA],
    sizes: ["Única"],
    keywords: ["bolso", "accesorios", "crema"],
  },
  {
    slug: "aretes-nube",
    name: "Aretes Nube",
    category: "Accesorios",
    price: 49900,
    description: "Aretes delicados en tono perlado, ideales para un toque suave.",
    longDescription:
      "Aretes colgantes con perla en forma de gota. Un detalle luminoso que suaviza cualquier look, del día a la noche.",
    images: [aretes],
    colors: [PERLA],
    sizes: ["Única"],
    keywords: ["aretes", "accesorios", "perla", "rosa"],
  },
];

export const categories: Category[] = ["Vestidos", "Blusas", "Faldas", "Accesorios"];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatCOP(value: number) {
  return `$${value.toLocaleString("es-CO", { maximumFractionDigits: 0 })} COP`;
}

export type SortKey = "recomendados" | "precio-asc" | "precio-desc" | "nombre";

export function filterAndSort(list: Product[], category: Category | "Todos", sort: SortKey) {
  const filtered = category === "Todos" ? [...list] : list.filter((p) => p.category === category);
  switch (sort) {
    case "precio-asc":
      return filtered.sort((a, b) => a.price - b.price);
    case "precio-desc":
      return filtered.sort((a, b) => b.price - a.price);
    case "nombre":
      return filtered.sort((a, b) => a.name.localeCompare(b.name, "es"));
    default:
      return filtered;
  }
}

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function searchProducts(query: string) {
  const q = normalize(query.trim());
  if (!q) return [];
  return products.filter((p) =>
    normalize([p.name, p.category, ...p.keywords, ...p.colors.map((c) => c.name)].join(" ")).includes(q),
  );
}
