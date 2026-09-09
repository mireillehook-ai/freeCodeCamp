import { brand, locations } from '../../data/salon'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function ContactStrip() {
  return (
    <section className="section-y bg-ink text-ivory">
      <div className="container-editorial">
        <Reveal className="max-w-xl">
          <p className="eyebrow mb-4 text-bronze-light">Visit Us</p>
          <h2 className="text-3xl text-ivory sm:text-4xl lg:text-[2.75rem]">Three salons across the Rock.</h2>
          <p className="mt-6 text-base leading-relaxed text-ivory/70 sm:text-lg">
            Call your preferred salon directly, or send an enquiry and we’ll find the right stylist and time for you.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button to="/contact#book" variant="outline-light">
              Book Now
            </Button>
            <a href={`tel:${brand.phoneHref}`} className="btn btn-outline-light">
              {brand.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 border-t border-ivory/10 pt-12 sm:grid-cols-3">
          {locations.map((loc, i) => (
            <Reveal key={loc.id} delay={i * 100}>
              <p className="font-display text-xl text-ivory">{loc.name}</p>
              <p className="mt-1 text-sm text-ivory/55">{loc.area}</p>
              <a href={`tel:${loc.phoneHref}`} className="link-underline mt-3 inline-block text-sm text-ivory/80">
                {loc.phoneDisplay}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
