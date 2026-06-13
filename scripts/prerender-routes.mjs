import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const distDir = path.join(projectRoot, 'dist')
const templatePath = path.join(distDir, 'index.html')

if (!fs.existsSync(templatePath)) {
  throw new Error('dist/index.html not found. Run vite build first.')
}

const rawSiteUrl =
  process.env.SITE_URL ?? process.env.VITE_SITE_URL ?? 'https://www.akriskastrings.com'
const siteUrl = normalizeSiteUrl(rawSiteUrl)
const siteName = 'Akriska String Quartet'
const locale = 'es_CR'
const defaultOgImage = `${siteUrl}/media/images/akriska-logo.jpg`

const template = fs.readFileSync(templatePath, 'utf8')

if (!template.includes('<!-- SEO_HEAD -->')) {
  throw new Error('SEO_HEAD placeholder not found in dist/index.html')
}

const staticPages = [
  {
    path: '/',
    title: 'Inicio',
    description:
      'Akriska String Quartet: cuarteto de cuerda en Costa Rica. Música en vivo para eventos públicos y privados en Paraíso, Cartago.',
  },
  {
    path: '/acerca-de',
    title: 'Acerca de',
    description:
      'Conoce a Akriska String Quartet: cuarteto de cuerda en Paraíso, Cartago. Integrantes, historia y repertorio para eventos en Costa Rica.',
  },
  {
    path: '/vision-mision',
    title: 'Visión y misión',
    description:
      'Visión, misión y valores de Akriska String Quartet: música de cámara para eventos en Costa Rica con un enfoque artístico y profesional.',
  },
  {
    path: '/portafolio',
    title: 'Portafolio',
    description:
      'Portafolio de Akriska String Quartet: videos embebidos para mostrar presentaciones en vivo y repertorio para eventos en Costa Rica.',
  },
  {
    path: '/testimonios',
    title: 'Testimonios',
    description:
      'Testimonios y reseñas de clientes de Akriska String Quartet: música en vivo para bodas y eventos en Costa Rica.',
  },
  {
    path: '/contacto',
    title: 'Contacto',
    description:
      'Contacto y contratación de Akriska String Quartet en Costa Rica. Solicita cotización para bodas, eventos corporativos y eventos privados.',
  },
  {
    path: '/ubicaciones',
    title: 'Ubicaciones',
    description:
      'Cobertura por provincias en Costa Rica. Descubre dónde contratar Akriska String Quartet para música en vivo en bodas y eventos.',
  },
  {
    path: '/ubicaciones/san-jose',
    title: 'Ubicaciones: San José',
    description:
      'Música en vivo en San José con cuarteto de cuerda. Servicio para bodas, eventos corporativos y celebraciones privadas en la capital.',
  },
  {
    path: '/ubicaciones/alajuela',
    title: 'Ubicaciones: Alajuela',
    description:
      'Música en vivo en Alajuela con cuarteto de cuerda. Ideal para bodas y eventos en haciendas, hoteles y venues del Valle Central.',
  },
  {
    path: '/ubicaciones/cartago',
    title: 'Ubicaciones: Cartago',
    description:
      'Música en vivo en Cartago con cuarteto de cuerda. Servicio elegante para ceremonias, recepciones y eventos privados en toda la provincia.',
  },
  {
    path: '/ubicaciones/heredia',
    title: 'Ubicaciones: Heredia',
    description:
      'Música en vivo en Heredia con cuarteto de cuerda. Ambientación para bodas, cócteles y eventos corporativos con repertorio clásico y moderno.',
  },
  {
    path: '/ubicaciones/guanacaste',
    title: 'Ubicaciones: Guanacaste',
    description:
      'Música en vivo en Guanacaste con cuarteto de cuerda. Ideal para bodas destino en playa y eventos en hoteles, resorts y venues al aire libre.',
  },
  {
    path: '/ubicaciones/puntarenas',
    title: 'Ubicaciones: Puntarenas',
    description:
      'Música en vivo en Puntarenas con cuarteto de cuerda. Servicio profesional para eventos sociales y corporativos en costa y ciudad.',
  },
  {
    path: '/ubicaciones/limon',
    title: 'Ubicaciones: Limón',
    description:
      'Música en vivo en Limón con cuarteto de cuerda. Servicio para celebraciones, actos culturales y eventos privados con música elegante.',
  },
  {
    path: '/blog',
    title: 'Blog',
    description: 'Blog de Akriska String Quartet: noticias y tutoriales de canciones. Artículos en español para Costa Rica.',
  },
  {
    path: '/blog/noticias',
    title: 'Blog: Noticias',
    description: 'Artículos de Noticias de Akriska String Quartet. Contenido en español para Costa Rica.',
  },
  {
    path: '/blog/tutoriales-de-canciones',
    title: 'Blog: Tutoriales de canciones',
    description:
      'Artículos de Tutoriales de canciones de Akriska String Quartet. Contenido en español para Costa Rica.',
  },
]

const blogFilePath = path.join(projectRoot, 'src', 'content', 'blogPosts.ts')
const blogSource = fs.readFileSync(blogFilePath, 'utf8')

const blogBlockMatches = Array.from(blogSource.matchAll(/\{\s*slug:\s*'([^']+)'\s*,\s*category:\s*'([^']+)'\s*,[\s\S]*?\}\s*,/g))

const blogPages = blogBlockMatches
  .map((m) => {
    const block = m[0]
    const slug = m[1]
    const category = m[2]
    const titleMatch = block.match(/title:\s*'([^']+)'/)
    const excerptMatch = block.match(/excerpt:\s*'([^']+)'/)
    const title = titleMatch?.[1] ?? 'Blog'
    const description = excerptMatch?.[1] ?? 'Artículo del blog de Akriska String Quartet.'
    return {
      path: `/blog/${category}/${slug}`,
      title,
      description,
    }
  })
  .filter((p) => p.path && p.title && p.description)

const routes = [...staticPages, ...blogPages]

function normalizeSiteUrl(input) {
  const trimmed = String(input).replace(/\/+$/, '')
  try {
    const u = new URL(trimmed)
    const host = u.hostname
    const parts = host.split('.')
    if (!host.startsWith('www.') && parts.length === 2) u.hostname = `www.${host}`
    return u.toString().replace(/\/+$/, '')
  } catch {
    return trimmed
  }
}

function buildSeoHead({ path: routePath, title, description }) {
  const fullTitle = `${title} | ${siteName}`
  const canonicalUrl = `${siteUrl}${routePath}`
  const ogImage = defaultOgImage

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: defaultOgImage,
    sameAs: [
      'https://www.facebook.com/profile.php?id=61568684376921&sk',
      'https://www.instagram.com/akriska_string/',
      'https://www.youtube.com/@AkrishkaString',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paraíso',
      addressRegion: 'Cartago',
      addressCountry: 'CR',
    },
  }

  const schemaWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    inLanguage: 'es-CR',
  }

  const schemaWebPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: fullTitle,
    url: canonicalUrl,
    description,
  }

  const jsonLd = JSON.stringify([schemaOrg, schemaWebsite, schemaWebPage])

  return [
    `<title>${fullTitle}</title>`,
    `<meta name="description" content="${escapeAttr(description)}" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:site_name" content="${siteName}" />`,
    `<meta property="og:title" content="${escapeAttr(fullTitle)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${locale}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(fullTitle)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ')
}

function escapeAttr(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function writeRouteHtml(route) {
  const seoHead = buildSeoHead(route)

  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace('<!-- SEO_HEAD -->', seoHead)

  const rel = route.path.replace(/^\/+/, '').replace(/\/+$/, '')
  const outDir = rel ? path.join(distDir, rel) : distDir
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8')
}

for (const route of routes) writeRouteHtml(route)
