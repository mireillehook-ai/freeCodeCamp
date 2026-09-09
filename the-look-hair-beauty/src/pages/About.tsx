import { locations, stats } from '../data/salon'
import { PageIntro } from '../components/layout/PageIntro'
import { Plate } from '../components/ui/Plate'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'

const VALUES = [
  {
    title: 'Consultation First',
    description: 'No service begins before a proper conversation — about your hair, your day-to-day, and what you actually want to walk out with.',
  },
  {
    title: 'Trained, Not Just Skilled',
    description: 'Our stylists and colourists train continuously, on-site and abroad, so technique keeps pace with what we ask of it.',
  },
  {
    title: 'Three Salons, One Standard',
    description: 'Eurotowers, South District, World Trade Centre — different atmospheres, the same care in every chair.',
  },
]

export function About() {
  return (
    <>
      <PageIntro
        eyebrow="About The Look"
        title="Two decades on the Rock, one standard of craft."
        description="Founded in 2003, The Look has grown from a single salon into Gibraltar’s most established name in hair and beauty."
        tone="bronze"
        plateCaption="Founders, early years"
      />

      <section className="section-y">
        <div className="container-editorial grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">Our Story</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">Built one considered appointment at a time.</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/65 sm:text-lg">
              <p>
                The Look opened its doors in Gibraltar’s business district in 2003, with a simple premise: that a
                unisex salon could hold precision cutting, colour and beauty to the same exacting standard, under
                one roof.
              </p>
              <p>
                Two further salons followed — Top Look in the quieter South District, and Another Look at the
                World Trade Centre — each shaped by its neighbourhood, all three trained and run to the same
                method. Along the way, we became the salon Gibraltar’s brides turn to first, building a bridal
                practice now in its second decade.
              </p>
              <p>
                Today, that same founding premise holds: listen properly, train continuously, and never rush a
                result that a client will wear for months.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <Plate tone="clay" index={2} caption="Colour consultation" ratio="aspect-[4/5]" />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-paper-deep">
        <div className="container-editorial">
          <SectionHeading eyebrow="What Guides Us" title="Three things we don't compromise on." align="center" className="mx-auto" />
          <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="border-t border-paper-line pt-6">
                <p className="font-display text-2xl text-bronze">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 text-xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-editorial">
          <SectionHeading eyebrow="By the Numbers" title="Two decades, and counting." />
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-paper-line pt-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <p className="font-display text-4xl text-bronze sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-ink/50 sm:text-sm">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-ivory">
        <div className="container-editorial">
          <SectionHeading eyebrow="Find Us" title="Our salons." light />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {locations.map((loc, i) => (
              <Reveal key={loc.id} delay={i * 100} className="border border-ivory/12 p-7">
                <p className="font-display text-xl">{loc.name}</p>
                <p className="mt-1 text-sm text-ivory/55">{loc.area}</p>
                <p className="mt-4 text-sm leading-relaxed text-ivory/65">{loc.description}</p>
                <a href={`tel:${loc.phoneHref}`} className="link-underline mt-5 inline-block text-sm">
                  {loc.phoneDisplay}
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Button to="/contact#book" variant="outline-light">
              Book Your Appointment
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
