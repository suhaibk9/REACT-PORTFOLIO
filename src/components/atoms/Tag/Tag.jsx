import styles from './Tag.module.css'

const Tag = ({
    children,
    variant = 'default',
    className = '',
    ...props
}) => {
    const classes = `${styles.tag} ${styles[variant]} ${className}`

    return (
        <span className={classes} {...props}>
            {children}
        </span>
    )
}

export default Tag
