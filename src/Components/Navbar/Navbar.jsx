import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div>
        <img src="https://res.cloudinary.com/dbithmxnp/image/upload/v1738522762/Portfolio--_wrrlr8.png" alt="Portfolio" />
      </div>

      <div
        className={`menu-toggle ${isMobileMenuOpen ? "close" : ""}`}
        id="mobile-menu"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav ${isMobileMenuOpen ? "nav-mobile-open" : ""}`}>
        <span className="close-btn" onClick={closeMobileMenu}>
          &times;
        </span>
<div className="nav-items">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#projects_section">Projects</a>
        </li>
       <li className="nav-item" id="skills">
  <a href="#skills_section">Tech Stack</a>
</li>
        <li className="nav-item">
          <a href="#">Experience</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact Us</a>
        </li>
        </div>
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://web.telegram.org"
            target="_blank"
            className="social-icon"
          >
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            className="social-icon"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>

        <div className="search-container">
          <input className="search-input" type="text" placeholder="Search.." />
          <i className="fas fa-search" id="search-icon"></i>
        </div>

        {/* Mobile Theme & CV Download */}
        {/* Desktop Theme & CV Preview */}
        <div className="ThemeCV-mb">
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkTheme ? "🌞" : "🌙"}
          </button>
          <button
            className="DownloadCV"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1GqluJZAE23pn55dW6wN5ZGDdoxPKLSye/view?usp=sharing",
                "_blank"
              );
            }}
          >
            View CV!
          </button>
        </div>
      </ul>

      {/* Desktop Theme & CV Download */}
      {/* Desktop Theme & CV Preview */}
      <div className="ThemeCV">
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkTheme ? "🌞" : "🌙"}
        </button>
        <button
          className="DownloadCV"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1GqluJZAE23pn55dW6wN5ZGDdoxPKLSye/view?usp=sharing",
              "_blank"
            );
          }}
        >
          View CV!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
