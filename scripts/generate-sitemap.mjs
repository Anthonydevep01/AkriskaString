import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const rawSiteUrl =
  process.env.SITE_URL ?? process.env.VITE_SITE_URL ?? 'https://www.akriskastrings.com'
const siteUrl = normalizeSiteUrl(rawSiteUrl)

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

const publicDir = path.join(projectRoot, 'public')
fs.mkdirSync(publicDir, { recursive: true })

const staticPaths = [
  '/',
  '/acerca-de',
  '/vision-mision',
  '/portafolio',
  '/testimonios',
  '/contacto',
  '/ubicaciones',
  '/ubicaciones/san-jose',
  '/ubicaciones/alajuela',
  '/ubicaciones/cartago',
  '/ubicaciones/heredia',
  '/ubicaciones/guanacaste',
  '/ubicaciones/puntarenas',
  '/ubicaciones/limon',
  '/blog',
  '/blog/noticias',
  '/blog/tutoriales-de-canciones',
]

const blogFilePath = path.join(projectRoot, 'src', 'content', 'blogPosts.ts')
const blogSource = fs.readFileSync(blogFilePath, 'utf8')

const postMatches = Array.from(
  blogSource.matchAll(/slug:\s*'([^']+)'\s*,\s*category:\s*'([^']+)'/g),
).map((m) => ({ slug: m[1], category: m[2] }))

const blogPaths = postMatches.map((p) => `/blog/${p.category}/${p.slug}`)

const allPaths = Array.from(new Set([...staticPaths, ...blogPaths])).sort()
const nowISO = new Date().toISOString()

const urlsXml = allPaths
  .map((p) => {
    const loc = `${siteUrl}${p}`
    return [
      '  <url>',
      `    <loc>${loc}</loc>`,
      `    <lastmod>${nowISO}</lastmod>`,
      '  </url>',
    ].join('\n')
  })
  .join('\n')

const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urlsXml,
  '</urlset>',
  '',
].join('\n')

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8')

const robotsTxt = [
  'User-agent: *',
  'Allow: /',
  `Sitemap: ${siteUrl}/sitemap.xml`,
  '',
].join('\n')

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8')
