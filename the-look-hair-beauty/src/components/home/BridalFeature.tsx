import { bridal } from '../../data/salon'
import { Button } from '../ui/Button'
import { Plate } from '../ui/Plate'
import { Reveal } from '../ui/Reveal'

export function BridalFeature() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="container-editorial grid gap-0 lg:grid-cols-2">
        <Reveal className="section-y flex flex-col justify-center lg:pr-16">
          <p className="eyebrow mb-4 text-bronze-light">{bridal.eyebrow}</p>
          <h2 className="text-3xl text-ivory sm:text-4xl lg:text-[2.75rem]">{bridal.title}</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/70 sm:text-lg">{bridal.intro}</p>
          <div className="mt-9">
            <Button to="/bridal" variant="outline-light">
              {bridal.cta}
            </Button>
          </div>
        </Reveal>

        <Reveal className="relative min-h-[22rem] lg:min-h-0">
          <Plate tone="clay" className="absolute inset-0" index={3} caption="Bridal trial, Eurotowers" />
        </Reveal>
      </div>
    </section>
  )
}
