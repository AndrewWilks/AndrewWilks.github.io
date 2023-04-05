import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import '../assets/css/navBar.css';
import '../assets/css/utilities.css';

export const ScrollDown = () => {
  return (
    <div className='ScrollDown'>
      <div className='scroll-down'><span>scroll down <i className="gg-arrow-down-r" style={{ "--ggs": 1.5 }} /></span></div>
      <div className='scroll-down scroll-down--left'><span>scroll down <i className="gg-arrow-down-r" style={{ "--ggs": 1.5 }} /></span></div>
    </div>
  );
};

const NavBar = () => {
  // Create state to toggle menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <button id="nav-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <nav id="nav-menu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link to="">
          <button>Home</button>
        </Link>
        <Link to="about">
          <button>About</button>
        </Link>
        <Link to="projects">
          <button>Projects</button>
        </Link>
        <Link to="resume">
          <button>Resume</button>
        </Link>
        <Link to="contact">
          <button>Contact</button>
        </Link>
        <Link to="blog">
          <button>Blog</button>
        </Link>
        <Link to="404">
          <button>404 Error</button>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;