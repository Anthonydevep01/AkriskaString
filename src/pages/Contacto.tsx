import { useState, type FormEvent } from 'react'
import Seo from '@/components/seo/Seo'
import PageHeader from '@/components/ui/PageHeader'
import Button from '@/components/ui/Button'

type FormState = {
  nombre: string
  email: string
  telefono: string
  fecha: string
  ubicacion: string
  mensaje: string
}

const initial: FormState = {
  nombre: '',
  email: '',
  telefono: '',
  fecha: '',
  ubicacion: '',
  mensaje: '',
}

export default function Contacto() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<'idle' | 'sent'>(
    'idle',
  )

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sent')
    setForm(initial)
  }

  return (
    <div>
      <Seo
        title="Contacto"
        description="Contacto y contratación de Akriska String Quartet en Costa Rica. Solicita cotización para bodas, eventos corporativos y eventos privados."
        keywords={[
          'contacto',
          'contratación',
          'cotización',
          'cuarteto de cuerda',
          'música para bodas',
          'eventos Costa Rica',
          'Cartago',
          'Akriska String Quartet',
        ]}
        canonicalPath="/contacto"
        ogImagePath="/placeholders/og-default.svg"
      />

      <PageHeader
        title="Contacto"
        subtitle="Para contrataciones en Costa Rica: cuéntanos fecha, ubicación y el estilo musical. Responderemos con una propuesta clara."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="font-serif text-xl font-semibold">Formulario</div>
          <form onSubmit={onSubmit} className="mt-5 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="nombre">
                Nombre
              </label>
              <input
                id="nombre"
                value={form.nombre}
                onChange={(e) => update('nombre', e.target.value)}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted-2)] focus:border-[var(--accent)]/40 focus:ring-2 focus:ring-[color:var(--accent)]/20"
                required
              />
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted-2)] focus:border-[var(--accent)]/40 focus:ring-2 focus:ring-[color:var(--accent)]/20"
                  required
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="telefono">
                  Teléfono (opcional)
                </label>
                <input
                  id="telefono"
                  value={form.telefono}
                  onChange={(e) => update('telefono', e.target.value)}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted-2)] focus:border-[var(--accent)]/40 focus:ring-2 focus:ring-[color:var(--accent)]/20"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid min-w-0 gap-2">
                <label className="text-sm font-medium" htmlFor="fecha">
                  Fecha del evento
                </label>
                <input
                  id="fecha"
                  type="date"
                  value={form.fecha}
                  onChange={(e) => update('fecha', e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted-2)] focus:border-[var(--accent)]/40 focus:ring-2 focus:ring-[color:var(--accent)]/20"
                  required
                />
              </div>
              <div className="grid min-w-0 gap-2">
                <label className="text-sm font-medium" htmlFor="ubicacion">
                  Ubicación
                </label>
                <input
                  id="ubicacion"
                  value={form.ubicacion}
                  onChange={(e) => update('ubicacion', e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted-2)] focus:border-[var(--accent)]/40 focus:ring-2 focus:ring-[color:var(--accent)]/20"
                  required
                  placeholder="Ej. Cartago, San José, Heredia…"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                value={form.mensaje}
                onChange={(e) => update('mensaje', e.target.value)}
                className="w-full min-h-[120px] rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted-2)] focus:border-[var(--accent)]/40 focus:ring-2 focus:ring-[color:var(--accent)]/20"
                required
                placeholder="Cuéntanos tipo de evento, duración, repertorio deseado y cualquier detalle importante."
              />
            </div>

            <div className="flex items-center gap-3">
              <Button type="submit">Enviar solicitud</Button>
              {status === 'sent' ? (
                <div className="text-sm text-[var(--muted)]">
                  ¡Gracias! Tu solicitud se guardó como placeholder.
                </div>
              ) : null}
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="font-serif text-xl font-semibold">Información</div>
            <div className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Akriska String Quartet
              <div>Paraíso, Cartago • Costa Rica</div>
            </div>
            <div className="mt-4 text-sm">
              Redes sociales:
              <div className="mt-2 grid gap-2 text-[var(--accent)]">
                <a
                  className="hover:underline"
                  href="https://www.facebook.com/profile.php?id=61568684376921&sk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  className="hover:underline"
                  href="https://www.instagram.com/akriska_string/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div className="font-serif text-xl font-semibold">Requisitos (placeholder)</div>
            <div className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Este bloque se reemplazará con un rider técnico y necesidades específicas (espacio, sillas, tiempo de montaje, etc.).
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

