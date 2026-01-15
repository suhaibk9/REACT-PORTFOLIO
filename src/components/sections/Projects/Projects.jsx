import { SectionHeader } from "../../atoms";
import { ProjectCard } from "../../molecules";
import styles from "./Projects.module.css";

const projects = [
  {
    icon: "🚆",
    title: "TrainRadar",
    description:
      "A real-time train tracking application inspired by FlightRadar. Track all trains passing through any UK station for the current day, view platform numbers, complete train trajectories plotted on interactive OpenStreetMap, real-time arrival/departure times, delays, and cancellation status.",
    tech: [
      "React",
      "Redux Toolkit",
      "Leaflet",
      "Node.js",
      "Material UI",
      "Tailwind CSS",
    ],
    github: "https://github.com/suhaibk9/RealtimTrains_Frontend",
    live: "https://realtim-trains-frontend.vercel.app",
  },
  {
    icon: "🎬",
    title: "NetflixGPT",
    description:
      "A Netflix clone with AI-powered movie recommendations. Features TMDB API integration, Firebase authentication, and OpenAI GPT-3.5 for intelligent content suggestions based on user preferences.",
    tech: ["React", "Tailwind CSS", "Firebase", "OpenAI", "TMDB API"],
    github: "https://github.com/suhaibk9/NetflixGPT",
    live: "https://netflixgpt-react-front.vercel.app",
  },
  {
    icon: "🍔",
    title: "FoodApp",
    description:
      "A full-featured food ordering web application with real-time cart management and Stripe payment integration. Browse restaurants, add items to cart, and checkout seamlessly with secure payments.",
    tech: ["React", "Redux", "Tailwind CSS", "Stripe"],
    github: "https://github.com/suhaibk9/FoodApp-React",
    live: "https://foodapp-react-peach.vercel.app",
  },
  {
    icon: "📖",
    title: "Book Nest",
    description:
      "A modern Goodreads-like book management application. Browse books, organize with default shelves or create your own custom shelves, user authentication, and responsive design for seamless reading list management.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "DaisyUI", "Axios"],
    github: "https://github.com/suhaibk9/GoodReads_FE",
    live: "https://good-reads-fe.vercel.app",
  },
  {
    icon: "📚",
    title: "AlgoQuest",
    description:
      "An algorithm learning platform built with a microservices architecture. Features real-time communication via WebSockets for interactive learning experiences and collaborative problem solving.",
    tech: ["Node.js", "TypeScript", "Docker", "Redis", "MongoDB"],
    github: "https://github.com/suhaibk9/AlgoQuest_Backend",
    live: null,
  },
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <SectionHeader
          badge="🚀 Projects"
          title="Featured Work"
          subtitle="Side projects that showcase my passion for building and learning"
        />

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
