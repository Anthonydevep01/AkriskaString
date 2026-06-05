import Seo from '@/components/seo/Seo'
import PageHeader from '@/components/ui/PageHeader'
import MediaTile from '@/components/ui/MediaTile'
import { portfolioItems } from '@/content/portfolioItems'

export default function Portafolio() {
  return (
    <div>
      <Seo
        title="Portafolio"
        description="Portafolio de Akriska String Quartet: vídeos e imágenes (placeholders) para mostrar presentaciones en vivo y repertorio para eventos en Costa Rica."
        keywords={[
          'portafolio',
          'videos cuarteto',
          'música en vivo',
          'bodas',
          'eventos corporativos',
          'Cartago',
          'Costa Rica',
          'Akriska String Quartet',
        ]}
        canonicalPath="/portafolio"
        ogImagePath="/placeholders/og-default.svg"
      />

      <PageHeader
        title="Portafolio"
        subtitle="Muestras en vídeo para que puedas imaginar el ambiente en tu evento. Toca la imagen destacada para reproducir."
      />

      <section className="mb-6 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 md:p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-serif text-xl font-semibold">YouTube</div>
            <div className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Mira más presentaciones y repertorio en el canal oficial de Akrishka String.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface-solid)]">
              <img
                src="/media/images/Akriska%20String%20logo.jpg"
                alt="Akriska String Quartet"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <a
              href="https://www.youtube.com/@AkrishkaString"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] px-4 py-2 text-sm text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--hover)]"
            >
              Ver canal
            </a>
          </div>
        </div>

        <div className="mx-auto mt-3 w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--border)] bg-black">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube-nocookie.com/embed/aAJaN9WnJoU?rel=0"
            title="Akrishka String en YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.map((item) => (
          <MediaTile
            key={item.id}
            title={item.title}
            subtitle={item.description}
            posterPath={item.posterPath}
            videoUrl={item.videoUrl}
            youtubeUrl={item.youtubeUrl}
          />
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
        <div className="font-serif text-xl font-semibold">Cómo agregar media</div>
        <div className="mt-3 grid gap-4 text-sm leading-6 text-[var(--muted)] md:grid-cols-2">
          <div>
            <div className="font-semibold text-[var(--text)]">Imágenes</div>
            <div className="mt-1">
              Coloca imágenes en <span className="font-mono">/public/media/images</span> y usa rutas como{' '}
              <span className="font-mono">/media/images/mi-foto.jpg</span>.
            </div>
          </div>
          <div>
            <div className="font-semibold text-[var(--text)]">Videos</div>
            <div className="mt-1">
              Si son archivos locales, colócalos en <span className="font-mono">/public/media/videos</span> y usa{' '}
              <span className="font-mono">/media/videos/mi-video.mp4</span>. También puedes usar enlaces embebidos (YouTube/Vimeo).
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm leading-6 text-[var(--muted)]">
          Mientras el contenido real no esté disponible, el sitio usa placeholders ubicados en{' '}
          <span className="font-mono">/public/placeholders</span>.
        </div>
      </section>
    </div>
  )
}

