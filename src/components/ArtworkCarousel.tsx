import useEmblaCarousel from 'embla-carousel-react'
import type { Artwork } from '../types/artwork'

interface ArtworkCarouselProps {
  artworks: Artwork[]
  title: string
}

function ArtworkCarousel({ artworks, title }: ArtworkCarouselProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
  })

  if (artworks.length === 0) return null

  return (
    <section style={{ marginBottom: '3rem' }}>
      <h3>{title}</h3>

      <div style={{ overflow: 'hidden' }} ref={emblaRef}>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              style={{
                minWidth: '300px',
                flexShrink: 0,
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
    </section>
  )
}

export default ArtworkCarousel