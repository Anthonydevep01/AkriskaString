import { ExternalLink } from 'lucide-react'

const items = [
  {
    title: 'Contratación',
    text: 'Eventos privados, bodas y actividades corporativas en Costa Rica.',
    href: '/contacto',
  },
  {
    title: 'Ubicación',
    text: 'Paraíso, Cartago • Costa Rica',
    href: '/acerca-de',
  },
  {
    title: 'Portafolio',
    text: 'Muestras en vídeo y repertorio para tu evento.',
    href: '/portafolio',
  },
  {
    title: 'Blog',
    text: 'Noticias y tutoriales de canciones.',
    href: '/blog',
  },
]

function BannerCard({
  title,
  text,
  href,
}: {
  title: string
  text: string
  href: string
}) {
  return (
    <a
      href={href}
      className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm backdrop-blur transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-solid)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-serif text-sm font-semibold text-[var(--text)]">
            {title}
          </div>
          <div className="mt-1 text-sm leading-5 text-[var(--muted)]">{text}</div>
        </div>
        <ExternalLink className="mt-0.5 h-4 w-4 text-[var(--accent)] opacity-70 transition group-hover:opacity-100" />
      </div>
    </a>
  )
}

export default function SideBanners() {
  return null
}

export function SideBannerColumn() {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <BannerCard key={item.title} {...item} />
      ))}
    </div>
  )
}

