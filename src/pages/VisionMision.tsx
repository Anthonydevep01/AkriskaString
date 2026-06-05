import Seo from '@/components/seo/Seo'
import PageHeader from '@/components/ui/PageHeader'

export default function VisionMision() {
  return (
    <div>
      <Seo
        title="Visión y misión"
        description="Visión, misión y valores de Akriska String Quartet: música de cámara para eventos en Costa Rica con un enfoque artístico y profesional."
        keywords={[
          'visión',
          'misión',
          'valores',
          'Akriska String Quartet',
          'cuarteto de cuerda',
          'Costa Rica',
          'Cartago',
        ]}
        canonicalPath="/vision-mision"
        ogImagePath="/placeholders/og-default.svg"
      />

      <PageHeader
        title="Visión y misión"
        subtitle="Un marco claro para crecer, colaborar y ofrecer música en vivo con excelencia en Costa Rica."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="font-serif text-xl font-semibold">Misión</div>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Brindar experiencias musicales memorables en eventos públicos y privados, con repertorio cuidadosamente seleccionado y un servicio profesional, cercano y elegante.
          </p>
        </div>
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="font-serif text-xl font-semibold">Visión</div>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Ser un referente joven de música de cámara en Costa Rica, conectando con nuevos públicos y creando proyectos artísticos que representen nuestra identidad.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
        <div className="font-serif text-xl font-semibold">Valores</div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-5">
            <div className="font-serif text-base font-semibold">Calidad</div>
            <div className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Preparación musical, sonido balanceado y atención al detalle.
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-5">
            <div className="font-serif text-base font-semibold">Respeto</div>
            <div className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Comunicación clara, puntualidad y acompañamiento al cliente.
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] p-5">
            <div className="font-serif text-base font-semibold">Creatividad</div>
            <div className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Arreglos modernos, propuestas curadas y flexibilidad según el evento.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

