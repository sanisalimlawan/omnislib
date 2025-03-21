import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './hero.jsx'
import Services from './services.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Footer from './footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hero/>
    <Services />
    <About />
    <Contact />
    <Footer />
  </StrictMode>,
)
