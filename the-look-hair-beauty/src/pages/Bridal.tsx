import { bridal } from '../data/salon'
import { PageIntro } from '../components/layout/PageIntro'
import { Button } from '../components/ui/Button'
import { Plate } from '../components/ui/Plate'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const PROCESS = [
  { step: '01', title: 'Enquire', description: 'Tell us your date, venue and vision — we’ll check availability across the team.' },
  { step: '02', title: 'Trial', description: 'A full hair and makeup trial, photographed, well ahead of the wedding.' },
  { step: '03', title: 'Confirm', description: 'We lock in timings for you, your party and family, worked back from your ceremony time.' },
  { step: '04', title: 'The Day', description: 'Early doors at Eurotowers, or on-location — styled, calm, and exactly as trialled.' },
]

export function Bridal() {
  return (
    <>
      <PageIntro
        eyebrow={bridal.eyebrow}
        title="Gibraltar's premier bridal hair & makeup team."
        description={bridal.intro}
        tone="clay"
        plateCaption="Bridal trial, Eurotowers"
      />

      <section className="section-y">
        <div className="container-editorial">
          <SectionHeading eyebrow="Why Brides Choose Us" title="Two decades of wedding mornings." />
          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {bridal.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="border-t border-paper-line pt-6">
                <h3 className="font-display text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 sm:text-base">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper-deep">
        <div className="container-editorial grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <Plate tone="ink" index={7} caption="Wedding morning" ratio="aspect-[4/5]" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="The Process" title="How a Look Brides booking works." />
            <div className="mt-10 space-y-8">
              {PROCESS.map((step) => (
                <Reveal key={step.step} className="flex gap-6">
                  <span className="font-display text-2xl text-bronze">{step.step}</span>
                  <div>
                    <h3 className="text-lg">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-editorial">
          <SectionHeading eyebrow="Recent Weddings" title="From trial to 'I do'." />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {[
              { tone: 'clay' as const, caption: 'Bridal up-style' },
              { tone: 'ink' as const, caption: 'Getting ready, Eurotowers' },
              { tone: 'bronze' as const, caption: 'Bridesmaids, styled' },
              { tone: 'paper' as const, caption: 'Makeup application' },
              { tone: 'ink' as const, caption: 'Final look, veil detail' },
              { tone: 'clay' as const, caption: 'Family, wedding morning' },
            ].map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 80}>
                <Plate tone={p.tone} caption={p.caption} ratio="aspect-square" dark={p.tone !== 'paper'} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink text-center text-ivory">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-4 text-bronze-light">Get in Touch</p>
            <h2 className="mx-auto max-w-xl text-3xl text-ivory sm:text-4xl">
              Let's talk about your wedding morning.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ivory/65">
              Trial dates fill quickly in peak wedding season — the earlier you enquire, the more choice you'll have.
            </p>
            <div className="mt-9">
              <Button to="/contact#book" variant="outline-light">
                {bridal.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
