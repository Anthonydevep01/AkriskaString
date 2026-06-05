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
const SITE_ORIGIN =
  import.meta.env.VITE_SITE_URL ??
  (typeof window !== 'undefined' ? window.location.origin : 'https://example.com')
const DEFAULT_OG = '/placeholders/og-default.svg'

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
    logo: `${SITE_ORIGIN}/media/images/Akriska%20String%20logo.jpg`,
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

