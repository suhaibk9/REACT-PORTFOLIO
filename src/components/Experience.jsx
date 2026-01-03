const Experience = () => {
    const experiences = [
        {
            company: "Fletchers Solicitors",
            location: "📍 Manchester, United Kingdom",
            positions: [
                {
                    role: "AI Frontend Developer",
                    date: "June 2025 – Present",
                    description: "Sole frontend owner responsible for architecting and building the entire frontend application from scratch using React and TypeScript. Designed high-performance PDF viewers for 50,000+ pages with advanced virtualisation techniques, implemented complex drag-and-drop workflows using DNDKit, built resilient file upload flows with Azure Blob Storage, and integrated Sentry for production monitoring.",
                    tags: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Azure", "Sentry"]
                }
            ]
        },
        {
            company: "Collins Aerospace",
            location: "📍 Bengaluru, India",
            positions: [
                {
                    role: "Associate Software Developer",
                    date: "Nov 2021 – May 2023",
                    description: "Engineered enterprise applications including a comprehensive Suppliers Portal using React.js and AG Grid with infinite scroll, executive dashboards with Chart.js, and interactive map interfaces using MapJS. Built customer order management applications with React, TypeScript, and Formik. Mentored new trainees and collaborated with cross-functional teams.",
                    tags: ["React.js", "AG Grid", "Chart.js", "Material UI", "Redux", "Formik"]
                },
                {
                    role: "Graduate Engineer",
                    date: "Sep 2020 – Oct 2021",
                    description: "Contributed to frontend development across multiple internal applications using JavaScript, React.js, HTML5, and CSS3. Strengthened understanding of frontend architecture, component design, and reusable UI patterns in a large enterprise environment.",
                    tags: ["JavaScript", "React.js", "HTML5", "CSS3"]
                },
                {
                    role: "Intern",
                    date: "Dec 2019 – Sep 2020",
                    description: "Completed comprehensive hands-on training in HTML5, CSS3, JavaScript, and React.js. Independently developed the entire frontend for the Smart Interviewer project, aimed at optimising the hiring and interview scheduling process.",
                    tags: ["HTML5", "CSS3", "JavaScript", "React.js"]
                }
            ]
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

                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div className="experience-card fade-in" key={index}>
                            <div className="experience-card-header">
                                <div className="company-info">
                                    <h3 className="company-name">{exp.company}</h3>
                                    <p className="company-location">{exp.location}</p>
                                </div>
                                <div className="company-duration">
                                    {exp.positions.length > 1
                                        ? `${exp.positions[exp.positions.length - 1].date.split(' – ')[0]} – ${exp.positions[0].date.split(' – ')[1]}`
                                        : exp.positions[0].date
                                    }
                                </div>
                            </div>

                            <div className="positions-timeline">
                                {exp.positions.map((position, posIndex) => (
                                    <div className="position-item" key={posIndex}>
                                        <div className="position-marker">
                                            <div className="position-dot"></div>
                                            {posIndex < exp.positions.length - 1 && <div className="position-line"></div>}
                                        </div>
                                        <div className="position-content">
                                            <div className="position-header">
                                                <h4 className="position-role">{position.role}</h4>
                                                <span className="position-date">{position.date}</span>
                                            </div>
                                            <p className="position-description">{position.description}</p>
                                            <div className="position-tags">
                                                {position.tags.map((tag, tagIndex) => (
                                                    <span className="exp-tag" key={tagIndex}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
