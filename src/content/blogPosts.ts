export type BlogCategory = 'noticias' | 'tutoriales-de-canciones'

export type BlogPost = {
  slug: string
  category: BlogCategory
  title: string
  dateISO: string
  excerpt: string
  heroImagePath?: string
  keywords: string[]
  content: {
    intro: string
    sections: Array<{ heading: string; paragraphs: string[] }>
    faqs: Array<{ q: string; a: string }>
  }
}

export const blogCategoryLabels: Record<BlogCategory, string> = {
  noticias: 'Noticias',
  'tutoriales-de-canciones': 'Tutoriales de canciones',
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'akriska-lanzamiento-en-paraiso-cartago',
    category: 'noticias',
    title: 'Akriska String Quartet: inicio de temporada en Paraíso, Cartago',
    dateISO: '2026-05-01',
    excerpt:
      'Presentamos nuestro proyecto en Costa Rica y cómo puedes contratarnos para eventos públicos y privados.',
    heroImagePath: '/placeholders/hero.svg',
    keywords: [
      'cuarteto de cuerda Costa Rica',
      'música en vivo bodas Costa Rica',
      'eventos privados Cartago',
      'Akriska String Quartet',
      'Paraiso Cartago',
    ],
    content: {
      intro:
        'Somos Akriska String Quartet, un cuarteto de cuerda joven con base en Paraíso, Cartago. Ofrecemos música en vivo para bodas, eventos corporativos y actividades culturales en Costa Rica.',
      sections: [
        {
          heading: 'Qué ofrecemos',
          paragraphs: [
            'Nuestro repertorio combina música clásica, bandas sonoras y arreglos contemporáneos para crear un ambiente elegante y memorable.',
            'Podemos adaptar la duración, el formato y el estilo musical según tu evento.',
          ],
        },
        {
          heading: 'Cómo contratarnos',
          paragraphs: [
            'Cuéntanos la fecha, lugar y tipo de evento. También puedes compartir las canciones que te gustaría escuchar.',
            'Te responderemos con una propuesta clara y opciones de repertorio.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿En qué zonas de Costa Rica trabajan?',
          a: 'Estamos ubicadas en Paraíso, Cartago, y podemos desplazarnos a diferentes zonas del país según el evento.',
        },
        {
          q: '¿Pueden tocar para bodas y ceremonias?',
          a: 'Sí. Ofrecemos formatos para ceremonia, cóctel y recepción, con repertorio clásico y moderno.',
        },
        {
          q: '¿Cómo se define el repertorio?',
          a: 'Proponemos una lista base y también aceptamos solicitudes con anticipación para preparar arreglos.',
        },
        {
          q: '¿Cuánto dura una presentación?',
          a: 'Se ajusta a tu necesidad: sets cortos, 45–60 minutos, o formatos por bloques con pausas.',
        },
      ],
    },
  },
  {
    slug: 'tutorial-canon-en-re-arr-para-cuarteto',
    category: 'tutoriales-de-canciones',
    title: 'Tutorial: Canon en Re (versión para cuarteto de cuerda)',
    dateISO: '2026-05-02',
    excerpt:
      'Guía rápida para escuchar y entender la estructura del Canon en Re, y cómo lo interpretamos en Akriska.',
    heroImagePath: '/placeholders/video-poster.svg',
    keywords: [
      'Canon en Re tutorial',
      'cuarteto de cuerda Canon en Re',
      'música para bodas Costa Rica',
      'tutoriales de canciones cuarteto',
      'Akriska String Quartet',
    ],
    content: {
      intro:
        'El Canon en Re es una pieza muy solicitada para bodas y eventos. En este tutorial te contamos cómo se estructura y qué escuchar para disfrutarla aún más.',
      sections: [
        {
          heading: 'Estructura musical (en simple)',
          paragraphs: [
            'La melodía se repite en capas (canon), mientras el bajo sostiene una progresión constante.',
            'En cuarteto, repartimos las voces para que la textura se mantenga clara y elegante.',
          ],
        },
        {
          heading: 'Cómo lo tocamos en vivo',
          paragraphs: [
            'Ajustamos tempo y dinámica según el espacio y el momento del evento (entrada, anillos, firma).',
            'Si lo deseas, también podemos enlazarlo con una canción moderna en estilo similar.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿El Canon en Re es apropiado para ceremonia?',
          a: 'Sí, es una opción clásica para entradas y momentos solemnes por su carácter armónico y estable.',
        },
        {
          q: '¿Pueden tocar una versión más corta?',
          a: 'Sí. Podemos preparar una edición breve manteniendo la esencia de la obra.',
        },
        {
          q: '¿Se puede combinar con una canción moderna?',
          a: 'En muchos casos sí, dependiendo del arreglo. Cuéntanos tu idea y te proponemos opciones.',
        },
      ],
    },
  },
]

export function getBlogPost(category: string | undefined, slug: string | undefined) {
  if (!category || !slug) return undefined
  if (category !== 'noticias' && category !== 'tutoriales-de-canciones') return undefined
  return blogPosts.find((p) => p.category === category && p.slug === slug)
}

