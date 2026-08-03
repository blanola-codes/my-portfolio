import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import weatherImg from "../assets/portfolio-project.png";
import todoImg from "../assets/ai-dashboard.png";
import bmiImg from "../assets/travel-booking.png";

function Projects() {

 const projects = [

  {
    id: "01",
    title: "Personal Portfolio Website",

    image: portfolioImg,

    description:
      "A modern responsive portfolio built using React showcasing my skills, projects, journey and contact information with dark mode support and smooth animations.",

    tech: [
      "React",
      "CSS",
      "JavaScript",
      "Responsive Design"
    ],

    github: "https://github.com/blanola-codes",

    live: "https://cheery-lily-00fc66.netlify.app/",
  },

  {
    id: "02",

    title: "AI Task Manager",

    image: dashboardImg,

    description:
      "A modern AI-powered task management dashboard with analytics, productivity charts, smart reminders and calendar integration.",

    tech: [
      "React",
      "Chart.js",
      "Node.js",
      "AI"
    ],

    github: "#",

    live: "#",
  },

  {
    id: "03",

    title: "Travel Booking Website",

    image: travelImg,

    description:
      "A modern travel booking platform featuring destination search, hotel booking, responsive layouts and beautiful UI inspired by real-world travel websites.",

    tech: [
      "React",
      "API",
      "CSS",
      "UI/UX"
    ],

    github: "#",

    live: "#",
  },

];

  return (

    <section
      id="projects"
      className="projects-section"
    >

      <>
  <h2>Featured Projects</h2>

  <p className="project-subtitle">
    A collection of projects showcasing my frontend development,
    responsive design and React skills.
  </p>
</>

      <div className="projects-grid">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.id}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              {project.id === "01" && (
  <span className="featured-badge">
    ⭐ Featured
  </span>
)}

              <span className="project-number">
                {project.id}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">

                {project.tech.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

              <div className="project-links">

                <a
  href={project.live}
  target="_blank"
  rel="noreferrer"
  onClick={(e) => {
    if (project.live === "#") {
      e.preventDefault();
      alert("Demo coming soon!");
    }
  }}
>
                  <FaExternalLinkAlt style={{ marginRight: "8px" }} />
Live Demo
                </a>

                <a
  href={project.github}
  target="_blank"
  rel="noreferrer"
  onClick={(e) => {
    if (project.github === "#") {
      e.preventDefault();
      alert("GitHub repository coming soon!");
    }
  }}
>
                  <FaGithub style={{ marginRight: "8px" }} />
GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;