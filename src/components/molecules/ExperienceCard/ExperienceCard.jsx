import Tag from '../../atoms/Tag'
import styles from './ExperienceCard.module.css'

const ExperienceCard = ({
    company,
    location,
    positions = [],
    className = '',
    ...props
}) => {
    // Calculate total duration
    const totalDuration = positions.length > 1
        ? `${positions[positions.length - 1].date.split(' – ')[0]} – ${positions[0].date.split(' – ')[1]}`
        : positions[0]?.date

    return (
        <div className={`${styles.card} fade-in ${className}`} {...props}>
            <div className={styles.header}>
                <div className={styles.companyInfo}>
                    <h3 className={styles.companyName}>{company}</h3>
                    <p className={styles.companyLocation}>{location}</p>
                </div>
                <div className={styles.duration}>{totalDuration}</div>
            </div>

            <div className={styles.timeline}>
                {positions.map((position, index) => (
                    <div className={styles.positionItem} key={index}>
                        <div className={styles.marker}>
                            <div className={styles.dot}></div>
                            {index < positions.length - 1 && <div className={styles.line}></div>}
                        </div>
                        <div className={styles.content}>
                            <div className={styles.positionHeader}>
                                <h4 className={styles.role}>{position.role}</h4>
                                <span className={styles.date}>{position.date}</span>
                            </div>
                            <p className={styles.description}>{position.description}</p>
                            <div className={styles.tags}>
                                {position.tags?.map((tag, tagIndex) => (
                                    <Tag key={tagIndex} variant="position">{tag}</Tag>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceCard
