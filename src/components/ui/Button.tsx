import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({
  className,
  variant = 'primary',
  ...props
}: Props) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40'
  const styles: Record<NonNullable<Props['variant']>, string> = {
    primary: 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]',
    secondary:
      'border border-[var(--accent)]/40 bg-[var(--surface-solid)] text-[var(--accent)] hover:border-[var(--accent)]/60 hover:bg-[var(--hover)]',
    ghost: 'bg-transparent text-[var(--text)] hover:bg-[var(--hover)]',
  }

  return <button className={cn(base, styles[variant], className)} {...props} />
}

