import { Link } from 'react-router-dom'
import Seo from '@/components/seo/Seo'
import PageHeader from '@/components/ui/PageHeader'
import { imageUrl, provinces } from '@/content/ubicaciones'

export default function Ubicaciones() {
  return (
    <div className="space-y-8">
      <Seo
        title="Ubicaciones"
        description="Cobertura por provincias en Costa Rica. Conoce dónde ofrecemos música en vivo con cuarteto de cuerda para bodas y eventos."
        keywords={[
          'ubicaciones',
          'provincias Costa Rica',
          'música en vivo Costa Rica',
          'cuarteto de cuerda Costa Rica',
          'música para bodas Costa Rica',
          'eventos corporativos Costa Rica',
          'San José',
          'Alajuela',
          'Cartago',
          'Heredia',
          'Guanacaste',
          'Puntarenas',
          'Limón',
          'Akriska String Quartet',
        ]}
        canonicalPath="/ubicaciones"
        ogImagePath="/media/images/akriska-logo.jpg"
      />

      <PageHeader
        title="Cobertura Nacional"
        subtitle="Selecciona tu provincia para ver información local, keywords específicas y cómo contratar el servicio de música en vivo."
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {provinces.map((p) => {
          const cardSrc = imageUrl(p.cardPrompt, 'landscape_4_3')
          return (
            <Link
              key={p.slug}
              to={`/ubicaciones/${p.slug}`}
              className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--surface-solid)]"
            >
              <div className="relative aspect-[4/3] bg-[var(--bg)]">
                <img
                  src={cardSrc}
                  alt={`Cuarteto de cuerda en ${p.name}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-serif text-2xl font-semibold text-white">{p.name}</div>
                  <div className="mt-1 text-sm text-white/85">{p.subtitle}</div>
                </div>
              </div>

              <div className="p-5">
                <div className="text-sm leading-6 text-[var(--muted)]">{p.intro}</div>
                <div className="mt-4 text-sm font-semibold text-[var(--accent)] group-hover:underline">
                  Ver cobertura →
                </div>
              </div>
            </Link>
          )
        })}
      </section>
    </div>
  )
}

