import profile from "../assets/Passport size Photo.jpeg";

function About(){

return(

<section
id="about"
className="about-section"
>

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
I'm an AI & Machine Learning student with a strong interest in frontend
development and modern web technologies. I enjoy transforming ideas into
responsive, user-friendly websites using HTML, CSS, JavaScript, and React.

I'm continuously improving my skills by building real-world projects,
exploring new technologies, and writing clean, maintainable code. My goal is
to create intuitive digital experiences while growing as a full-stack
developer.
</p>
<div className="about-highlights">
  <p>🎓 AI & Machine Learning Student</p>
  <p>💻 Frontend Developer (React)</p>
  <p>🚀 Passionate about UI/UX & Web Development</p>
  <p>📍 Based in Karnataka, India</p>
</div>

</div>

</div>

</section>

);

}

export default About;