import { useState } from 'react'
import Seo from '@/components/seo/Seo'
import PageHeader from '@/components/ui/PageHeader'

const musicians = [
  {
    name: 'Kamila Al Jamal Chaves',
    instrument: 'Violín I',
    bio: 'Violinista desde hace 12 años, la música y el arte forman parte de mi vida. Además de tocar, también aprecio distintas formas de expresión artística. Participo en proyectos musicales y artísticos porque creo que el arte es una manera de conectar con las personas, transmitir emociones y crear un impacto positivo en la comunidad.',
    image: '/media/images/Akriska%20String%20Kamila%20Al%20Jamal%20Chaves.jpg',
  },
  {
    name: 'Nicole Pacheco',
    instrument: 'Violín II',
    bio: 'Violinista desde los 5 años. Desde muy pequeña siempre ha tenido un gran gusto por la música contemporánea y su interpretación. Asimismo, le gusta transmitir mensajes y expresarse por medio de su instrumento en cada pieza que interpreta.',
    image: '/media/images/Akriska%20String%20Nicole%20Pacheco.jpg',
  },
  {
    name: 'Cristel Brenes',
    instrument: 'Violín III',
    bio: 'Violinista desde los 5 años de edad. Desde pequeña encontró en el violín una forma de expresarse y desarrollar su pasión por la música a través de la práctica y la disciplina. Junto a sus compañeras continúa creciendo y compartiendo su amor por el arte.',
    image: '/media/images/Akriska%20String%20Cristel%20Brenes.jpeg',
  },
  {
    name: 'Angela Duarte',
    instrument: 'Viola',
    bio: 'Violista del cuarteto, estudia viola desde hace 12 años. También es cantante lírica y colabora con su voz en el cuarteto. Le apasiona hacer música junto a sus compañeras y poder expresarse a través de su voz y su instrumento.',
    image: '/media/images/Akriska%20String%20Angela%20Duarte%20Cortes.jpg',
  },
  {
    name: 'Avril Hidalgo',
    instrument: 'Violoncello',
    bio: 'Violoncellista desde los 11 años de edad; la primera vez que escuché el violoncello supe que sería uno de mis grandes sueños, y hasta la actualidad lo es. Y aún estoy en el inicio de algo mucho más grande.',
    image: '/media/images/Akriska%20String%20Avril%20Hidalgo%20Alvarado.jpg',
  },
]

export default function AcercaDe() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  return (
    <div>
      <Seo
        title="Acerca de"
        description="Conoce a Akriska String Quartet: cuarteto de cuerda en Paraíso, Cartago. Integrantes, historia y repertorio para eventos en Costa Rica."
        keywords={[
          'Akriska String Quartet',
          'acerca de',
          'cuarteto de cuerda',
          'música de cámara',
          'Cartago',
          'Costa Rica',
          'eventos',
        ]}
        canonicalPath="/acerca-de"
        ogImagePath="/placeholders/og-default.svg"
      />

      <PageHeader
        title="Acerca de"
        subtitle="Somos un cuarteto de cuerda con base en Paraíso, Cartago. Nuestro objetivo es brindar música en vivo con un estilo elegante, moderno y profesional para eventos en Costa Rica."
      />

      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <div className="font-serif text-xl font-semibold">Nuestra historia</div>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Este texto es un placeholder. Aquí puedes contar el origen del proyecto, el estilo del cuarteto y los tipos de eventos en los que se especializa.
            </p>
          </div>
          <div>
            <div className="font-serif text-xl font-semibold">Estilo</div>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Combinamos repertorio clásico con arreglos contemporáneos y música de películas, cuidando la dinámica, el balance y la experiencia del público.
            </p>
          </div>
          <div>
            <div className="font-serif text-xl font-semibold">Para tu evento</div>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Podemos recomendar repertorio según el momento (ceremonia, cóctel, recepción) y adaptar duración, volumen y carácter musical.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="font-serif text-2xl font-semibold">Integrantes</div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {musicians.map((m) => (
            (() => {
              const isExpanded = expanded[m.instrument] ?? false
              return (
            <div
              key={m.instrument}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm"
            >
              <div className="aspect-[4/5] bg-[var(--bg)] p-3 lg:aspect-square">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="font-serif text-base font-semibold text-[var(--text)]">
                  {m.name}
                </div>
                <div className="mt-1 text-xs text-[var(--accent)]">{m.instrument}</div>
                <div
                  className={[
                    'mt-3 text-sm leading-6 text-[var(--text)]',
                    'lg:text-[13px] lg:leading-5',
                    isExpanded
                      ? ''
                      : 'lg:overflow-hidden lg:[display:-webkit-box] lg:[-webkit-box-orient:vertical] lg:[-webkit-line-clamp:4]',
                  ].join(' ')}
                >
                  {m.bio}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setExpanded((prev) => ({ ...prev, [m.instrument]: !isExpanded }))
                  }
                  className="mt-3 hidden text-sm text-[var(--accent)] hover:underline lg:inline-flex"
                >
                  {isExpanded ? 'Ver menos' : 'Leer más'}
                </button>
              </div>
            </div>
              )
            })()
          ))}
        </div>
      </section>
    </div>
  )
}

