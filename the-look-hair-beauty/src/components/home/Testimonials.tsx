import { testimonials } from '../../data/salon'
import { TestimonialSlider } from '../ui/TestimonialSlider'

export function Testimonials() {
  return (
    <section className="section-y bg-paper-deep">
      <div className="container-editorial">
        <p className="eyebrow mb-14 text-center">In Their Words</p>
        <TestimonialSlider items={testimonials} />
      </div>
    </section>
  )
}
