import { brand, galleryPlates } from '../data/salon'
import { PageIntro } from '../components/layout/PageIntro'
import { Plate } from '../components/ui/Plate'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Gallery() {
  return (
    <>
      <PageIntro
        eyebrow="Gallery"
        title="Inside The Look."
        description="A look at our salons, our work, and the moments — from a Tuesday trim to a wedding morning — that fill them."
        tone="paper"
        plateCaption="Salon detail"
      />

      <section className="section-y">
        <div className="container-editorial">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {galleryPlates.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80} className={i % 5 === 0 ? 'col-span-2 sm:col-span-1' : ''}>
                <Plate
                  tone={p.tone}
                  index={p.id}
                  caption={p.caption}
                  ratio={i % 5 === 0 ? 'aspect-[16/10] sm:aspect-square' : 'aspect-square'}
                  dark={p.tone !== 'paper'}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper-deep">
        <div className="container-editorial">
          <SectionHeading eyebrow="Social" title={brand.instagramHandle} description="Follow along for fresh cuts, colour transformations and behind-the-scenes from all three salons." />
          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6">
            {galleryPlates.slice(0, 6).map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open on Instagram"
                  className="block"
                >
                  <Plate tone={p.tone} ratio="aspect-square" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
