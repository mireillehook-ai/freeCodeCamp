import { Link } from 'react-router-dom'
import { brand, locations, nav } from '../../data/salon'
import { Button } from '../ui/Button'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
      <path d="M14 8.5h2.5V5.2h-2.7C11.2 5.2 10 6.7 10 9v2.3H7.6V15H10v6h3v-6h2.4l.6-3.7H13V9c0-.4.2-.5.5-.5Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="container-editorial grid gap-14 py-20 sm:py-24 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10">
        <div>
          <p className="font-display text-2xl">The Look</p>
          <p className="mt-1 text-[0.6875rem] uppercase tracking-[0.2em] text-ivory/50">Hair &amp; Beauty · Est. 2003</p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/65">
            Gibraltar’s premier unisex hair and beauty salons, and its longstanding home for bridal hair and makeup.
          </p>
          <div className="mt-7 flex items-center gap-4">
            <a
              href={brand.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="The Look on Facebook"
              className="flex h-10 w-10 items-center justify-center border border-ivory/25 transition-colors hover:border-bronze hover:text-bronze"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="The Look on Instagram"
              className="flex h-10 w-10 items-center justify-center border border-ivory/25 transition-colors hover:border-bronze hover:text-bronze"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-bronze-light">Explore</p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="link-underline text-sm text-ivory/75 hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-bronze-light">Our Salons</p>
          <ul className="mt-5 space-y-4">
            {locations.map((loc) => (
              <li key={loc.id} className="text-sm text-ivory/75">
                <p className="text-ivory">{loc.name}</p>
                <p className="text-ivory/55">{loc.area}</p>
                <a href={`tel:${loc.phoneHref}`} className="link-underline text-ivory/75">
                  {loc.phoneDisplay}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-bronze-light">Book an Appointment</p>
          <p className="mt-5 text-sm leading-relaxed text-ivory/65">
            Reach out by phone or email, or send us an enquiry and we’ll confirm your appointment by return.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={`tel:${brand.phoneHref}`} className="link-underline block text-ivory">
              {brand.phoneDisplay}
            </a>
            <a href={`mailto:${brand.email}`} className="link-underline block text-ivory">
              {brand.email}
            </a>
          </div>
          <Button to="/contact#book" variant="outline-light" className="mt-7">
            Book Now
          </Button>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-editorial flex flex-col gap-3 py-7 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.legalName}. All rights reserved.</p>
          <p>Eurotowers · South District · World Trade Centre, Gibraltar</p>
        </div>
      </div>
    </footer>
  )
}
