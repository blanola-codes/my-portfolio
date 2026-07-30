import profile from "../assets/Passport size Photo.jpeg";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="profile-photo">
          <img src={profile} alt="Blanola Joylin Dsouza" />
        </div>

        <div className="about-content">
          <h3>Blanola Joylin Dsouza</h3>

          <p>
            I love building things on the web. Currently learning HTML,
            CSS, JavaScript and React.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;