import ArtworkCarousel from "./ArtworkCarousel";

import artwork1 from "@/assets/images/artwork-1.jpg";
import artwork2 from "@/assets/images/artwork-2.jpg";
import artwork3 from "@/assets/images/artwork-3.jpg";

type Artwork = {
  id: string;
  title: string;
  price: string | null;
  description: string | null;
  image_url: string;
  is_featured: boolean;
  display_order: number;
  created_at: string;
  category: string;
  dimensions: string | null;
};

const artworks: Artwork[] = [
  {
    id: "1",
    title: "Puerto Mediterráneo",
    price: null,
    description: null,
    image_url: artwork2,
    is_featured: false,
    display_order: 0,
    created_at: "",
    category: "marinas",
    dimensions: null,
  },
  {
    id: "2",
    title: "Jardín de Rosas",
    price: "€2,400",
    description: null,
    image_url: artwork1,
    is_featured: false,
    display_order: 1,
    created_at: "",
    category: "bodegones",
    dimensions: null,
  },
  {
    id: "3",
    title: "Catedral al Atardecer",
    price: null,
    description: null,
    image_url: artwork3,
    is_featured: false,
    display_order: 2,
    created_at: "",
    category: "marinas",
    dimensions: null,
  },
  {
    id: "4",
    title: "Muchacha en el Trigal",
    price: "€3,800",
    description: null,
    image_url: artwork1,
    is_featured: false,
    display_order: 3,
    created_at: "",
    category: "taperas",
    dimensions: null,
  },
  {
    id: "5",
    title: "Flores Silvestres",
    price: null,
    description: null,
    image_url: artwork2,
    is_featured: false,
    display_order: 4,
    created_at: "",
    category: "bodegones",
    dimensions: null,
  },
  {
    id: "6",
    title: "Bosque de Otoño",
    price: null,
    description: null,
    image_url: artwork3,
    is_featured: false,
    display_order: 5,
    created_at: "",
    category: "taperas",
    dimensions: null,
  },
  {
    id: "7",
    title: "Canales de Venecia",
    price: "€4,200",
    description: null,
    image_url: artwork2,
    is_featured: false,
    display_order: 6,
    created_at: "",
    category: "marinas",
    dimensions: null,
  },
];

const CATEGORIES = [
  { key: "todas", label: "Todas las Obras" },
  { key: "marinas", label: "Marinas" },
  { key: "taperas", label: "Taperas" },
  { key: "bodegones", label: "Bodegones" },
];

const GallerySection = () => {
  return (
    <section className="bg-background py-16 md:py-24">

      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-16 h-px bg-gold" />
          <h2 className="font-serif text-sm tracking-[0.4em] uppercase text-[hsl(36,23%,47%)]">
            Obras
          </h2>
          <div className="w-16 h-px bg-gold" />
        </div>
      </div>

      {/* CAROUSELS */}
      <div className="space-y-20 md:space-y-28">
        {CATEGORIES.map((cat) => {
          const filtered =
            cat.key === "todas"
              ? artworks
              : artworks.filter((a) => a.category === cat.key);

          return (
            <ArtworkCarousel
              key={cat.key}
              artworks={filtered}
              title={cat.label}
            />
          );
        })}
      </div>

    </section>
  );
};

export default GallerySection;