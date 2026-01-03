const Experience = () => {
    const experiences = [
        {
            company: "Fletchers Solicitors",
            role: "AI Frontend Developer",
            date: "June 2025 – Present",
            location: "📍 Manchester, United Kingdom",
            description: "Sole frontend owner responsible for architecting and building the entire frontend application from scratch using React and TypeScript. Designed high-performance PDF viewers for 50,000+ pages with advanced virtualisation techniques, implemented complex drag-and-drop workflows using DNDKit, built resilient file upload flows with Azure Blob Storage, and integrated Sentry for production monitoring.",
            tags: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Azure", "Sentry"]
        },
        {
            company: "Collins Aerospace",
            role: "Associate Software Developer",
            date: "Sep 2020 – May 2023",
            location: "📍 Bengaluru, India",
            description: "Engineered enterprise applications including a comprehensive Suppliers Portal using React.js and AG Grid with infinite scroll, executive dashboards with Chart.js, and interactive map interfaces using MapJS. Built customer order management applications with React, TypeScript, and Formik. Mentored new trainees and collaborated with cross-functional teams to deliver reliable, maintainable features.",
            tags: ["React.js", "AG Grid", "Chart.js", "Material UI", "Redux", "Formik"]
        },
        {
            company: "Collins Aerospace",
            role: "Graduate Engineer",
            date: "Sep 2020 – Oct 2021",
            location: "📍 Bengaluru, India",
            description: "Contributed to frontend development across multiple internal applications using JavaScript, React.js, HTML5, and CSS3. Strengthened understanding of frontend architecture, component design, and reusable UI patterns in a large enterprise environment. Supported feature development and bug fixes under guidance from senior engineers.",
            tags: ["JavaScript", "React.js", "HTML5", "CSS3"]
        },
        {
            company: "Collins Aerospace",
            role: "Intern",
            date: "Dec 2019 – Sep 2020",
            location: "📍 Bengaluru, India",
            description: "Completed comprehensive hands-on training in HTML5, CSS3, JavaScript, and React.js. Independently developed the entire frontend for the Smart Interviewer project, aimed at optimising the hiring and interview scheduling process. Demonstrated independence and ownership by delivering a complete frontend solution from scratch.",
            tags: ["HTML5", "CSS3", "JavaScript", "React.js"]
        }
    ]

    return (
        <section className="experience" id="experience">
            <div className="section-container">
                <div className="section-header fade-in">
                    <span className="section-badge">💼 Experience</span>
                    <h2 className="section-title">Professional Journey</h2>
                    <p className="section-subtitle">
                        Building impactful products across enterprise and startup environments
                    </p>
                </div>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div className="experience-item fade-in" key={index}>
                            <div className="experience-dot"></div>
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-company">{exp.company}</h3>
                                        <p className="experience-role">{exp.role}</p>
                                    </div>
                                    <span className="experience-date">{exp.date}</span>
                                </div>
                                <p className="experience-location">{exp.location}</p>
                                <p className="experience-description">{exp.description}</p>
                                <div className="experience-highlights">
                                    {exp.tags.map((tag, tagIndex) => (
                                        <span className="exp-tag" key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
