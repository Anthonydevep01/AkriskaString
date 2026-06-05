import { Link, useLocation } from 'react-router-dom'
import Seo from '@/components/seo/Seo'
import PageHeader from '@/components/ui/PageHeader'
import { blogPosts } from '@/content/blogPosts'
import {
  blogPostsToSearchItems,
  pageSearchItems,
  searchItems,
} from '@/components/search/searchIndex'

function useQueryParam(name: string) {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  return params.get(name) ?? ''
}

export default function Buscar() {
  const q = useQueryParam('q')
  const all = [...pageSearchItems, ...blogPostsToSearchItems(blogPosts)]
  const results = searchItems(all, q)

  return (
    <div>
      <Seo
        title="Buscar"
        description="Busca páginas y artículos del sitio de Akriska String Quartet."
        keywords={['buscar', 'Akriska String Quartet', 'blog', 'portafolio', 'contacto']}
        canonicalPath="/buscar"
        ogImagePath="/placeholders/og-default.svg"
        robots="noindex, follow"
      />

      <PageHeader
        title="Buscar"
        subtitle={q ? `Resultados para: “${q}”` : 'Escribe una palabra para buscar en el sitio.'}
      />

      {results.length === 0 ? (
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 text-sm text-[var(--muted)]">
          No hay resultados. Prueba con “boda”, “Cartago”, “tutorial” o “portafolio”.
        </div>
      ) : (
        <div className="divide-y divide-[var(--border)] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
          {results.map((r) => (
            <Link
              key={r.href}
              to={r.href}
              className="block px-6 py-5 transition hover:bg-[var(--hover)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-serif text-base font-semibold text-[var(--text)]">
                    {r.title}
                  </div>
                  <div className="mt-1 text-sm text-[var(--muted)]">{r.description}</div>
                </div>
                <div className="rounded-full border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-1 text-xs text-[var(--muted)]">
                  {r.type === 'page' ? 'Página' : 'Blog'}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

