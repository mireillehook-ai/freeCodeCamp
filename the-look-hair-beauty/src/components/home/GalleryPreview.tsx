import { galleryPlates } from '../../data/salon'
import { Button } from '../ui/Button'
import { Plate } from '../ui/Plate'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function GalleryPreview() {
  const plates = galleryPlates.slice(0, 5)

  return (
    <section className="section-y">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="The Salon" title="A look inside." />
          <Reveal>
            <Button to="/gallery" variant="outline" className="hidden sm:inline-flex">
              Full Gallery
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[10rem]">
          <Reveal className="col-span-2 row-span-2 h-full">
            <Plate
              tone={plates[0].tone}
              index={plates[0].id}
              caption={plates[0].caption}
              ratio="aspect-square lg:aspect-auto lg:h-full lg:w-full"
            />
          </Reveal>
          {plates.slice(1).map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className="lg:row-span-1 lg:h-full">
              <Plate
                tone={p.tone}
                index={p.id}
                caption={p.caption}
                ratio="aspect-square lg:aspect-auto lg:h-full lg:w-full"
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 sm:hidden">
          <Button to="/gallery" variant="outline">
            Full Gallery
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
