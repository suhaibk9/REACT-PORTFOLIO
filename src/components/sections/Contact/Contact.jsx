import { SectionHeader } from '../../atoms'
import { SocialLinks, ContactMethod } from '../../molecules'
import { ContactForm } from '../../organisms'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.container}>
                <SectionHeader
                    badge="📬 Contact"
                    title="Let's Work Together"
                    subtitle="Have a project in mind or just want to chat? I'd love to hear from you!"
                />

                <div className={styles.content}>
                    <div className={`${styles.info} fade-in`}>
                        <h3 className={styles.infoTitle}>Get in Touch</h3>
                        <p className={styles.infoDescription}>
                            I'm always open to discussing new opportunities, interesting projects,
                            or ways to collaborate. Whether you're looking for a frontend specialist
                            or want to build something amazing together, feel free to reach out.
                        </p>

                        <div className={styles.methods}>
                            <ContactMethod
                                icon="📧"
                                label="Email"
                                value="suhaib0900@gmail.com"
                                href="mailto:suhaib0900@gmail.com"
                            />
                            <ContactMethod
                                icon="📍"
                                label="Location"
                                value="Liverpool, United Kingdom"
                            />
                        </div>

                        <SocialLinks className={styles.social} />
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact
