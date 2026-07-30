import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    document.body.classList.toggle("dark");
  };


  return (
    <header className="site-header">

      <nav className="navbar">

        <div className="logo">
          BJD
        </div>


        <ul className={`nav-link ${menuOpen ? "active" : ""}`}>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>



        <button
          className="theme-toggle"
          aria-label="Toggle dark mode"
          onClick={toggleDarkMode}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>



        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          ☰
        </button>


      </nav>

    </header>
  );
}

export default Navbar;