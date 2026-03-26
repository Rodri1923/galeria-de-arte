import type { Artwork } from '../types/artwork'

import img1 from '../assets/images/artwork-1.jpg'
import img2 from '../assets/images/artwork-2.jpg'
import img3 from '../assets/images/artwork-3.jpg'

export const artworks: Artwork[] = [
  {
    id: '1',
    image: img1,
    title: 'Obra 1',
    category: 'marinas',
  },
  {
    id: '2',
    image: img2,
    title: 'Obra 2',
    category: 'bodegones',
  },
  {
    id: '3',
    image: img3,
    title: 'Obra 3',
    category: 'taperas',
  },
]