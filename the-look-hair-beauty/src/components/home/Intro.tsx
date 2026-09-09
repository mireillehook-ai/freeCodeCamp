import { stats } from '../../data/salon'
import { Button } from '../ui/Button'
import { Plate } from '../ui/Plate'
import { Reveal } from '../ui/Reveal'

export function Intro() {
  return (
    <section className="section-y">
      <div className="container-editorial grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Plate tone="paper" index={1} caption="Eurotowers, salon floor" ratio="aspect-[4/5]" dark={false} />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-4">Since 2003</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">
              Gibraltar’s salon of record for hair &amp; beauty.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/65 sm:text-lg">
              What began as a single salon in the business district has grown, over two decades, into three
              addresses across the Rock — each holding to the same standard of consultation-led cutting, colour
              and finishing. We work in natural light, we listen before we cut, and we take the time a good result
              actually requires.
            </p>
            <div className="mt-9">
              <Button to="/about" variant="outline">
                Our Story
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-14 grid grid-cols-3 gap-6 border-t border-paper-line pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-bronze sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink/50">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
