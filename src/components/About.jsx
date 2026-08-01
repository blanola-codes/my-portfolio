import profile from "../assets/Passport size Photo.jpeg";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="profile-photo">
          <img
            src={profile}
            alt="Profile"
          />
        </div>

        <div className="about-content">
          <h3>Blanola Joylin Dsouza</h3>

          <h4>AI & ML Student</h4>

          <p>
            I'm a B.Tech student specializing in Artificial Intelligence and
            Machine Learning with a growing passion for frontend development.

            I enjoy building responsive web applications using HTML, CSS,
            JavaScript and React while continuously improving my programming
            and problem-solving skills.

            Alongside web development, I have worked on projects involving
            Python, C Programming and Arduino. I am currently looking for
            internship opportunities where I can learn, contribute and grow
            as a developer.
          </p>

          <div className="about-highlights">
            <p>🎓 AI & ML Engineering Student</p>
            <p>💻 Frontend Developer</p>
            <p>🌱 Currently Learning React & APIs</p>
            <p>🚀 Looking for Internship Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;