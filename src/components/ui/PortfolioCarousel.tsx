import { useEffect, useRef, useState } from 'react'
import type { PortfolioItem } from '@/content/portfolioItems'
import MediaTile from '@/components/ui/MediaTile'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function PortfolioCarousel({ items }: { items: PortfolioItem[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const update = () => {
      const node = scrollerRef.current
      if (!node) return
      const left = node.scrollLeft
      const maxLeft = node.scrollWidth - node.clientWidth
      setCanPrev(left > 8)
      setCanNext(left < maxLeft - 8)
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollByAmount = (direction: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * Math.round(el.clientWidth * 0.9), behavior: 'smooth' })
  }

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-1 sm:px-2"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[82%] shrink-0 snap-start sm:w-[60%] md:w-[360px] lg:w-[340px] xl:w-[360px]"
          >
            <MediaTile
              title={item.title}
              subtitle={item.description}
              posterPath={item.posterPath}
              videoUrl={item.videoUrl}
              youtubeUrl={item.youtubeUrl}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center lg:flex">
        <div className="h-full w-14 bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          disabled={!canPrev}
          className="pointer-events-auto ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-sm transition hover:bg-[var(--surface-solid)] disabled:opacity-40"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center justify-end lg:flex">
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          disabled={!canNext}
          className="pointer-events-auto mr-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-sm transition hover:bg-[var(--surface-solid)] disabled:opacity-40"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="h-full w-14 bg-gradient-to-l from-[var(--bg)] to-transparent" />
      </div>
    </div>
  )
}
