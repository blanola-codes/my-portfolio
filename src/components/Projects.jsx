import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import weatherImg from "../assets/weather app.png";
import todoImg from "../assets/To do list app.webp";
import bmiImg from "../assets/BMI calculator app.jpg";

function Projects() {

  const projects = [

    {
      id: "01",
      title: "Weather App",
      image: weatherImg,
      description:
        "A responsive weather application that fetches real-time weather information using an API.",

      tech: ["React", "API", "CSS"],

      github: "#",

      live: "#",
    },

    {
      id: "02",

      title: "To-Do List",

      image: todoImg,

      description:
        "A task management application for organizing daily activities with a clean and responsive UI.",

      tech: ["React", "JavaScript"],

      github: "#",

      live: "#",
    },

    {
      id: "03",

      title: "BMI Calculator",

      image: bmiImg,

      description:
        "A BMI calculator that calculates Body Mass Index and displays the health category instantly.",

      tech: ["React", "CSS"],

      github: "#",

      live: "#",
    },

  ];

  return (

    <section
      id="projects"
      className="projects-section"
    >

      <h2>Featured Projects</h2>

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
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
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