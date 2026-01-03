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

  return (
    <ThemeProvider>
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
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
