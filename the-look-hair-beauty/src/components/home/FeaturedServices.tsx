import { Link } from 'react-router-dom'
import { serviceCategories } from '../../data/salon'
import { Button } from '../ui/Button'
import { Plate } from '../ui/Plate'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const FEATURED = ['cut-and-style', 'colour', 'treatments', 'beauty'] as const
const TONES = ['ink', 'bronze', 'clay', 'paper'] as const

export function FeaturedServices() {
  const categories = FEATURED.map((id) => serviceCategories.find((c) => c.id === id)!).filter(Boolean)

  return (
    <section className="section-y bg-paper-deep">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What We Do"
            title="A full menu, precisely delivered."
            description="From an everyday cut to a full colour transformation, every service starts with a proper consultation."
          />
          <Reveal>
            <Button to="/services" variant="outline" className="hidden sm:inline-flex">
              View Full Menu
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 100}>
              <Link to={`/services#${cat.id}`} className="group block">
                <Plate tone={TONES[i % TONES.length]} ratio="aspect-[3/4]" dark={TONES[i % TONES.length] !== 'paper'} />
                <div className="mt-5">
                  <h3 className="font-display text-xl text-ink transition-colors group-hover:text-bronze">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{cat.intro}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 sm:hidden">
          <Button to="/services" variant="outline">
            View Full Menu
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
