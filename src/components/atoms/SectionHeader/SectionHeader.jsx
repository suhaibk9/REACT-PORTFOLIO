import Badge from '../Badge'
import styles from './SectionHeader.module.css'

const SectionHeader = ({
    badge,
    title,
    subtitle,
    className = '',
    ...props
}) => {
    return (
        <div className={`${styles.sectionHeader} fade-in ${className}`} {...props}>
            {badge && <Badge variant="section">{badge}</Badge>}
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    )
}

export default SectionHeader
