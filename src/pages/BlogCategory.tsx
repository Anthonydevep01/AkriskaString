import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '@/components/seo/Seo'
import PageHeader from '@/components/ui/PageHeader'
import { blogCategoryLabels, blogPosts, type BlogCategory } from '@/content/blogPosts'

const categories: BlogCategory[] = ['noticias', 'tutoriales-de-canciones']

export default function BlogCategory() {
  const params = useParams()
  const category = params.category as BlogCategory | undefined

  if (!category || !categories.includes(category)) {
    return <Navigate to="/blog" replace />
  }

  const posts = blogPosts
    .filter((p) => p.category === category)
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))

  return (
    <div>
      <Seo
        title={`Blog: ${blogCategoryLabels[category]}`}
        description={`Artículos de ${blogCategoryLabels[category]} de Akriska String Quartet. Contenido en español para Costa Rica.`}
        keywords={[
          'blog',
          blogCategoryLabels[category],
          'Akriska String Quartet',
          'Costa Rica',
          'cuarteto de cuerda',
        ]}
        canonicalPath={`/blog/${category}`}
        ogImagePath="/placeholders/og-default.svg"
      />

      <PageHeader
        title={blogCategoryLabels[category]}
        subtitle="Explora artículos filtrados por categoría."
      />

      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
        <Link className="text-[var(--accent)] hover:underline" to="/blog">
          Ver todo
        </Link>
        <span className="text-[var(--muted)]">/</span>
        <span className="text-[var(--text)]">{blogCategoryLabels[category]}</span>
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
              <div className="mt-1 font-serif text-lg font-semibold text-[var(--text)] group-hover:underline">
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

