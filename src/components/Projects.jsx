const Projects = () => {
    const projects = [
        {
            icon: "🚆",
            title: "TrainRadar",
            description: "A real-time train tracking application inspired by FlightRadar. Track all trains passing through any UK station for the current day, view platform numbers, complete train trajectories plotted on interactive OpenStreetMap, real-time arrival/departure times, delays, and cancellation status.",
            tech: ["React", "Redux Toolkit", "Leaflet", "Node.js", "Material UI", "Tailwind CSS"],
            github: "https://github.com/suhaibk9/RealtimTrains_Frontend",
            live: "https://realtim-trains-frontend.vercel.app"
        },
        {
            icon: "🎬",
            title: "NetflixGPT",
            description: "A Netflix clone with AI-powered movie recommendations. Features TMDB API integration, Firebase authentication, and OpenAI GPT-3.5 for intelligent content suggestions based on user preferences.",
            tech: ["React", "Tailwind CSS", "Firebase", "OpenAI", "TMDB API"],
            github: "https://github.com/suhaibk9",
            live: "https://netflixgpt-react-front.vercel.app"
        },
        {
            icon: "🍔",
            title: "FoodApp",
            description: "A full-featured food ordering web application with real-time cart management and Stripe payment integration. Browse restaurants, add items to cart, and checkout seamlessly with secure payments.",
            tech: ["React", "Redux", "Tailwind CSS", "Stripe"],
            github: "https://github.com/suhaibk9",
            live: "https://foodapp-react-peach.vercel.app"
        },
        {
            icon: "📚",
            title: "AlgoQuest",
            description: "An algorithm learning platform built with a microservices architecture. Features real-time communication via WebSockets for interactive learning experiences and collaborative problem solving.",
            tech: ["Node.js", "TypeScript", "Docker", "Redis", "MongoDB"],
            github: "https://github.com/suhaibk9",
            live: null
        }
    ]

    return (
        <section className="projects" id="projects">
            <div className="section-container">
                <div className="section-header fade-in">
                    <span className="section-badge">🚀 Projects</span>
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-subtitle">
                        Side projects that showcase my passion for building and learning
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card fade-in" key={index}>
                            <div className="project-image">{project.icon}</div>
                            <div className="project-body">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, techIndex) => (
                                        <span className="tech-tag" key={techIndex}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link project-link-live">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
