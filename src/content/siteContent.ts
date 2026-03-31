// ============================================================
// SITE CONTENT CONFIGURATION
// ============================================================
// Este archivo centraliza imágenes de layout del sitio.
//
// IMPORTANTE:
// - NO contiene la galería de artworks (eso vive en /data/artworks)
// - Solo controla imágenes estructurales del diseño (hero, secciones)
// - Todas las rutas apuntan a /public (accesibles como /artworks/...)
// - Evitar reutilizar la misma imagen en múltiples secciones
//   salvo decisión explícita de diseño
// ============================================================

export const siteContent = {
  // =========================
  // HERO SECTION (PORTADA)
  // =========================
  // Imagen principal del landing.
  // Impacto visual alto. Idealmente una pieza fuerte o representativa.
  hero: {
    image: '/artworks/001.jpg',
  },

  // =========================
  // ALTERNATING SECTION
  // =========================
  // Layout visual secundario con composición en dos bloques.
  // leftImage  → bloque superior izquierdo
  // rightImage → bloque inferior derecho
  alternatingSection: {
    leftImage: '/artworks/002.jpg',
    rightImage: '/artworks/003.jpg',
  },

  // =========================
  // FEATURED SECTION
  // =========================
  // Imagen destacada independiente del hero.
  // Usada para spotlight editorial o highlight artístico.
  featured: {
    image: '/artworks/003.jpg',
  },
} as const