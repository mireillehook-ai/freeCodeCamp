import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'outline' | 'outline-light'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: Variant
  className?: string
  onClick?: () => void
}

const VARIANT_CLASS: Record<Variant, string> = {
  primary: 'btn btn-primary',
  outline: 'btn btn-outline',
  'outline-light': 'btn btn-outline-light',
}

export function Button({ children, to, href, variant = 'primary', className = '', onClick }: ButtonProps) {
  const classes = `${VARIANT_CLASS[variant]} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
