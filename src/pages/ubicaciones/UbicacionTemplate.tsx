import { Link } from 'react-router-dom'
import Seo from '@/components/seo/Seo'
import Button from '@/components/ui/Button'
import { type LocationProvince } from '@/content/ubicaciones'

export default function UbicacionTemplate({ province }: { province: LocationProvince }) {
  return (
    <div className="space-y-8">
      <Seo
        title={`Ubicaciones: ${province.name}`}
        description={`${province.headline}. ${province.subtitle}`}
        keywords={province.keywords}
        canonicalPath={`/ubicaciones/${province.slug}`}
        ogImagePath="/media/images/akriska-logo.jpg"
      />

      <section className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]">
        <div className="relative">
          <div className="relative aspect-[16/9] bg-[var(--bg)]">
            <img
              src={province.bannerImagePath}
              alt={`Akriska String Quartet en ${province.name}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10" />
          </div>

          <div className="absolute left-4 top-4">
            <Link
              to="/ubicaciones"
              className="inline-flex items-center rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white backdrop-blur transition hover:bg-black/40"
            >
              ← Volver
            </Link>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
            <div className="text-xs text-white/80">Inicio / Ubicaciones / {province.name}</div>
            <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {province.headline}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              {province.subtitle}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link to="/contacto" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">{`Solicitar cotización en ${province.name}`}</Button>
              </Link>
              <Link to="/portafolio" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Ver portafolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-7">
          <div className="font-serif text-2xl font-semibold">
            Servicios de música para eventos en {province.name}
          </div>
          <div className="mt-3 space-y-4 text-sm leading-6 text-[var(--muted)] md:text-base">
            <p>{province.intro}</p>
            <p>
              Trabajamos con una propuesta musical clara: ceremonia, cóctel, recepción y ambientación. Si ya tienes
              canciones en mente, las incorporamos; si no, te compartimos sugerencias que funcionan muy bien con cuerdas.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-4">
            <div className="text-sm font-semibold text-[var(--text)]">Cobertura en {province.name}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {province.cantons.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-4">
              <div className="text-sm font-semibold text-[var(--text)]">Ideal para</div>
              <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                <li>Bodas y ceremonias</li>
                <li>Eventos corporativos</li>
                <li>Cócteles y recepciones</li>
                <li>Celebraciones privadas</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-4">
              <div className="text-sm font-semibold text-[var(--text)]">Repertorio</div>
              <div className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Clásicos, bandas sonoras y arreglos modernos. Seleccionamos piezas según el estilo del evento y la
                duración.
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6">
            <div className="font-serif text-xl font-semibold">{`¿Por qué elegirnos en ${province.name}?`}</div>
            <ul className="mt-3 space-y-3 text-sm text-[var(--muted)]">
              {province.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-solid)] text-xs text-[var(--text)]">
                    ✓
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[var(--accent)]/20 bg-[var(--accent-soft)] p-5 md:p-6">
            <div className="font-serif text-xl font-semibold text-[var(--text)]">
              ¿Necesitas una recomendación rápida?
            </div>
            <div className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Envíanos la fecha, el venue y el estilo musical. Respondemos con una propuesta clara y opciones de
              repertorio.
            </div>
            <div className="mt-4">
              <Link to="/contacto">
                <Button>Contactar</Button>
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

