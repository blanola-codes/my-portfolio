import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <p>
        &copy; {year} Blanola Joylin Dsouza. Built with React ❤️
      </p>

      <div className="footer-icons">

        <a
          href="https://github.com/blanola-codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/blanola-joylin-dsouza-92278531a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

    </footer>
  );
}

export default Footer;