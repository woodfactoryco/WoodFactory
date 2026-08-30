import { useCallback, useState } from 'react'

import { useReveal } from './lib/useReveal.js'

import IconSprite from './components/IconSprite.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Craft from './components/Craft.jsx'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Lightbox from './components/Lightbox.jsx'

export default function App() {
  // the photo currently open in the lightbox, or null when it is closed
  const [openPhoto, setOpenPhoto] = useState(null)
  // stable identity so the lightbox's key/scroll-lock effect isn't torn down each render
  const closeLightbox = useCallback(() => setOpenPhoto(null), [])

  useReveal()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <IconSprite />

      <Nav />

      <main id="top">
        <Hero />
        <Craft />
        <Gallery onOpen={setOpenPhoto} />
        <About />
        <Contact />
      </main>

      <Footer />

      <Lightbox photo={openPhoto} onClose={closeLightbox} />
    </>
  )
}
