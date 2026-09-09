import { brand } from '../../data/salon'
import { Button } from '../ui/Button'

export function StickyBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-paper-line bg-paper/95 px-5 py-3 backdrop-blur-sm sm:hidden">
      <a href={`tel:${brand.phoneHref}`} className="text-xs font-medium uppercase tracking-[0.14em] text-ink/70">
        Call Us
      </a>
      <Button to="/contact#book" className="flex-1 justify-center">
        Book Now
      </Button>
    </div>
  )
}
