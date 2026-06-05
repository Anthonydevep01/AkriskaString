import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import SiteLayout from '@/components/layout/SiteLayout'
import ScrollToTop from '@/components/layout/ScrollToTop'
import Home from '@/pages/Home'
import AcercaDe from '@/pages/AcercaDe'
import VisionMision from '@/pages/VisionMision'
import Portafolio from '@/pages/Portafolio'
import Testimonios from '@/pages/Testimonios'
import Contacto from '@/pages/Contacto'
import BlogIndex from '@/pages/BlogIndex'
import BlogCategory from '@/pages/BlogCategory'
import BlogPost from '@/pages/BlogPost'
import Buscar from '@/pages/Buscar'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
            <Route path="/vision-mision" element={<VisionMision />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:category" element={<BlogCategory />} />
            <Route path="/blog/:category/:slug" element={<BlogPost />} />
            <Route path="/buscar" element={<Buscar />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  )
}
