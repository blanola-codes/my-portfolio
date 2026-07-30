import profilePhoto from "../assets/Passport size Photo.jpeg";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <figure className="profile-photo">
        <img
          src={profilePhoto}
          alt="Profile photo of Blanola Joylin Dsouza"
          width="200"
          height="200"
        />
        <figcaption>Blanola Joylin Dsouza</figcaption>
      </figure>

      <p>
        I love building things on the web. Currently learning HTML, CSS,
        JavaScript, and React.
      </p>
    </section>
  );
}

export default About;