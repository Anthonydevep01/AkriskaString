import Seo from '@/components/seo/Seo'
import PageHeader from '@/components/ui/PageHeader'

const testimonials = [
  {
    name: 'Cliente (placeholder)',
    event: 'Boda • Cartago',
    text: 'La música fue elegante y perfecta para la ceremonia. La comunicación fue clara y el repertorio se adaptó a lo que queríamos.',
  },
  {
    name: 'Organización (placeholder)',
    event: 'Evento corporativo • San José',
    text: 'Excelente presencia y un sonido balanceado. Aportaron un ambiente profesional y moderno.',
  },
  {
    name: 'Cliente (placeholder)',
    event: 'Evento privado • Heredia',
    text: 'Recomendadas. Puntuales, flexibles y con un repertorio muy bonito.',
  },
]

export default function Testimonios() {
  return (
    <div>
      <Seo
        title="Testimonios"
        description="Testimonios y reseñas de clientes de Akriska String Quartet: música en vivo para bodas y eventos en Costa Rica."
        keywords={[
          'testimonios',
          'reseñas',
          'recomendaciones',
          'cuarteto de cuerda',
          'música para bodas',
          'Costa Rica',
          'Akriska String Quartet',
        ]}
        canonicalPath="/testimonios"
        ogImagePath="/placeholders/og-default.svg"
      />

      <PageHeader
        title="Testimonios"
        subtitle="Opiniones de clientes y experiencias en eventos. Este contenido es placeholder y se reemplazará con testimonios reales."
      />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
          >
            <div className="font-serif text-base font-semibold text-[var(--text)]">
              {t.name}
            </div>
            <div className="mt-1 text-xs text-[var(--accent)]">{t.event}</div>
            <div className="mt-4 text-sm leading-6 text-[var(--muted)]">“{t.text}”</div>
          </div>
        ))}
      </section>
    </div>
  )
}

