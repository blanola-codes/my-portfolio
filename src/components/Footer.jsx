import {

FaGithub,

FaLinkedin,

FaEnvelope

} from "react-icons/fa";

function Footer(){

const year=new Date().getFullYear();

return(

<footer className="site-footer">

<h3>

Blanola Joylin Dsouza

</h3>

<p>

AI & ML Student • Frontend Developer

</p>

<div className="footer-icons">

<a href="https://github.com/blanola-codes" target="_blank"
rel="noopener noreferrer">

<FaGithub/>

</a>

<a href="https://www.linkedin.com/in/blanola-joylin-dsouza-92278531a/" target="_blank"
rel="noopener noreferrer">

<FaLinkedin/>

</a>

<a href="mailto:blanolajoylindsouza@hotmail.com" target="_blank"
rel="noopener noreferrer">

<FaEnvelope/>

</a>

</div>

<p>

© {year} All Rights Reserved

</p>

</footer>

);

}

export default Footer;