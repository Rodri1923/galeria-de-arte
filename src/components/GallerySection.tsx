import ArtworkCarousel from "./ArtworkCarousel";
import { artworks } from "../data/artworks";

// ============================================================
// GALLERY SECTION
// ============================================================
// Responsabilidad:
// - Renderizar carruseles por categoría
// - Consumir data centralizada (artworks.ts)
// - No contiene assets ni data duplicada
// ============================================================

const CATEGORIES = [
  { key: "todas", label: "Todas las Obras" },
  { key: "marinas", label: "Marinas" },
  { key: "taperas", label: "Taperas" },
  { key: "bodegones", label: "Bodegones" },
];

const GallerySection = () => {
  return (
    <section 
      id="gallery-section"
      className="bg-background py-16 md:py-24">

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