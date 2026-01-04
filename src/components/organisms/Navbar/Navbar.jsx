import { useState, useEffect } from 'react'
import { useTheme } from '../../../context/ThemeContext'
import { Icon } from '../../atoms'
import styles from './Navbar.module.css'

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
]

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

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    const scrollToSection = (e, sectionId) => {
        e.preventDefault()
        const section = document.querySelector(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>SK</a>

                <ul className={`${styles.links} ${mobileMenuOpen ? styles.active : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => scrollToSection(e, `#${link.id}`)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}

                    <li>
                        <a
                            href="https://drive.google.com/file/d/1RUy-lpcu7IhzhQ3wNUkL-vdL1acNfyse/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.resume}
                        >
                            <Icon name="document" size={16} />
                            Resume
                        </a>
                    </li>

                    <li>
                        <button
                            className={styles.themeToggle}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            <Icon name={isDark ? 'sun' : 'moon'} size={18} />
                        </button>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className={styles.cta}
                        >
                            Get in Touch
                        </a>
                    </li>
                </ul>

                <button
                    className={`${styles.mobileBtn} ${mobileMenuOpen ? styles.open : ''}`}
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
