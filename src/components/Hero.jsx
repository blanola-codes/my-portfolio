function Hero() {
  const hour = new Date().getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "☀️ Good Morning";
  } else if (hour < 17) {
    greeting = "🌤️ Good Afternoon";
  } else if (hour < 21) {
    greeting = "🌇 Good Evening";
  } else {
    greeting = "🌙 Good Night";
  }

  return (
    <section className="hero-section">

      <div className="hero-content">

        <p className="greeting">{greeting}</p>

        <h1>
          Hi, I'm <span>Blanola Joylin Dsouza</span>
        </h1>

        <h2>
          AI & Machine Learning Student
        </h2>

        <h3>
          Frontend Developer
        </h3>

        <p className="hero-description">
          Passionate about creating responsive, user-friendly and modern
          web applications using HTML, CSS, JavaScript and React.
          I enjoy turning ideas into interactive digital experiences while
          continuously learning new technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a href="/resume.pdf" download className="btn btn-secondary">
            Download Resume
          </a>
        </div>

        <div className="tech-stack">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>

        <div className="scroll-indicator">
          ↓ Scroll Down
        </div>

      </div>

    </section>
  );
}

export default Hero;