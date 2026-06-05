import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '@/components/seo/Seo'
import { blogCategoryLabels, getBlogPost } from '@/content/blogPosts'

export default function BlogPost() {
  const params = useParams()
  const post = getBlogPost(params.category, params.slug)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <article>
      <Seo
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords}
        canonicalPath={`/blog/${post.category}/${post.slug}`}
        ogImagePath={post.heroImagePath ?? '/placeholders/og-default.svg'}
        ogType="article"
      />

      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
        <Link className="text-[var(--accent)] hover:underline" to="/blog">
          Blog
        </Link>
        <span className="text-[var(--muted)]">/</span>
        <Link
          className="text-[var(--accent)] hover:underline"
          to={`/blog/${post.category}`}
        >
          {blogCategoryLabels[post.category]}
        </Link>
      </div>

      <h1 className="font-serif text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
        {post.title}
      </h1>
      <div className="mt-2 text-sm text-[var(--muted)]">
        {new Date(post.dateISO).toLocaleDateString('es-CR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
        <img
          src={post.heroImagePath ?? '/placeholders/hero.svg'}
          alt={post.title}
          className="w-full object-cover"
        />
      </div>

      <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
        <p className="text-sm leading-7 text-[var(--muted)] md:text-base">
          {post.content.intro}
        </p>

        <div className="mt-8 space-y-8">
          {post.content.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-serif text-xl font-semibold text-[var(--text)] md:text-2xl">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-4">
                {s.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-sm leading-7 text-[var(--muted)] md:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
        <h2 className="font-serif text-xl font-semibold text-[var(--text)] md:text-2xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-5 divide-y divide-[var(--border)]">
          {post.content.faqs.map((f, idx) => (
            <div key={idx} className="py-4">
              <div className="text-sm font-semibold text-[var(--text)]">{f.q}</div>
              <div className="mt-2 text-sm leading-6 text-[var(--muted)]">{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}

