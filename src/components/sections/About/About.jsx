import { SectionHeader, Tag } from '../../atoms'
import styles from './About.module.css'

const skillsData = [
    {
        title: 'Frontend',
        skills: ['React.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'RTK Query', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI']
    },
    {
        title: 'Backend & APIs',
        skills: ['Node.js', 'Fastify', 'REST API', 'GraphQL']
    },
    {
        title: 'Cloud & DevOps',
        skills: ['Azure Blob Storage', 'Azure DevOps', 'Docker', 'Git']
    },
    {
        title: 'Databases & Tools',
        skills: ['MongoDB', 'MySQL', 'Redis', 'Sentry', 'Zod', 'RabbitMQ']
    }
]

const About = () => {
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <SectionHeader
                    badge="✨ About Me"
                    title="Passionate About Building Exceptional Software"
                    subtitle="A frontend-focused software engineer with a passion for creating beautiful, performant, and user-centric applications."
                />

                <div className={styles.grid}>
                    <div className={`${styles.content} fade-in`}>
                        <p>
                            I'm a frontend-focused software engineer with experience building high-performance,
                            production-ready web applications used by real teams and real customers. I hold an
                            <strong> MSc in Advanced Computer Science from the University of Liverpool</strong>,
                            graduating with <strong>First Class Honours (Distinction)</strong>.
                        </p>
                        <p>
                            Currently, I work as an <strong>AI Frontend Developer at Fletchers Group</strong>,
                            where I have full ownership of the frontend for an internal legal platform. I've
                            architected the application from the ground up using React and TypeScript, designed
                            virtualised PDF viewers capable of handling 50,000+ pages, and integrated complex
                            features like drag-and-drop workflows and real-time cross-tab synchronisation.
                        </p>
                        <p>
                            My core strengths include React, TypeScript, performance optimisation, state management,
                            modular architecture, and building products that are genuinely usable at scale. I enjoy
                            taking ownership, understanding real user problems, and shipping solutions that are
                            reliable, maintainable, and thoughtful.
                        </p>
                    </div>

                    <div className={`${styles.skills} fade-in`}>
                        {skillsData.map((category, index) => (
                            <div className={styles.category} key={index}>
                                <h4 className={styles.categoryTitle}>{category.title}</h4>
                                <div className={styles.skillsList}>
                                    {category.skills.map((skill, skillIndex) => (
                                        <Tag key={skillIndex} variant="skill">{skill}</Tag>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
