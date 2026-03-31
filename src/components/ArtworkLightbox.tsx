import { useEffect } from 'react'
import type { Artwork } from '../types/artwork'

interface ArtworkLightboxProps {
  artwork: Artwork | null
  onClose: () => void
}

// ============================================================
// LIGHTBOX COMPONENT
// ============================================================
// Responsabilidad:
// - Mostrar imagen en overlay fullscreen
// - Cerrar con click externo o tecla ESC
// - Render condicional (null si no hay artwork)
// ============================================================

function ArtworkLightbox({ artwork, onClose }: ArtworkLightboxProps) {
  
  // Cierre por teclado (Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  // No renderizar si no hay obra activa
  if (!artwork) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        cursor: 'zoom-out',
      }}
    >
      {/* Contenedor de imagen (evita cierre accidental) */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
        }}
      >
        <img
          src={artwork.image}
          alt={artwork.title}
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            objectFit: 'contain',
            display: 'block',
          }}
        />

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar visor de imagen"
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