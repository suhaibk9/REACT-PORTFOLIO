import Icon from '../../atoms/Icon'
import Tag from '../../atoms/Tag'
import styles from './ProjectCard.module.css'

const ProjectCard = ({
    icon,
    title,
    description,
    tech = [],
    github,
    live,
    className = '',
    ...props
}) => {
    return (
        <div className={`${styles.card} fade-in ${className}`} {...props}>
            <div className={styles.image}>{icon}</div>
            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.tech}>
                    {tech.map((item, index) => (
                        <Tag key={index} variant="tech">{item}</Tag>
                    ))}
                </div>
                <div className={styles.links}>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        <Icon name="github" size={18} />
                        GitHub
                    </a>
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.link} ${styles.linkLive}`}
                        >
                            <Icon name="externalLink" size={18} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
