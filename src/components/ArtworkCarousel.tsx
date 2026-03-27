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
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  // navegación habilitada/deshabilitada
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  // progreso de scroll
  const onScroll = useCallback(() => {
    if (!emblaApi) return
    const progress = emblaApi.scrollProgress()
    setScrollProgress(Math.max(0, Math.min(1, progress)))
  }, [emblaApi])

  // eventos Embla
  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', onSelect)
    emblaApi.on('scroll', onScroll)

    requestAnimationFrame(() => {
      onSelect()
      onScroll()
    })

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('scroll', onScroll)
    }
  }, [emblaApi, onSelect, onScroll])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  if (artworks.length === 0) return null

  return (
    <section style={{ marginBottom: '3rem' }}>
      <h3>{title}</h3>

      <div style={{ position: 'relative' }}>
        <div style={{ overflow: 'hidden' }} ref={emblaRef}>
          <div style={{ display: 'flex', gap: '16px' }}>
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                onClick={() => setSelectedArtwork(artwork)}
                style={{
                  minWidth: '300px',
                  flexShrink: 0,
                  cursor: 'pointer',
                }}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title || 'Artwork'}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />

                {artwork.title && <p>{artwork.title}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
          <button onClick={scrollPrev} disabled={!canScrollPrev}>
            <ChevronLeft />
          </button>

          <button onClick={scrollNext} disabled={!canScrollNext}>
            <ChevronRight />
          </button>
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: '12px' }}>
          <div
            style={{
              height: '2px',
              background: '#ddd',
              width: '100%',
            }}
          >
            <div
              style={{
                height: '2px',
                background: '#000',
                width: `${scrollProgress * 100}%`,
                transition: 'width 0.1s linear',
              }}
            />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <ArtworkLightbox
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  )
}

export default ArtworkCarousel