import { useEffect, useRef } from 'react'

/**
 * Attaches data-reveal="in" the first time the element crosses into the
 * viewport, driving the fade/rise transition defined in index.css.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      node.setAttribute('data-reveal', 'in')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.setAttribute('data-reveal', 'in')
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )

    node.setAttribute('data-reveal', '')
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
