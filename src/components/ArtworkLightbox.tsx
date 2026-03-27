import { useEffect } from 'react'
import type { Artwork } from '../types/artwork'

interface ArtworkLightboxProps {
  artwork: Artwork | null
  onClose: () => void
}

function ArtworkLightbox({ artwork, onClose }: ArtworkLightboxProps) {
  // cerrar con ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

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
      }}
    >
      {/* contenido (NO cierra) */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
        }}
      >
        <img
          src={artwork.image}
          alt={artwork.title || 'Artwork'}
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            objectFit: 'contain',
          }}
        />

        {/* botón cerrar */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-40px',
            right: '0',
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default ArtworkLightbox