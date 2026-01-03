const Education = () => {
    const education = [
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

    return (
        <section className="education" id="education">
            <div className="section-container">
                <div className="section-header fade-in">
                    <span className="section-badge">🎓 Education</span>
                    <h2 className="section-title">Academic Background</h2>
                    <p className="section-subtitle">
                        A strong foundation in computer science and continuous learning
                    </p>
                </div>

                <div className="education-grid">
                    {education.map((edu, index) => (
                        <div className="education-card fade-in" key={index}>
                            <div className="education-icon">{edu.icon}</div>
                            <h3 className="education-degree">{edu.degree}</h3>
                            <p className="education-school">{edu.school}</p>
                            <p className="education-field">{edu.field}</p>
                            {edu.achievement && (
                                <span className="education-achievement">
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
