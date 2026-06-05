import { Link } from 'react-router-dom'
import Seo from '@/components/seo/Seo'
import Button from '@/components/ui/Button'
import PortfolioCarousel from '@/components/ui/PortfolioCarousel'
import { blogCategoryLabels, blogPosts } from '@/content/blogPosts'
import { portfolioItems } from '@/content/portfolioItems'

export default function Home() {
  const featuredPosts = [...blogPosts]
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .slice(0, 2)

  return (
    <div className="space-y-12">
      <Seo
        title="Inicio"
        description="Akriska String Quartet: cuarteto de cuerda en Costa Rica. Música en vivo para eventos públicos y privados en Paraíso, Cartago."
        keywords={[
          'Akriska String Quartet',
          'cuarteto de cuerda',
          'música en vivo',
          'eventos privados',
          'bodas Costa Rica',
          'Cartago',
          'Paraíso',
          'Costa Rica',
        ]}
        canonicalPath="/"
        ogImagePath="/placeholders/og-default.svg"
      />

      <section className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative aspect-[16/10] bg-[var(--bg)] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[320px]">
            <img
              src="/media/images/Akriska%20String%20img01.jpg"
              alt="Akriska String Quartet"
              className="absolute inset-0 h-full w-full object-cover object-center lg:object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </div>

          <div className="p-6 md:p-10">
            <div className="inline-flex items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-xs text-[var(--accent)]">
              Paraíso, Cartago • Costa Rica
            </div>
            <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Música de cámara para momentos inolvidables
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--muted)] md:text-base">
              Akriska String Quartet ofrece un servicio profesional para eventos públicos y privados.
              Repertorio clásico y contemporáneo, con una experiencia elegante y cercana.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/portafolio">
                <Button className="w-full sm:w-auto">Ver portafolio</Button>
              </Link>
              <Link to="/contacto">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Solicitar cotización
                </Button>
              </Link>
            </div>
            <div className="mt-6 text-xs text-[var(--muted)]">
              Contenido del sitio en español • Diseño mobile-first
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="font-serif text-lg font-semibold">Servicios</div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            <li>Bodas y ceremonias</li>
            <li>Eventos corporativos</li>
            <li>Actividades culturales</li>
            <li>Eventos privados</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="font-serif text-lg font-semibold">Repertorio</div>
          <div className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Clásicos, bandas sonoras y arreglos modernos. Adaptamos el set según el evento, el espacio y la duración.
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="font-serif text-lg font-semibold">Experiencia</div>
          <div className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Montaje sencillo, comunicación clara y un enfoque elegante para que tu evento fluya sin complicaciones.
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="font-serif text-2xl font-semibold">Portafolio</div>
            <div className="mt-2 text-sm text-[var(--muted)]">
              Desliza para ver todas las canciones y abrir cada video.
            </div>
          </div>
          <Link to="/portafolio" className="text-sm text-[var(--accent)] hover:underline">
            Ver todo
          </Link>
        </div>
        <div className="mt-5">
          <PortfolioCarousel items={portfolioItems} />
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="font-serif text-2xl font-semibold">Blog</div>
            <div className="mt-2 text-sm text-[var(--muted)]">
              Noticias y tutoriales de canciones.
            </div>
          </div>
          <Link to="/blog" className="text-sm text-[var(--accent)] hover:underline">
            Ver blog
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {featuredPosts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.category}/${p.slug}`}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:bg-[var(--surface-solid)]"
            >
              <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-1 text-xs text-[var(--muted)]">
                {blogCategoryLabels[p.category]}
              </div>
              <div className="mt-3 font-serif text-lg font-semibold text-[var(--text)] group-hover:underline">
                {p.title}
              </div>
              <div className="mt-2 text-sm leading-6 text-[var(--muted)]">{p.excerpt}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--accent)]/20 bg-[var(--accent-soft)] p-6 md:p-8">
        <div className="font-serif text-2xl font-semibold text-[var(--text)]">
          ¿Quieres música en vivo para tu evento?
        </div>
        <div className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
          Cuéntanos fecha, ubicación y estilo musical. Te responderemos con opciones de repertorio y una propuesta clara.
        </div>
        <div className="mt-5">
          <Link to="/contacto">
            <Button>Contactar</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
