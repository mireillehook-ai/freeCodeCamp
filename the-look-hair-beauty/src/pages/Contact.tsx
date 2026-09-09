import { type FormEvent, useState } from 'react'
import { brand, locations, serviceCategories } from '../data/salon'
import { PageIntro } from '../components/layout/PageIntro'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const inputClass =
  'w-full border-0 border-b border-paper-line bg-transparent py-3 text-ink placeholder:text-ink/35 focus:border-bronze focus:outline-none'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const subject = `Booking enquiry — ${form.get('service') || 'General'}`
    const body = [
      `Name: ${form.get('name')}`,
      `Phone: ${form.get('phone')}`,
      `Preferred salon: ${form.get('salon')}`,
      `Service: ${form.get('service')}`,
      '',
      String(form.get('message') || ''),
    ].join('\n')

    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's find you an appointment."
        description="Call your preferred salon directly, or send an enquiry below and we'll confirm within one working day."
        tone="bronze"
        plateCaption="Reception, Eurotowers"
      />

      <section id="book" className="scroll-mt-28 section-y">
        <div className="container-editorial grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">Enquire</p>
            <h2 className="text-3xl sm:text-4xl">Book Now</h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink/65">
              Fill in a few details and this opens a pre-filled email to {brand.email} — or call the salon of your
              choice directly using the details alongside.
            </p>

            {sent && (
              <p className="mt-6 border border-bronze/40 bg-bronze-pale/40 px-4 py-3 text-sm text-ink/80">
                Your email app should now be open with your enquiry ready to send. We'll confirm shortly.
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-10 space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <input name="name" required placeholder="Full name" className={inputClass} />
                <input name="phone" required placeholder="Phone number" className={inputClass} />
              </div>
              <div className="grid gap-7 sm:grid-cols-2">
                <select name="salon" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Preferred salon
                  </option>
                  {locations.map((loc) => (
                    <option key={loc.id} value={`${loc.name} — ${loc.area}`}>
                      {loc.name} — {loc.area}
                    </option>
                  ))}
                </select>
                <select name="service" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Service of interest
                  </option>
                  {serviceCategories.map((cat) => (
                    <option key={cat.id} value={cat.title}>
                      {cat.title}
                    </option>
                  ))}
                  <option value="Bridal">Bridal</option>
                </select>
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little about what you're after"
                className={inputClass}
              />
              <button type="submit" className="btn btn-primary">
                Send Enquiry
              </button>
            </form>
          </Reveal>

          <Reveal delay={150}>
            <p className="eyebrow mb-4">Our Salons</p>
            <div className="space-y-6">
              {locations.map((loc) => (
                <div key={loc.id} className="border border-paper-line p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-display text-xl">{loc.name}</p>
                    <a href={`tel:${loc.phoneHref}`} className="link-underline text-sm font-medium text-bronze">
                      {loc.phoneDisplay}
                    </a>
                  </div>
                  <p className="mt-1 text-sm text-ink/50">{loc.area}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/65">{loc.description}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-y-1 border-t border-paper-line pt-4 text-sm">
                    {loc.hours.map((h) => (
                      <div key={h.label} className="contents">
                        <dt className="text-ink/50">{h.label}</dt>
                        <dd className="text-right text-ink/75">{h.value}</dd>
                      </div>
                    ))}
                  </dl>
                  {loc.note && <p className="mt-4 text-xs uppercase tracking-[0.1em] text-bronze">{loc.note}</p>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-paper-deep">
        <div className="container-editorial">
          <SectionHeading eyebrow="General Enquiries" title={brand.email} description="For press, careers or anything that isn't a booking, email us directly and we'll route it to the right salon." />
        </div>
      </section>
    </>
  )
}
