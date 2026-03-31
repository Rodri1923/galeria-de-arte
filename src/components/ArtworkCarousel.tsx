import useEmblaCarousel from 'embla-carousel-react'
import type { Artwork } from '../types/artwork'
import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ArtworkLightbox from './ArtworkLightbox'

interface ArtworkCarouselProps {
  artworks: Artwork[]
  title: string
}

function ArtworkCarousel({ artworks, title }: ArtworkCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('resize', onSelect)

    requestAnimationFrame(() => {
      onSelect()
    })

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
      emblaApi.off('resize', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  if (artworks.length === 0) return null

  return (
    <section className="mb-16 md:mb-20">

      {/* HEADER */}
      <div className="mb-10 md:mb-12 pl-16 md:pl-32">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-px bg-gold" />
          <h2 className="font-serif text-xs tracking-[0.35em] uppercase text-gold">
            {title}
          </h2>
          <div className="w-12 h-px bg-gold" />
        </div>
      </div>

      {/* WRAPPER */}
      <div className="relative pl-16 md:pl-20 pr-6">

        {/* LEFT BUTTON */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full
                     border border-black/10 bg-white/80 backdrop-blur-md
                     flex items-center justify-center text-black
                     hover:bg-white transition
                     ${!canScrollPrev ? "opacity-30 cursor-not-allowed" : ""}`}
        >
          <ChevronLeft size={18} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full
                     border border-black/10 bg-white/80 backdrop-blur-md
                     flex items-center justify-center text-black
                     hover:bg-white transition
                     ${!canScrollNext ? "opacity-30 cursor-not-allowed" : ""}`}
        >
          <ChevronRight size={18} />
        </button>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">

            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                onClick={() => setSelectedArtwork(artwork)}
                className="flex-[0_0_32%] max-w-[32%] cursor-pointer"
              >

                <div className="relative overflow-hidden group">

                  <img
                    src={artwork.image}
                    alt={artwork.title || 'Artwork'}
                    loading="lazy"        // ✅ LAZY LOADING
                    decoding="async"     // ✅ mejora performance de render
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {(artwork.title || artwork.dimensions) && (
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">

                      {artwork.title && (
                        <div className="font-serif uppercase tracking-[0.12em] text-sm text-white mb-1">
                          {artwork.title}
                        </div>
                      )}

                      {artwork.dimensions && (
                        <div className="text-xs tracking-[0.15em] text-white/80">
                          {artwork.dimensions}
                        </div>
                      )}

                    </div>
                  )}

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* STATIC LINE */}
        <div className="mt-6 flex justify-center">
          <div className="w-11/12 md:w-3/4 lg:w-2/3 h-[2px] bg-gold/40" />
        </div>

      </div>

      {/* LIGHTBOX */}
      <ArtworkLightbox
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />

    </section>
  )
}

export default ArtworkCarousel