import { artworks } from '../data/artworks'
import type { Artwork } from '../types/artwork'
import ArtworkCarousel from './ArtworkCarousel'

function GallerySection() {
  const categories = [
    { key: 'todas', label: 'Todas las Obras' },
    { key: 'marinas', label: 'Marinas' },
    { key: 'taperas', label: 'Taperas' },
    { key: 'bodegones', label: 'Bodegones' },
  ]

  const getFilteredArtworks = (key: string): Artwork[] => {
    if (key === 'todas') return artworks

    return artworks.filter((artwork) => artwork.category === key)
  }

  return (
    <section>
      <h2>Obras</h2>

      {categories.map(({ key, label }) => {
  const filtered = getFilteredArtworks(key)

  return (
    <ArtworkCarousel
      key={key}
      artworks={filtered}
      title={label}
    />
  )
})}
    </section>
  )
}

export default GallerySection