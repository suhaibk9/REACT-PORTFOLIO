//https://drive.google.com/file/d/1Sp112nOpNdadMelRubc6f1-a7v6ZfCCY/view?usp=sharing
import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar, Hero } from './components/organisms'
import {
  About,
  Experience,
  Projects,
  Education,
  Contact,
  Footer
} from './components/sections'
import './index.css'

function App() {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
      document.documentElement.style.setProperty('--mouse-glow-opacity', '1')
    }

    const handleMouseLeave = () => {
      document.documentElement.style.setProperty('--mouse-glow-opacity', '0')
    }

    // Track mouse coordinates only on desktop screens with a mouse/pointer device
    const mediaQuery = window.matchMedia('(min-width: 1024px) and (pointer: fine)')

    const setupListeners = (matches) => {
      if (matches) {
        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)
        document.documentElement.style.setProperty('--mouse-glow-opacity', '0')
      } else {
        window.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseleave', handleMouseLeave)
        document.documentElement.style.removeProperty('--mouse-x')
        document.documentElement.style.removeProperty('--mouse-y')
        document.documentElement.style.removeProperty('--mouse-glow-opacity')
      }
    }

    // Initialize based on current media query status
    setupListeners(mediaQuery.matches)

    const handleMediaChange = (e) => {
      setupListeners(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  return (
    <ThemeProvider>
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="mouse-glow"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
