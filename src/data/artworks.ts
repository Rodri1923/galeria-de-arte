import type { Artwork } from '../types/artwork'

// ============================================================
// ARTWORKS DATA SOURCE
// ============================================================
// Este archivo controla TODAS las obras de la galería.
//
// - Todas las imágenes viven en /public/artworks
// - Convención de naming: 001.jpg, 002.jpg, 003.jpg...
// - Este sistema evita imports y facilita reemplazo masivo.
//
// Para cambiar una imagen:
// -> solo modificar el string "image"
//
// Para agregar una obra:
// -> copiar objeto y cambiar:
//    id, image, title, category, display_order
//
// IMPORTANTE:
// - display_order controla orden visual en UI
// - category se usa para filtros (marinas, bodegones, etc.)
// - is_featured controla si aparece en destacados
// ============================================================

export const artworks: Artwork[] = [
  {
    id: '1',
    image: '/artworks/001.jpg',
    title: 'Camino del Rosedal',

    // Precio opcional (puede usarse en futuras features de venta)
    price: null,

    // Descripción opcional (detalle curatorial o técnico)
    description: null,

    // Control de highlight en UI
    is_featured: false,

    // Orden manual en grilla o carrusel
    display_order: 1,

    // Metadata futura (API / CMS compatible)
    created_at: '',

    // Categoría usada para filtros en galería
    category: '',

    // Dimensiones físicas de la obra (opcional)
    dimensions: '57cm x 73cm',
  },

  {
    id: '2',
    image: '/artworks/002.jpg',
    title: 'Puerto Italia',
    price: null,
    description: null,
    is_featured: false,
    display_order: 2,
    created_at: '',
    category: 'marinas',
    dimensions: null,
  },

  {
    id: '3',
    image: '/artworks/003.jpg',
    title: 'Madre Tierra',
    price: null,
    description: null,
    is_featured: false,
    display_order: 3,
    created_at: '',
    category: 'taperas',
    dimensions: null,
  },

  {
    id: '4',
    image: '/artworks/004.jpg',
    title: 'Castillo Escondido',
    price: null,
    description: null,
    is_featured: false,
    display_order: 4,
    created_at: '',
    category: 'taperas',
    dimensions: null,
  },

  {
    id: '5',
    image: '/artworks/005.jpg',
    title: 'Atardecer campestre',
    price: null,
    description: null,
    is_featured: false,
    display_order: 5,
    created_at: '',
    category: 'bodegones',
    dimensions: '160cm x 50cm',
  },
]