const About = () => {
    return (
        <section className="about" id="about">
            <div className="section-container">
                <div className="section-header fade-in">
                    <span className="section-badge">✨ About Me</span>
                    <h2 className="section-title">Passionate About Building Exceptional Software</h2>
                    <p className="section-subtitle">
                        A frontend-focused software engineer with a passion for creating beautiful,
                        performant, and user-centric applications.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-content fade-in">
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

                    <div className="skills-container fade-in">
                        <div className="skills-category">
                            <h4 className="skills-category-title">Frontend</h4>
                            <div className="skills-list">
                                <span className="skill-tag">React.js</span>
                                <span className="skill-tag">TypeScript</span>
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">Redux Toolkit</span>
                                <span className="skill-tag">RTK Query</span>
                                <span className="skill-tag">HTML5</span>
                                <span className="skill-tag">CSS3</span>
                                <span className="skill-tag">Tailwind CSS</span>
                                <span className="skill-tag">Material UI</span>
                            </div>
                        </div>
                        <div className="skills-category">
                            <h4 className="skills-category-title">Backend & APIs</h4>
                            <div className="skills-list">
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">Fastify</span>
                                <span className="skill-tag">REST API</span>
                                <span className="skill-tag">GraphQL</span>
                            </div>
                        </div>
                        <div className="skills-category">
                            <h4 className="skills-category-title">Cloud & DevOps</h4>
                            <div className="skills-list">
                                <span className="skill-tag">Azure Blob Storage</span>
                                <span className="skill-tag">Azure DevOps</span>
                                <span className="skill-tag">Docker</span>
                                <span className="skill-tag">Git</span>
                            </div>
                        </div>
                        <div className="skills-category">
                            <h4 className="skills-category-title">Databases & Tools</h4>
                            <div className="skills-list">
                                <span className="skill-tag">MongoDB</span>
                                <span className="skill-tag">MySQL</span>
                                <span className="skill-tag">Redis</span>
                                <span className="skill-tag">Sentry</span>
                                <span className="skill-tag">Zod</span>
                                <span className="skill-tag">RabbitMQ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
