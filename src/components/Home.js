import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <main>
        <section id="hero">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a software engineer with a passion for creating amazing things.</p>
          <Link to="about"><button>About</button></Link>
          <Link to="contact"><button>Contact</button></Link>
        </section>
      </main>
    </div>
  );
};

export default Home;