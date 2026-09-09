import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { About } from './pages/About'
import { Bridal } from './pages/Bridal'
import { Contact } from './pages/Contact'
import { Gallery } from './pages/Gallery'
import { Home } from './pages/Home'
import { Services } from './pages/Services'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="bridal" element={<Bridal />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
