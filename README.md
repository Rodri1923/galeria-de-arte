# 🎨 Galería de Arte — María Elida Ultra

Sitio web artístico desarrollado en React + Vite para exhibición de obras pictóricas.

---

## 🚀 Demo

👉 https://rodri1923.github.io/galeria-de-arte/

---

## 🧱 Stack técnico

* React
* TypeScript
* Vite
* Tailwind CSS
* Embla Carousel

---

## 📁 Estructura del proyecto

```bash
/public
  /artworks   → imágenes de obras (galería)
  /site       → imágenes de layout (hero, secciones)

/src
  /components → UI (Hero, Gallery, etc.)
  /content    → configuración visual del sitio
  /data       → datos de obras
  /types      → tipado TypeScript
```

---

## 🧠 Arquitectura

El proyecto separa **contenido**, **datos** y **presentación**:

### 1. `siteContent.ts`

Controla imágenes estructurales del layout:

* Hero
* Alternating section
* Featured

👉 No contiene artworks

---

### 2. `artworks.ts`

Fuente de datos de la galería:

* imágenes
* categorías
* orden
* metadata

👉 Escalable a futuro (API / CMS)

---

### 3. `/public`

Todas las imágenes viven aquí:

* `/artworks` → galería
* `/site` → layout

👉 No se usan imports de imágenes
👉 Se usan rutas públicas

---

## 🖼️ Cómo agregar nuevas obras

### 1. Subir imagen

```bash
/public/artworks/006.jpg
```

---

### 2. Editar `artworks.ts`

```ts
{
  id: '6',
  image: BASE + 'artworks/006.jpg',
  title: 'Nombre de la obra',
  price: null,
  description: null,
  is_featured: false,
  display_order: 6,
  created_at: '',
  category: 'marinas',
  dimensions: '80 x 60 cm',
}
```

---

## 🧩 Categorías disponibles

* `todas`
* `marinas`
* `taperas`
* `bodegones`
* `otros`

---

## 🧭 Cómo cambiar imágenes del sitio

Editar:

```bash
/src/content/siteContent.ts
```

Ejemplo:

```ts
hero: {
  image: BASE + 'site/hero.jpg',
}
```

---

## ⚠️ IMPORTANTE — GitHub Pages

El proyecto usa:

```ts
import.meta.env.BASE_URL
```

👉 necesario porque GitHub Pages sirve el sitio desde:

```
/galeria-de-arte/
```

---

## 🚀 Deploy

### Build

```bash
npm run build
```

---

### Deploy

```bash
npm run deploy
```

👉 publica en branch `gh-pages`

---

## 🔄 Flujo de actualización

```bash
git add .
git commit -m "feat: agregar nuevas obras"
git push
npm run deploy
```

---

## ⚡ Performance

* Lazy loading en imágenes no críticas
* Hero optimizado (above-the-fold)
* Assets estáticos desde `/public`

---

## 📌 Mejoras futuras

* Compresión de imágenes
* SEO (meta tags, Open Graph)
* Páginas individuales por obra
* CMS o integración API
* Deploy automático (GitHub Actions)

---

## 👤 Autor

Proyecto desarrollado por Rodrigo Navone.

---
