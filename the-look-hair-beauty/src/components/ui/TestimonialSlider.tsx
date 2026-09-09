import { useState } from 'react'
import type { testimonials as TestimonialData } from '../../data/salon'
import { Reveal } from './Reveal'

type Testimonial = (typeof TestimonialData)[number]

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0)
  const current = items[active]

  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <span className="font-display text-6xl leading-none text-bronze/40 sm:text-7xl">“</span>
      <p className="mt-2 text-xl leading-relaxed text-ink sm:text-2xl lg:text-[1.75rem]">{current.quote}</p>
      <p className="mt-8 text-sm font-medium uppercase tracking-[0.14em] text-ink">{current.name}</p>
      <p className="mt-1 text-sm text-ink/50">{current.context}</p>

      <div className="mt-10 flex items-center justify-center gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? 'w-8 bg-bronze' : 'w-1.5 bg-ink/20 hover:bg-ink/40'
            }`}
          />
        ))}
      </div>
    </Reveal>
  )
}
