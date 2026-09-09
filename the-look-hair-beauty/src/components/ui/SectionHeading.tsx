import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className={`text-3xl sm:text-4xl lg:text-[2.75rem] ${light ? 'text-ivory' : 'text-ink'}`}>{title}</h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${light ? 'text-ivory/70' : 'text-ink/65'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
