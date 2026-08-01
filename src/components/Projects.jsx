import weatherImg from "../assets/weather app.png";
import todoImg from "../assets/To do list app.webp";
import bmiImg from "../assets/BMI calculator app.jpg";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="filter-buttons">
        <button className="filter btn active" data-filter="all">
          All
        </button>
        <button className="filter btn" data-filter="web">
          Web
        </button>
        <button className="filter btn" data-filter="design">
          Design
        </button>
      </div>

      <div className="projects-grid">

        <article
          className="project-card"
          data-category="web"
          data-year="2026"
        >
          <img
            src={weatherImg}
            alt="Weather App Screenshot"
            width="300"
          />
          <h3>Weather App</h3>

          <p>
            A simple weather application that allows users to check the
            current weather conditions for a specific location.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>API</span>
          </div>

          <a
  href="https://your-project.netlify.app"
  target="_blank"
  rel="noopener noreferrer"
>
  Live Demo
</a>

<a
  href="https://github.com/blanola-codes/weather-app"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>
        </article>

        <article
          className="project-card"
          data-category="web"
          data-year="2026"
        >
          <img
            src={todoImg}
            alt="To-do List App Screenshot"
            width="300"
          />

          <h3>To-do List App</h3>

          <p>
            A simple task management application that helps users add,
            organize, and track their daily tasks efficiently.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>API</span>
          </div>

          <a href="#">Live Demo</a>
          <a href="#">GitHub</a>
        </article>

        <article
          className="project-card"
          data-category="web"
          data-year="2026"
        >
          <img
src={bmiImg}
className="mobile-image"
alt="BMI"
/>

          <h3>BMI Calculator App</h3>

          <p>
            A BMI calculator that allows users to calculate their Body Mass
            Index using their height and weight and understand their
            corresponding BMI category.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>API</span>
          </div>

          <a href="#">Live Demo</a>
          <a href="#">GitHub</a>
        </article>

      </div>
    </section>
  );
}

export default Projects;