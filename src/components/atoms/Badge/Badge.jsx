import styles from './Badge.module.css'

const Badge = ({
    children,
    variant = 'default',
    pulse = false,
    className = '',
    ...props
}) => {
    const classes = `${styles.badge} ${styles[variant]} ${className}`

    return (
        <span className={classes} {...props}>
            {pulse && <span className={styles.pulse}></span>}
            {children}
        </span>
    )
}

export default Badge
