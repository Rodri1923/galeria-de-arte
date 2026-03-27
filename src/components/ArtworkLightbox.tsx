import type { Artwork } from '../types/artwork'

interface ArtworkLightboxProps {
  artwork: Artwork | null
  onClose: () => void
}

function ArtworkLightbox({ artwork, onClose }: ArtworkLightboxProps) {
  if (!artwork) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        cursor: 'pointer',
      }}
    >
      <img
        src={artwork.image}
        alt={artwork.title || 'Artwork'}
        style={{
          maxWidth: '90%',
          maxHeight: '90%',
          objectFit: 'contain',
        }}
      />
    </div>
  )
}

export default ArtworkLightbox