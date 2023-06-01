import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/navBar.css';

const NavBar = () => {
  // Create state to toggle menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    const navIcon = document.querySelector('.nav-icon');
    const navLines = document.querySelectorAll('.nav-icon__line');
    const navLinks = document.querySelector('.nav-links');

    navLines.forEach(line => line.classList.toggle('nav-container--open'));
    navIcon.classList.toggle('nav-container--open');
    navLinks.classList.toggle('nav-container--open');

    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className={`nav-container${showMenu ? ' nav-container--open' : ''}`}>
        <div className="nav-icon" onClick={toggleMenu}>
          <div className="nav-icon__line"></div>
          <div className="nav-icon__line"></div>
          <div className="nav-icon__line"></div>
        </div>
        <nav className="nav-links">
          <Link to="">Home</Link>
          <Link to="about">About</Link>
          <Link to="projects">projects</Link>
          <Link to="resume">resume</Link>
          <Link to="contact">contact</Link>
          <Link to="blog">blog</Link>
          <Link to="404">404</Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;