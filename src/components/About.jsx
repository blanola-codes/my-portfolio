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

          <h4>AI & Machine Learning Student</h4>

          <p>
            I'm currently pursuing my B.Tech in Artificial Intelligence &
            Machine Learning with a strong passion for Frontend Development.

            I enjoy creating responsive, accessible and visually appealing
            web applications using HTML, CSS, JavaScript and React.

            My goal is to become a skilled Full Stack Developer while
            continuously improving my problem-solving skills and learning
            modern technologies.
          </p>

          <div className="about-highlights">

            <div className="highlight-card">
              🎓
              <h5>Education</h5>
              <p>B.Tech AI & ML</p>
            </div>

            <div className="highlight-card">
              💻
              <h5>Frontend</h5>
              <p>React Developer</p>
            </div>

            <div className="highlight-card">
              🚀
              <h5>Goal</h5>
              <p>Software Engineer</p>
            </div>

            <div className="highlight-card">
              🌱
              <h5>Learning</h5>
              <p>React • APIs • Git</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;