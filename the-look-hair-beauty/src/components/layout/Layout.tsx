import { Outlet, useLocation } from 'react-router-dom'
import { useScrollToTop } from '../../hooks/useScrollToTop'
import { Footer } from './Footer'
import { Header } from './Header'
import { StickyBookBar } from './StickyBookBar'

export function Layout() {
  useScrollToTop()
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header transparentOnTop={pathname === '/'} />
      <main className="flex-1 pb-16 sm:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyBookBar />
    </div>
  )
}
