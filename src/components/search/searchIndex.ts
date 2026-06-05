import type { BlogPost } from '@/content/blogPosts'

export type SearchItemType = 'page' | 'blog'

export type SearchItem = {
  type: SearchItemType
  title: string
  description: string
  href: string
  keywords: string[]
}

export const pageSearchItems: SearchItem[] = [
  {
    type: 'page',
    title: 'Inicio',
    description: 'Presentación, portafolio, blog y contacto.',
    href: '/',
    keywords: ['Akriska', 'cuarteto', 'cuerda', 'Costa Rica', 'Cartago'],
  },
  {
    type: 'page',
    title: 'Acerca de',
    description: 'Historia del cuarteto, integrantes y enfoque musical.',
    href: '/acerca-de',
    keywords: ['integrantes', 'biografía', 'música de cámara', 'Paraiso'],
  },
  {
    type: 'page',
    title: 'Visión y misión',
    description: 'Valores, propósito y proyección artística.',
    href: '/vision-mision',
    keywords: ['misión', 'visión', 'valores', 'Costa Rica'],
  },
  {
    type: 'page',
    title: 'Portafolio',
    description: 'Vídeos, imágenes y muestras para eventos.',
    href: '/portafolio',
    keywords: ['videos', 'repertorio', 'bodas', 'corporativo', 'eventos'],
  },
  {
    type: 'page',
    title: 'Testimonios',
    description: 'Opiniones de clientes y eventos.',
    href: '/testimonios',
    keywords: ['reseñas', 'clientes', 'recomendaciones', 'eventos'],
  },
  {
    type: 'page',
    title: 'Contacto',
    description: 'Formulario de contratación y consulta.',
    href: '/contacto',
    keywords: ['contratación', 'contacto', 'cotización', 'Costa Rica'],
  },
]

export function blogPostsToSearchItems(posts: BlogPost[]): SearchItem[] {
  return posts.map((p) => ({
    type: 'blog',
    title: p.title,
    description: p.excerpt,
    href: `/blog/${p.category}/${p.slug}`,
    keywords: p.keywords,
  }))
}

export function searchItems(all: SearchItem[], query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return []

  return all
    .map((item) => {
      const hay = [
        item.title,
        item.description,
        item.keywords.join(' '),
      ]
        .join(' ')
        .toLowerCase()

      const hits = q
        .split(/\s+/)
        .filter(Boolean)
        .reduce((acc, token) => acc + (hay.includes(token) ? 1 : 0), 0)

      return { item, hits }
    })
    .filter((x) => x.hits > 0)
    .sort((a, b) => b.hits - a.hits)
    .slice(0, 12)
    .map((x) => x.item)
}

