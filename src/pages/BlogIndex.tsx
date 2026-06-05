import { Link } from 'react-router-dom'
import Seo from '@/components/seo/Seo'
import PageHeader from '@/components/ui/PageHeader'
import { blogCategoryLabels, blogPosts } from '@/content/blogPosts'

const categories = [
  { key: 'noticias', label: blogCategoryLabels.noticias, href: '/blog/noticias' },
  {
    key: 'tutoriales-de-canciones',
    label: blogCategoryLabels['tutoriales-de-canciones'],
    href: '/blog/tutoriales-de-canciones',
  },
]

export default function BlogIndex() {
  const posts = [...blogPosts].sort((a, b) => b.dateISO.localeCompare(a.dateISO))

  return (
    <div>
      <Seo
        title="Blog"
        description="Blog de Akriska String Quartet: noticias y tutoriales de canciones. Artículos en español para Costa Rica."
        keywords={[
          'blog',
          'noticias',
          'tutoriales de canciones',
          'cuarteto de cuerda',
          'Costa Rica',
          'Akriska String Quartet',
        ]}
        canonicalPath="/blog"
        ogImagePath="/placeholders/og-default.svg"
      />

      <PageHeader
        title="Blog"
        subtitle="Noticias y tutoriales de canciones. Cada artículo incluye una sección de preguntas frecuentes (FAQ) para SEO."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <Link
            key={c.key}
            to={c.href}
            className="rounded-full border border-[var(--border)] bg-[var(--surface-solid)] px-4 py-2 text-sm text-[var(--text)] hover:bg-[var(--hover)]"
          >
            {c.label}
          </Link>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.category}/${p.slug}`}
            className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm transition hover:bg-[var(--surface-solid)]"
          >
            <div className="aspect-[16/9] bg-[var(--bg)]">
              <img
                src={p.heroImagePath ?? '/placeholders/hero.svg'}
                alt={p.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-1 text-xs text-[var(--muted)]">
                {blogCategoryLabels[p.category]}
              </div>
              <div className="mt-3 font-serif text-lg font-semibold text-[var(--text)] group-hover:underline">
                {p.title}
              </div>
              <div className="mt-2 text-sm leading-6 text-[var(--muted)]">{p.excerpt}</div>
              <div className="mt-4 text-xs text-[var(--muted)]">
                {new Date(p.dateISO).toLocaleDateString('es-CR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

