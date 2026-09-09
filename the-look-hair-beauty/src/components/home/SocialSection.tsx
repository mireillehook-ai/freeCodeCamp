import { brand, socialPosts } from '../../data/salon'
import { Plate } from '../ui/Plate'
import { Reveal } from '../ui/Reveal'

export function SocialSection() {
  return (
    <section className="section-y">
      <div className="container-editorial">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Follow Along</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">{brand.instagramHandle}</h2>
          </div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-sm font-medium uppercase tracking-[0.14em] text-ink"
          >
            View on Instagram
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6">
          {socialPosts.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <Plate tone={p.tone} ratio="aspect-square" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
