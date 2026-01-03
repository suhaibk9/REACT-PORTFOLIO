import styles from './Button.module.css'

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    href,
    className = '',
    ...props
}) => {
    const classes = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`

    // Render as anchor if href is provided
    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {icon && <span className={styles.icon}>{icon}</span>}
                {children}
            </a>
        )
    }

    return (
        <button className={classes} {...props}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    )
}

export default Button
