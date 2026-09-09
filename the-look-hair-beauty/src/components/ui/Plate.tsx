import type { ReactNode } from 'react'

const TONES = {
  ink: 'linear-gradient(155deg, #2a251d 0%, #17140f 55%, #0e0c08 100%)',
  bronze: 'linear-gradient(155deg, #c9a870 0%, #a3763f 55%, #6f4e29 100%)',
  clay: 'linear-gradient(155deg, #b07862 0%, #8a5340 55%, #5e3527 100%)',
  paper: 'linear-gradient(155deg, #f1e9dc 0%, #e4d8c4 55%, #cdbb9a 100%)',
} as const

type PlateProps = {
  tone?: keyof typeof TONES
  index?: number
  caption?: string
  ratio?: string
  className?: string
  children?: ReactNode
  dark?: boolean
}

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")"

export function Plate({ tone = 'ink', index, caption, ratio, className = '', children, dark = true }: PlateProps) {
  return (
    <figure
      className={`group relative isolate overflow-hidden ${ratio ?? ''} ${className}`}
      style={{ background: TONES[tone] }}
    >
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
        aria-hidden
      />
      <div
        className="absolute inset-0 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
        aria-hidden
      >
        <div className="absolute inset-0 opacity-70 mix-blend-soft-light" style={{ backgroundImage: GRAIN }} />
      </div>

      {children}

      {(caption || index !== undefined) && (
        <figcaption
          className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-[0.65rem] uppercase tracking-[0.16em] sm:p-5 ${
            dark ? 'text-ivory/80' : 'text-ink/70'
          }`}
        >
          {index !== undefined && <span className="font-medium">No. {String(index).padStart(2, '0')}</span>}
          {caption && <span className="ml-auto text-right">{caption}</span>}
        </figcaption>
      )}
    </figure>
  )
}
