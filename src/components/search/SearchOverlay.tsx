import { X, Search } from 'lucide-react'
import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { blogPosts } from '@/content/blogPosts'
import {
  blogPostsToSearchItems,
  pageSearchItems,
  searchItems,
  type SearchItem,
} from '@/components/search/searchIndex'

export default function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => inputRef.current?.focus(), 0)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  const allItems = useMemo(() => {
    return [...pageSearchItems, ...blogPostsToSearchItems(blogPosts)]
  }, [])

  const results = useMemo(() => searchItems(allItems, query), [allItems, query])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    onClose()
    navigate(`/buscar?q=${encodeURIComponent(q)}`)
  }

  function onPick(item: SearchItem) {
    onClose()
    navigate(item.href)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/45 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Buscar"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
          <Search className="h-5 w-5 text-[var(--muted)]" />
          <form onSubmit={onSubmit} className="flex-1">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar en el sitio…"
              className="w-full bg-transparent text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted-2)]"
              aria-label="Buscar"
            />
          </form>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-[var(--text)] hover:bg-[var(--hover)]"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-auto">
          {results.length === 0 ? (
            <div className="px-4 py-8 text-sm text-[var(--muted)]">
              Escribe para buscar páginas y artículos.
            </div>
          ) : (
            <div className="divide-y divide-[var(--border)]">
              {results.map((r) => (
                <button
                  key={r.href}
                  onClick={() => onPick(r)}
                  className="w-full px-4 py-4 text-left transition hover:bg-[var(--hover)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-serif text-sm font-semibold text-[var(--text)]">
                        {r.title}
                      </div>
                      <div className="mt-1 text-sm text-[var(--muted)]">{r.description}</div>
                    </div>
                    <div className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">
                      {r.type === 'page' ? 'Página' : 'Blog'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

