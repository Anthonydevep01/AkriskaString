import { Helmet } from 'react-helmet-async'

type SeoProps = {
  title: string
  description: string
  keywords: string[]
  canonicalPath: string
  ogImagePath?: string
  ogType?: 'website' | 'article'
  robots?: string
}

const SITE_NAME = 'Akriska String Quartet'
const SITE_ORIGIN = normalizeSiteOrigin(
  import.meta.env.VITE_SITE_URL ??
    (typeof window !== 'undefined'
      ? window.location.origin
      : 'https://www.akriskastrings.com'),
)
const DEFAULT_OG = '/media/images/akriska-logo.jpg'

function normalizeSiteOrigin(input: string) {
  try {
    const u = new URL(input)
    const host = u.hostname
    const parts = host.split('.')
    if (!host.startsWith('www.') && parts.length === 2) u.hostname = `www.${host}`
    return u.origin
  } catch {
    return input
  }
}

export default function Seo({
  title,
  description,
  keywords,
  canonicalPath,
  ogImagePath,
  ogType = 'website',
  robots,
}: SeoProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const canonicalUrl = `${SITE_ORIGIN}${canonicalPath}`
  const ogImageUrl = `${SITE_ORIGIN}${ogImagePath ?? DEFAULT_OG}`
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_ORIGIN,
    logo: `${SITE_ORIGIN}/media/images/akriska-logo.jpg`,
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
    name: SITE_NAME,
    url: SITE_ORIGIN,
    inLanguage: 'es-CR',
  }
  const schemaWebPage = {
    '@context': 'https://schema.org',
    '@type': ogType === 'article' ? 'Article' : 'WebPage',
    name: fullTitle,
    url: canonicalUrl,
    description,
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {robots ? <meta name="robots" content={robots} /> : null}
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="es_CR" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([schemaOrg, schemaWebsite, schemaWebPage]),
        }}
      />
    </Helmet>
  )
}

