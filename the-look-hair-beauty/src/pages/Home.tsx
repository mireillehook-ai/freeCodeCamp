import { BridalFeature } from '../components/home/BridalFeature'
import { ContactStrip } from '../components/home/ContactStrip'
import { FeaturedServices } from '../components/home/FeaturedServices'
import { GalleryPreview } from '../components/home/GalleryPreview'
import { Hero } from '../components/home/Hero'
import { Intro } from '../components/home/Intro'
import { SocialSection } from '../components/home/SocialSection'
import { Testimonials } from '../components/home/Testimonials'
import { Marquee } from '../components/ui/Marquee'

const TICKER = ['Precision Cutting', 'Colour & Balayage', 'The Look Brides', "Men's Grooming", 'Keratin Smoothing']

export function Home() {
  return (
    <>
      <Hero />
      <Marquee items={TICKER} />
      <Intro />
      <FeaturedServices />
      <BridalFeature />
      <GalleryPreview />
      <Testimonials />
      <SocialSection />
      <ContactStrip />
    </>
  )
}
