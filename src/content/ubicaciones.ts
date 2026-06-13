export type ImageSize = 'landscape_4_3' | 'landscape_16_9'

export type LocationProvince = {
  slug: string
  name: string
  headline: string
  subtitle: string
  intro: string
  cantons: string[]
  highlights: string[]
  keywords: string[]
  bannerPrompt: string
  cardPrompt: string
}

export function imageUrl(prompt: string, image_size: ImageSize) {
  return `https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${image_size}`
}

export const provinces: LocationProvince[] = [
  {
    slug: 'san-jose',
    name: 'San José',
    headline: 'Música en vivo en San José',
    subtitle:
      'Cuarteto de cuerda para bodas, eventos corporativos y celebraciones privadas en la capital y zona metropolitana.',
    intro:
      'Akriska String Quartet ofrece un servicio musical elegante y profesional en San José. Adaptamos el repertorio al estilo del evento: ceremonia, cóctel, recepción o ambientación corporativa.',
    cantons: [
      'San José',
      'Escazú',
      'Desamparados',
      'Santa Ana',
      'Curridabat',
      'Goicoechea',
      'Tibás',
      'Moravia',
    ],
    highlights: [
      'Repertorio clásico y moderno para cada momento del evento',
      'Montaje sencillo y puntualidad para venues en San José',
      'Atención personalizada para elegir canciones y duración',
    ],
    keywords: [
      'cuarteto de cuerda San José',
      'música en vivo San José',
      'música para bodas San José',
      'cuarteto para boda San José',
      'música para eventos corporativos San José',
      'violinista para eventos San José',
      'Akriska String Quartet',
      'Costa Rica',
    ],
    bannerPrompt:
      'Realistic photo, elegant string quartet with violins performing at a refined venue in San Jose Costa Rica, warm lighting, professional event atmosphere, shallow depth of field, high detail, cinematic',
    cardPrompt:
      'Realistic photo, close-up violin on stage with soft bokeh lights, San Jose Costa Rica city vibe, professional event ambience, high detail, warm tones',
  },
  {
    slug: 'alajuela',
    name: 'Alajuela',
    headline: 'Música en vivo en Alajuela',
    subtitle:
      'Cuarteto de cuerda para eventos en Alajuela: bodas, hoteles, haciendas y celebraciones en el Valle Central.',
    intro:
      'En Alajuela, llevamos música en vivo para eventos con un enfoque elegante y cercano. Te ayudamos a escoger un repertorio que combine con el ambiente y el tipo de ceremonia o recepción.',
    cantons: ['Alajuela', 'San Ramón', 'Grecia', 'Atenas', 'Naranjo', 'Poás'],
    highlights: [
      'Ideal para bodas en haciendas y jardines de Alajuela',
      'Opciones para ceremonias, cócteles y recepciones',
      'Arreglos contemporáneos y clásicos en formato de cuerdas',
    ],
    keywords: [
      'cuarteto de cuerda Alajuela',
      'música en vivo Alajuela',
      'música para bodas Alajuela',
      'violinista Alajuela',
      'música para eventos Alajuela',
      'Akriska String Quartet',
      'Costa Rica',
    ],
    bannerPrompt:
      'Realistic photo, violin and string quartet performing at an outdoor garden wedding venue in Alajuela Costa Rica, golden hour light, elegant decor, high detail, cinematic',
    cardPrompt:
      'Realistic photo, violin resting on music stand with soft natural light, Alajuela Costa Rica vibe, elegant event setup, high detail',
  },
  {
    slug: 'cartago',
    name: 'Cartago',
    headline: 'Música en vivo en Cartago',
    subtitle:
      'Cuarteto de cuerda en Cartago y alrededores: ceremonias, recepciones y eventos privados con un estilo elegante.',
    intro:
      'Cartago es nuestro punto de partida (Paraíso). Ofrecemos música para eventos en toda la provincia, con comunicación clara, puntualidad y un repertorio pensado para emocionar.',
    cantons: ['Cartago', 'Paraíso', 'La Unión', 'Oreamuno', 'El Guarco'],
    highlights: [
      'Servicio local en Cartago con logística simple',
      'Repertorio adaptable para iglesia, salón o jardín',
      'Atención rápida para cotización y selección musical',
    ],
    keywords: [
      'cuarteto de cuerda Cartago',
      'música en vivo Cartago',
      'música para bodas Cartago',
      'cuarteto en Paraíso Cartago',
      'música para eventos privados Cartago',
      'Akriska String Quartet',
      'Costa Rica',
    ],
    bannerPrompt:
      'Realistic photo, professional string quartet with violins performing in a historic church style venue in Cartago Costa Rica, warm interior lighting, elegant atmosphere, high detail, cinematic',
    cardPrompt:
      'Realistic photo, violin detail with subtle architectural background inspired by Cartago Costa Rica, elegant event mood, high detail',
  },
  {
    slug: 'heredia',
    name: 'Heredia',
    headline: 'Música en vivo en Heredia',
    subtitle:
      'Cuarteto de cuerda para eventos en Heredia: bodas, eventos corporativos y celebraciones con música de cámara.',
    intro:
      'En Heredia, ofrecemos música de cuerdas para crear un ambiente sofisticado y memorable. Trabajamos con repertorio clásico y contemporáneo, ideal para ceremonias y cócteles.',
    cantons: ['Heredia', 'Belén', 'Flores', 'San Pablo', 'Santo Domingo'],
    highlights: [
      'Ambientación elegante para hoteles y salones en Heredia',
      'Música para ceremonia, entrada, cóctel y cena',
      'Opciones de repertorio moderno y bandas sonoras',
    ],
    keywords: [
      'cuarteto de cuerda Heredia',
      'música en vivo Heredia',
      'música para bodas Heredia',
      'cuarteto para eventos Heredia',
      'violinista Heredia',
      'Akriska String Quartet',
      'Costa Rica',
    ],
    bannerPrompt:
      'Realistic photo, string quartet with violins performing at a modern corporate event venue in Heredia Costa Rica, clean elegant lighting, professional atmosphere, high detail, cinematic',
    cardPrompt:
      'Realistic photo, violin silhouette with soft city lights bokeh, Heredia Costa Rica mood, elegant professional event, high detail',
  },
  {
    slug: 'guanacaste',
    name: 'Guanacaste',
    headline: 'Música en vivo en Guanacaste',
    subtitle:
      'Cuarteto de cuerda para bodas destino y eventos en Guanacaste: playa, hoteles y venues al aire libre.',
    intro:
      'Guanacaste es ideal para bodas destino y eventos al aire libre. Llevamos música de cuerdas con un montaje discreto y un repertorio perfecto para ceremonias frente al mar y recepciones.',
    cantons: ['Liberia', 'Santa Cruz', 'Carrillo', 'Nicoya', 'La Cruz'],
    highlights: [
      'Ideal para ceremonias en playa y resorts',
      'Repertorio romántico para entrada, votos y salida',
      'Coordinación simple con planners y venues',
    ],
    keywords: [
      'cuarteto de cuerda Guanacaste',
      'música en vivo Guanacaste',
      'música para bodas Guanacaste',
      'cuarteto para boda en playa',
      'música para eventos en Liberia',
      'Akriska String Quartet',
      'Costa Rica',
    ],
    bannerPrompt:
      'Realistic photo, elegant string quartet with violins performing at a beach wedding in Guanacaste Costa Rica, sunset light, ocean background, refined decor, high detail, cinematic',
    cardPrompt:
      'Realistic photo, violin close-up with soft tropical sunset colors, Guanacaste Costa Rica vibe, elegant wedding atmosphere, high detail',
  },
  {
    slug: 'puntarenas',
    name: 'Puntarenas',
    headline: 'Música en vivo en Puntarenas',
    subtitle:
      'Cuarteto de cuerda para eventos en Puntarenas: celebraciones en costa y ciudad con un estilo elegante y profesional.',
    intro:
      'En Puntarenas, ofrecemos música de cuerdas para eventos sociales y corporativos. Adaptamos el formato y el repertorio para espacios abiertos, salones y hoteles.',
    cantons: ['Puntarenas', 'Esparza', 'Garabito', 'Osa', 'Quepos'],
    highlights: [
      'Ambientación para eventos en hoteles y venues costeros',
      'Repertorio adaptable a espacios abiertos',
      'Comunicación clara y propuesta musical por etapas',
    ],
    keywords: [
      'cuarteto de cuerda Puntarenas',
      'música en vivo Puntarenas',
      'música para bodas Puntarenas',
      'música para eventos Quepos',
      'violinista Puntarenas',
      'Akriska String Quartet',
      'Costa Rica',
    ],
    bannerPrompt:
      'Realistic photo, string quartet with violins performing at a coastal hotel event venue in Puntarenas Costa Rica, evening lights, elegant atmosphere, high detail, cinematic',
    cardPrompt:
      'Realistic photo, violin and sheet music with soft ocean bokeh background, Puntarenas Costa Rica mood, elegant event, high detail',
  },
  {
    slug: 'limon',
    name: 'Limón',
    headline: 'Música en vivo en Limón',
    subtitle:
      'Cuarteto de cuerda para eventos en Limón: celebraciones, actos culturales y eventos privados con música en vivo.',
    intro:
      'En Limón, llevamos música de cuerdas para crear un ambiente sofisticado y emotivo. Diseñamos un repertorio que acompaña momentos clave del evento, con un enfoque profesional.',
    cantons: ['Limón', 'Pococí', 'Siquirres', 'Talamanca'],
    highlights: [
      'Música de cámara para eventos sociales y culturales',
      'Repertorio clásico y contemporáneo en formato de cuerdas',
      'Atención personalizada para definir el estilo del evento',
    ],
    keywords: [
      'cuarteto de cuerda Limón',
      'música en vivo Limón',
      'música para bodas Limón',
      'música para eventos en Limón Costa Rica',
      'violinista Limón',
      'Akriska String Quartet',
      'Costa Rica',
    ],
    bannerPrompt:
      'Realistic photo, elegant string quartet with violins performing at a refined cultural event venue in Limon Costa Rica, warm stage lighting, professional atmosphere, high detail, cinematic',
    cardPrompt:
      'Realistic photo, violin detail with subtle tropical greenery bokeh, Limon Costa Rica vibe, elegant event atmosphere, high detail',
  },
]
