type Props = {
  className?: string
  title?: string
}

export default function FacebookLogo({ className, title = 'Facebook' }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      role="img"
      aria-label={title}
      fill="currentColor"
    >
      <path d="M13.5 22v-8.3h2.8l.4-3.2h-3.2V8.4c0-.9.3-1.6 1.7-1.6h1.7V4c-.3 0-1.5-.1-2.8-.1-2.8 0-4.8 1.7-4.8 4.9v1.7H7v3.2h2.3V22h4.2Z" />
    </svg>
  )
}

