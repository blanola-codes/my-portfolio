function Hero() {

  const hour = new Date().getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else if (hour < 17) {
    greeting = "Good Afternoon 🌤️";
  } else if (hour < 21) {
    greeting = "Good Evening 🌇";
  } else {
    greeting = "Good Night 🌙";
  }


  return (
    <section className="hero-section">

      <p className="greeting">{greeting}</p>

      <h1>
        Hi, I'm <span>Blanola Joylin Dsouza</span> 👋
      </h1>

      <h3>
        AI & ML Student | Frontend Developer
      </h3>

      <p className="hero-description">
        I build responsive websites using HTML, CSS,
        JavaScript and React.
      </p>

      <div className="hero-buttons">

        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>

        <a href="/resume.pdf" download className="btn">
          Download Resume
        </a>

      </div>

      <div className="tech-stack">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
      </div>

    </section>
  );
}

export default Hero;