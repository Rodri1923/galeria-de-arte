// ============================================================
// SITE CONTENT CONFIGURATION
// ============================================================
// Centraliza TODAS las imágenes de layout del sitio.
//
// ESTRUCTURA:
// /public/
//   /artworks  → galería (data dinámica)
//   /site      → layout (hero, secciones, destacados)
//
// REGLA CLAVE:
// - NO mezclar artworks con layout
// - NO usar imports de imágenes
// - SOLO rutas absolutas desde /public
//
// CÓMO CAMBIAR IMÁGENES:
// - Reemplazar archivo en /public/site
// - O cambiar la ruta aquí
// ============================================================

export const siteContent = {
  // =========================
  // HERO SECTION
  // =========================
  // Imagen principal del landing.
  // Debe ser visualmente fuerte (impacto inicial).
  hero: {
    image: '/site/hero.jpg',
  },

  // =========================
  // ALTERNATING SECTION
  // =========================
  // Composición diagonal de 2 imágenes.
  // leftImage  → bloque superior izquierdo
  // rightImage → bloque inferior derecho
  alternatingSection: {
    leftImage: '/site/alt-left.jpg',
    rightImage: '/site/alt-right.jpg',
  },

  // =========================
  // FEATURED SECTION
  // =========================
  // Imagen destacada editorial.
  // No debería repetirse con hero salvo intención.
  featured: {
    image: '/site/featured.jpg',
  },
} as const

export type SiteContent = typeof siteContent