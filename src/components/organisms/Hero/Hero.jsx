import profileImage from '../../../assets/3FB082AD-7EF4-4855-B961-CB8F4F58631E.png'
import { Badge, Button } from '../../atoms'
import { SocialLinks } from '../../molecules'
import styles from './Hero.module.css'

const Hero = () => {
    const scrollToSection = (e, sectionId) => {
        e.preventDefault()
        const section = document.querySelector(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.container}>
                <div className={styles.content}>
                    <Badge variant="status" pulse>
                        Available for opportunities
                    </Badge>

                    <h1 className={styles.title}>
                        Hi, I'm <span className={styles.gradient}>Suhaib Khan</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Senior Frontend Engineer • React & TypeScript Specialist
                    </p>

                    <p className={styles.description}>
                        I craft high-performance, production-ready web applications with a focus on
                        exceptional user experiences, scalable architecture, and clean code. Currently
                        building the future of legal tech at Fletchers Group.
                    </p>

                    <SocialLinks variant="hero" className={styles.social} />

                    <div className={styles.cta}>
                        <Button
                            variant="primary"
                            icon="💬"
                            href="#contact"
                            onClick={(e) => scrollToSection(e, '#contact')}
                        >
                            Let's Talk
                        </Button>
                        <Button
                            variant="secondary"
                            icon="🚀"
                            href="#projects"
                            onClick={(e) => scrollToSection(e, '#projects')}
                        >
                            View Projects
                        </Button>
                    </div>
                </div>

                <div className={styles.image}>
                    <div className={styles.profileCard}>
                        <div className={styles.glow}></div>
                        <div className={styles.frame}>
                            <img
                                src={profileImage}
                                alt="Suhaib Khan"
                                className={styles.photo}
                            />
                            <h3 className={styles.name}>Suhaib Khan</h3>
                            <p className={styles.role}>AI Frontend Developer @ Fletchers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
