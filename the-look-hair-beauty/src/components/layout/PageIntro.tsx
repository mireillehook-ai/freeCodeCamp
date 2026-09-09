import type { ReactNode } from 'react'
import { Plate } from '../ui/Plate'
import { Reveal } from '../ui/Reveal'

type PageIntroProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  tone?: 'ink' | 'bronze' | 'clay' | 'paper'
  plateCaption?: string
}

export function PageIntro({ eyebrow, title, description, tone = 'ink', plateCaption }: PageIntroProps) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-28 sm:min-h-[68vh]">
      <Plate tone={tone} className="absolute inset-0" caption={plateCaption} index={undefined} />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      <div className="container-editorial relative z-10 pb-16 sm:pb-20">
        <Reveal>
          <p className="eyebrow mb-4 text-bronze-light">{eyebrow}</p>
          <h1 className="max-w-3xl text-4xl text-ivory sm:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">{description}</p>}
        </Reveal>
      </div>
    </section>
  )
}
