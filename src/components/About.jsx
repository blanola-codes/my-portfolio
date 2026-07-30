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

I enjoy creating responsive websites and
learning modern frontend technologies.

Currently building projects using React,
JavaScript and CSS.

</p>

</div>

</div>

</section>

);

}

export default About;