import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.text}>
                    © 2026 <span>Suhaib Khan</span>. Crafted with passion and lots of ☕
                </p>
            </div>
        </footer>
    )
}

export default Footer
