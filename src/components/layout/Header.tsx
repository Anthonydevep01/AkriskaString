import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, X, ChevronDown, Sun, Moon } from 'lucide-react'
import FacebookLogo from '@/components/icons/FacebookLogo'
import InstagramLogo from '@/components/icons/InstagramLogo'
import YouTubeLogo from '@/components/icons/YouTubeLogo'
import { useTheme } from '@/components/theme/themeContext'

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61568684376921&sk'
const INSTAGRAM_URL = 'https://www.instagram.com/akriska_string/'
const YOUTUBE_URL = 'https://www.youtube.com/@AkrishkaString'

const blogCategories = [
  { label: 'Noticias', href: '/blog/noticias' },
  { label: 'Tutoriales de canciones', href: '/blog/tutoriales-de-canciones' },
]

function NavItem({
  to,
  children,
  onClick,
}: {
  to: string
  children: ReactNode
  onClick?: () => void
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          'rounded-xl px-3 py-2 text-sm transition',
          isActive
            ? 'bg-[var(--hover)] text-[var(--text)]'
            : 'text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--text)]',
        ].join(' ')
      }
    >
      {children}
    </NavLink>
  )
}

export default function Header({ onOpenSearch }: { onOpenSearch: () => void }) {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
    setBlogOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--backdrop)] backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface-solid)]">
              <img
                src="/media/images/akriska-logo.jpg"
                alt="Akriska String Quartet"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-sm font-semibold">Akriska</div>
              <div className="text-xs text-[var(--muted)]">String Quartet</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación">
            <NavItem to="/">Inicio</NavItem>
            <NavItem to="/acerca-de">Acerca de</NavItem>
            <NavItem to="/vision-mision">Visión y misión</NavItem>
            <NavItem to="/ubicaciones">Ubicaciones</NavItem>
            <NavItem to="/portafolio">Portafolio</NavItem>
            <NavItem to="/testimonios">Testimonios</NavItem>

            <div className="relative">
              <button
                onClick={() => setBlogOpen((v) => !v)}
                className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--hover)] hover:text-[var(--text)]"
                aria-haspopup="menu"
                aria-expanded={blogOpen}
              >
                Blog
                <ChevronDown className="h-4 w-4" />
              </button>
              {blogOpen ? (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-64 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-solid)] shadow-[var(--shadow-soft)]"
                >
                  <div className="p-2">
                    <Link
                      to="/blog"
                      className="block rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--hover)]"
                      role="menuitem"
                    >
                      Ver todo
                    </Link>
                    {blogCategories.map((c) => (
                      <Link
                        key={c.href}
                        to={c.href}
                        className="block rounded-xl px-3 py-2 text-sm text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--text)]"
                        role="menuitem"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <NavItem to="/contacto">Contacto</NavItem>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-solid)]"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={toggleTheme}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-solid)]"
              aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
              title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <div className="hidden items-center gap-2 md:flex">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-solid)]"
                aria-label="Facebook"
              >
                <FacebookLogo className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-solid)]"
                aria-label="Instagram"
              >
                <InstagramLogo className="h-5 w-5" />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-solid)]"
                aria-label="YouTube"
              >
                <YouTubeLogo className="h-5 w-5" />
              </a>
            </div>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-solid)] md:hidden"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-2">
              <Link className="rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--hover)]" to="/">
                Inicio
              </Link>
              <Link
                className="rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--hover)]"
                to="/acerca-de"
              >
                Acerca de
              </Link>
              <Link
                className="rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--hover)]"
                to="/vision-mision"
              >
                Visión y misión
              </Link>
              <Link
                className="rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--hover)]"
                to="/portafolio"
              >
                Portafolio
              </Link>
              <Link
                className="rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--hover)]"
                to="/ubicaciones"
              >
                Ubicaciones
              </Link>
              <Link
                className="rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--hover)]"
                to="/testimonios"
              >
                Testimonios
              </Link>

              <button
                onClick={toggleTheme}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-[var(--text)] hover:bg-[var(--hover)]"
              >
                <span>{theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}</span>
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <button
                onClick={() => setBlogOpen((v) => !v)}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-[var(--text)] hover:bg-[var(--hover)]"
              >
                <span>Blog</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {blogOpen ? (
                <div className="grid gap-1 pl-2">
                  <Link
                    className="rounded-xl px-3 py-2 text-sm text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--text)]"
                    to="/blog"
                  >
                    Ver todo
                  </Link>
                  {blogCategories.map((c) => (
                    <Link
                      key={c.href}
                      className="rounded-xl px-3 py-2 text-sm text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--text)]"
                      to={c.href}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : null}

              <Link
                className="rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--hover)]"
                to="/contacto"
              >
                Contacto
              </Link>

              <div className="mt-2 flex items-center gap-2">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-2 text-sm text-[var(--text)]"
                >
                  <FacebookLogo className="h-5 w-5" />
                  Facebook
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-2 text-sm text-[var(--text)]"
                >
                  <InstagramLogo className="h-5 w-5" />
                  Instagram
                </a>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-solid)] px-3 py-2 text-sm text-[var(--text)]"
                >
                  <YouTubeLogo className="h-5 w-5" />
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

