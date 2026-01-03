import styles from './ContactMethod.module.css'

const ContactMethod = ({
    icon,
    label,
    value,
    href,
    className = '',
    ...props
}) => {
    const Component = href ? 'a' : 'div'
    const linkProps = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {}

    return (
        <Component className={`${styles.method} ${className}`} {...linkProps} {...props}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.details}>
                <span className={styles.label}>{label}</span>
                <span className={styles.value}>{value}</span>
            </div>
        </Component>
    )
}

export default ContactMethod
