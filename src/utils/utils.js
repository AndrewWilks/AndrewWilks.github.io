import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/navBar.css';

const NavBar = () => {
  return (
    <header>
        <nav>
            <Link to=""><button>Home</button></Link>
            <Link to="about"><button>About</button></Link>
            <Link to="projects"><button>Projects</button></Link>
            <Link to="resume"><button>Resume</button></Link>
            <Link to="contact"><button>Contact</button></Link>
            <Link to="blog"><button>Blog</button></Link>
            <Link to="404"><button>404 Error</button></Link>
        </nav>
    </header>
  );
};

export default NavBar;