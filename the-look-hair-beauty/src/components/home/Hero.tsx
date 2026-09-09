import { Plate } from '../ui/Plate'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[38rem] items-end overflow-hidden bg-ink">
      <Plate tone="ink" className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/10" />

      <div className="container-editorial relative z-10 flex w-full flex-col gap-10 pb-16 sm:pb-24">
        <Reveal delay={150}>
          <p className="eyebrow mb-6 text-bronze-light">Gibraltar &middot; Est. 2003</p>
          <h1 className="max-w-4xl font-display text-[2.85rem] leading-[1.02] text-ivory sm:text-7xl lg:text-[6rem]">
            Considered hair.
            <br />
            Considered beauty.
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-ivory/70 sm:text-lg">
            Three salons across the Rock, one standard of craft — precision cutting, colour and Gibraltar’s
            longest-standing bridal hair &amp; makeup team.
          </p>
        </Reveal>

        <Reveal delay={350} className="flex flex-wrap items-center gap-4">
          <Button to="/contact#book">Book Now</Button>
          <Button to="/services" variant="outline-light">
            Explore Services
          </Button>
        </Reveal>
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-3 text-ivory/50 sm:right-10 sm:flex">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-14 w-px bg-gradient-to-b from-ivory/60 to-transparent" />
      </div>
    </section>
  )
}
