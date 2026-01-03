import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { isDark, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e, sectionId) => {
        e.preventDefault()
        const section = document.querySelector(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="nav-logo">SK</a>
                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a></li>
                    <li><a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a></li>
                    <li><a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a></li>
                    <li><a href="#education" onClick={(e) => scrollToSection(e, '#education')}>Education</a></li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1eX5uRLQjcVxwj1VFv0hfI-CNBI-XGSM7/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-resume"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            Resume
                        </a>
                    </li>
                    <li>
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            ) : (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            )}
                        </button>
                    </li>
                    <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="nav-cta">Get in Touch</a></li>
                </ul>
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
