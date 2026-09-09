import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav } from '../../data/salon'
import { useScrolled } from '../../hooks/useScrolled'
import { Button } from '../ui/Button'

type HeaderProps = { transparentOnTop?: boolean }

export function Header({ transparentOnTop = false }: HeaderProps) {
  const scrolled = useScrolled(64)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const ghost = transparentOnTop && !scrolled && !open

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-500 ${
          ghost ? 'bg-transparent' : 'bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_var(--color-paper-line)]'
        }`}
      >
        <div className="container-editorial flex h-[4.75rem] items-center justify-between sm:h-24">
          <Link
            to="/"
            className={`font-display text-lg tracking-tight sm:text-xl ${ghost ? 'text-ivory' : 'text-ink'}`}
          >
            The Look
            <span className={`ml-2 hidden text-[0.6875rem] font-sans font-medium uppercase tracking-[0.2em] sm:inline ${ghost ? 'text-ivory/60' : 'text-ink/45'}`}>
              Hair &amp; Beauty
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={`link-underline text-[0.8125rem] font-medium uppercase tracking-[0.14em] ${
                  ghost ? 'text-ivory' : 'text-ink'
                }`}
                style={({ isActive }: { isActive: boolean }) => ({
                  backgroundSize: isActive ? '100% 1px' : undefined,
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact#book" variant={ghost ? 'outline-light' : 'primary'}>
              Book Now
            </Button>
          </div>

          {/* Spacer keeps the row balanced; the real toggle sits outside the
              blurred wrapper below so it isn't trapped under the menu overlay
              (backdrop-filter creates a stacking context that would bury it). */}
          <div className="h-10 w-10 lg:hidden" aria-hidden />
        </div>
      </div>

      <div className="container-editorial pointer-events-none absolute inset-x-0 top-0 flex h-[4.75rem] items-center justify-end sm:h-24 lg:hidden">
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="pointer-events-auto relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
        >
          <span
            className={`h-px w-6 transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''} ${
              ghost && !open ? 'bg-ivory' : 'bg-ink'
            }`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''} ${
              ghost && !open ? 'bg-ivory' : 'bg-ink'
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-0 bg-paper transition-opacity duration-500 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="container-editorial flex h-full flex-col justify-center gap-8 pb-24">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `font-display text-4xl ${isActive ? 'text-bronze' : 'text-ink'}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/contact#book" className="mt-4 w-fit">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}
