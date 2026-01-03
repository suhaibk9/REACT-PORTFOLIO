import { SectionHeader } from '../../atoms'
import styles from './Education.module.css'

const educationData = [
    {
        icon: "🏛️",
        degree: "Master of Science (MSc)",
        school: "University of Liverpool",
        field: "Advanced Computer Science",
        achievement: "First Class Honours (Distinction)"
    },
    {
        icon: "🎓",
        degree: "Bachelor of Engineering (BE)",
        school: "Visvesvaraya Technological University",
        field: "Computer Science and Engineering"
    }
]

const Education = () => {
    return (
        <section className={styles.education} id="education">
            <div className={styles.container}>
                <SectionHeader
                    badge="🎓 Education"
                    title="Academic Background"
                    subtitle="A strong foundation in computer science and continuous learning"
                />

                <div className={styles.grid}>
                    {educationData.map((edu, index) => (
                        <div className={`${styles.card} fade-in`} key={index}>
                            <div className={styles.icon}>{edu.icon}</div>
                            <h3 className={styles.degree}>{edu.degree}</h3>
                            <p className={styles.school}>{edu.school}</p>
                            <p className={styles.field}>{edu.field}</p>
                            {edu.achievement && (
                                <span className={styles.achievement}>
                                    <span>🏆</span> {edu.achievement}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
