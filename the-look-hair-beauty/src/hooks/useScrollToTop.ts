import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Client-side route changes don't trigger the browser's native
 * scroll-to-anchor behaviour, so `<Link to="/contact#book">` would
 * otherwise land on Contact without ever jumping to the #book section.
 * Scroll to the hash target when present, else reset to the top.
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
}
