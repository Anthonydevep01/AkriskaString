import FacebookLogo from '@/components/icons/FacebookLogo'
import InstagramLogo from '@/components/icons/InstagramLogo'
import YouTubeLogo from '@/components/icons/YouTubeLogo'
import { Link } from 'react-router-dom'

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61568684376921&sk'
const INSTAGRAM_URL = 'https://www.instagram.com/akriska_string/'
const YOUTUBE_URL = 'https://www.youtube.com/@AkrishkaString'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface-solid)]">
                <img
                  src="/media/images/akriska-logo.jpg"
                  alt="Akriska String Quartet"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="font-serif text-lg font-semibold">Akriska String Quartet</div>
            </div>
            <div className="mt-2 text-sm text-[var(--muted)]">
              Paraíso, Cartago • Costa Rica
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] bg-[var(--surface-solid)] p-2 text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--hover)]"
                aria-label="Facebook"
              >
                <FacebookLogo className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] bg-[var(--surface-solid)] p-2 text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--hover)]"
                aria-label="Instagram"
              >
                <InstagramLogo className="h-5 w-5" />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] bg-[var(--surface-solid)] p-2 text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--hover)]"
                aria-label="YouTube"
              >
                <YouTubeLogo className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-[var(--text)]">Secciones</div>
            <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
              <Link className="hover:text-[var(--text)]" to="/acerca-de">
                Acerca de
              </Link>
              <Link className="hover:text-[var(--text)]" to="/vision-mision">
                Visión y misión
              </Link>
              <Link className="hover:text-[var(--text)]" to="/portafolio">
                Portafolio
              </Link>
              <Link className="hover:text-[var(--text)]" to="/testimonios">
                Testimonios
              </Link>
              <Link className="hover:text-[var(--text)]" to="/blog">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-[var(--text)]">Contacto</div>
            <div className="mt-3 text-sm text-[var(--muted)]">
              Para contrataciones y consultas:
              <div className="mt-2">
                <Link className="text-[var(--accent)] hover:underline" to="/contacto">
                  Ir a formulario de contacto
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Akriska String Quartet. Todos los derechos reservados.
          </div>
          <div>
            Sitio administrado profesionalmente por{' '}
            <a
              href="https://linkcraftmedia.com"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              LinkCraftMedia.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

