import { serviceCategories } from '../data/salon'
import { PageIntro } from '../components/layout/PageIntro'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

export function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="A full menu, precisely delivered."
        description="Every appointment begins with consultation. Pricing is confirmed then, based on hair length, density and the result you're after."
        tone="ink"
        plateCaption="Colour bar"
      />

      <nav className="sticky top-[4.75rem] z-30 border-b border-paper-line bg-paper/95 backdrop-blur-sm sm:top-24">
        <div className="container-editorial flex gap-7 overflow-x-auto py-4 text-xs font-medium uppercase tracking-[0.14em] text-ink/60 sm:gap-9">
          {serviceCategories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="link-underline whitespace-nowrap hover:text-ink">
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      {serviceCategories.map((cat, i) => (
        <section key={cat.id} id={cat.id} className={`scroll-mt-32 section-y ${i % 2 ? 'bg-paper-deep' : ''}`}>
          <div className="container-editorial grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow mb-4">{String(i + 1).padStart(2, '0')} / {String(serviceCategories.length).padStart(2, '0')}</p>
              <h2 className="text-3xl sm:text-[2.5rem]">{cat.title}</h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-ink/65">{cat.intro}</p>
            </Reveal>

            <div className="divide-y divide-paper-line border-t border-paper-line">
              {cat.items.map((item, j) => (
                <Reveal key={item.name} delay={j * 60} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="text-lg text-ink">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-ink/55 sm:max-w-md sm:text-right">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-y bg-ink text-center text-ivory">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow mb-4 text-bronze-light">Ready When You Are</p>
            <h2 className="mx-auto max-w-xl text-3xl text-ivory sm:text-4xl">
              Book a consultation and we’ll confirm the right service and price for you.
            </h2>
            <div className="mt-9">
              <Button to="/contact#book" variant="outline-light">
                Book Now
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
