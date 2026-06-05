import { useEffect, useRef, useState } from 'react'
import { Play, X } from 'lucide-react'

function normalizeMediaUrl(url: string) {
  try {
    return encodeURI(decodeURI(url))
  } catch {
    return encodeURI(url)
  }
}

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url)
    const host = parsed.hostname.replace(/^www\./, '')
    if (host === 'youtu.be') {
      const id = parsed.pathname.replace('/', '').trim()
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : undefined
    }
    if (host.endsWith('youtube.com')) {
      const shortsMatch = parsed.pathname.match(/^\/shorts\/([^/]+)/)
      if (shortsMatch?.[1]) return `https://www.youtube-nocookie.com/embed/${shortsMatch[1]}`
      const embedMatch = parsed.pathname.match(/^\/embed\/([^/]+)/)
      if (embedMatch?.[1]) return `https://www.youtube-nocookie.com/embed/${embedMatch[1]}`
      const id = parsed.searchParams.get('v')
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : undefined
    }
    return undefined
  } catch {
    return undefined
  }
}

export default function MediaTile({
  title,
  subtitle,
  posterPath,
  videoUrl,
  youtubeUrl,
}: {
  title: string
  subtitle: string
  posterPath: string
  videoUrl?: string
  youtubeUrl?: string
}) {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const videoSrc = videoUrl ? normalizeMediaUrl(videoUrl) : undefined
  const youtubeEmbed = youtubeUrl ? getYouTubeEmbedUrl(youtubeUrl) : undefined
  const playable = Boolean(videoSrc || youtubeEmbed)
  const thumbVideoRef = useRef<HTMLVideoElement | null>(null)
  const modalVideoRef = useRef<HTMLVideoElement | null>(null)
  const [thumbReady, setThumbReady] = useState(false)
  const showToggle = subtitle.trim().length > 160

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (!videoSrc) return
    setThumbReady(false)
  }, [videoSrc])

  useEffect(() => {
    if (!open || !videoSrc || youtubeEmbed) return
    const node = modalVideoRef.current
    if (!node) return

    const raf = window.requestAnimationFrame(() => {
      try {
        node.currentTime = 0
      } catch {
        void 0
      }
      const maybePromise = node.play()
      if (maybePromise && typeof (maybePromise as Promise<void>).catch === 'function') {
        ;(maybePromise as Promise<void>).catch(() => {})
      }
    })

    return () => {
      window.cancelAnimationFrame(raf)
      try {
        node.pause()
        node.currentTime = 0
      } catch {
        void 0
      }
    }
  }, [open, videoSrc, youtubeEmbed])

  return (
    <>
      <div className="w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-left shadow-sm">
        <button
          type="button"
          onClick={() => playable && setOpen(true)}
          disabled={!playable}
          className="block w-full text-left disabled:cursor-default"
          aria-label={playable ? `Reproducir ${title}` : `${title} (Próximamente)`}
        >
          <div className="relative aspect-video w-full bg-[var(--bg)]">
            {videoSrc && !youtubeEmbed ? (
              <video
                ref={thumbVideoRef}
                className={[
                  'absolute inset-0 h-full w-full object-cover',
                  'transition-opacity duration-300',
                  thumbReady ? 'opacity-100' : 'opacity-0',
                ].join(' ')}
                muted
                playsInline
                preload="metadata"
                src={`${videoSrc}#t=0.05`}
                aria-hidden="true"
                tabIndex={-1}
                onLoadedData={() => setThumbReady(true)}
              />
            ) : null}
            <img
              src={posterPath}
              alt={title}
              className={[
                'h-full w-full object-cover',
                'transition-opacity duration-300',
                videoSrc && thumbReady ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white backdrop-blur">
              <Play className="h-3.5 w-3.5" />
              {playable ? 'Reproducir' : 'Próximamente'}
            </div>
          </div>
        </button>

        <div className="p-4">
          <div className="font-serif text-base font-semibold text-[var(--text)]">
            {title}
          </div>
          <div
            className={[
              'mt-1 text-sm leading-5 text-[var(--muted)]',
              expanded ? '' : 'overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]',
            ].join(' ')}
          >
            {subtitle}
          </div>
          {showToggle ? (
            <span
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setExpanded((v) => !v)
              }}
              onKeyDown={(e) => {
                if (e.key !== 'Enter' && e.key !== ' ') return
                e.preventDefault()
                e.stopPropagation()
                setExpanded((v) => !v)
              }}
              className="mt-2 inline-flex cursor-pointer select-none text-sm text-[var(--accent)] hover:underline"
            >
              {expanded ? 'Ver menos' : 'Leer más'}
            </span>
          ) : null}
        </div>
      </div>

      {open && playable ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Reproducir ${title}`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <div className="min-w-0 font-serif text-base font-semibold text-white">
                {title}
              </div>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="bg-black">
              {youtubeEmbed ? (
                <iframe
                  className="aspect-video w-full"
                  src={`${youtubeEmbed}?autoplay=1&rel=0`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : videoSrc ? (
                <video
                  ref={modalVideoRef}
                  className="h-auto w-full"
                  controls
                  autoPlay
                  preload="auto"
                  playsInline
                  src={videoSrc}
                />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

