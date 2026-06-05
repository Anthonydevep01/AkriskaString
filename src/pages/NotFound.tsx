import { Link } from 'react-router-dom'
import Seo from '@/components/seo/Seo'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
      <Seo
        title="Página no encontrada"
        description="La página solicitada no existe."
        keywords={['404', 'Akriska String Quartet']}
        canonicalPath="/404"
        ogImagePath="/placeholders/og-default.svg"
        robots="noindex, nofollow"
      />
      <div className="font-serif text-2xl font-semibold text-[var(--text)]">404</div>
      <div className="mt-2 text-sm text-[var(--muted)]">
        No encontramos esta página. Puedes volver al inicio.
      </div>
      <div className="mt-6">
        <Link to="/">
          <Button>Ir a inicio</Button>
        </Link>
      </div>
    </div>
  )
}

