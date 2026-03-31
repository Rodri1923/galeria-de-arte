export type Artwork = {
  id: string
  title: string
  price: string | null
  description: string | null
  image: string
  is_featured: boolean
  display_order: number
  created_at: string
  category: string
  dimensions: string | null
}