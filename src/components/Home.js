import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import '../assets/css/utilities.css';

const Home = () => {
  return (
    <div className="home">
      <main>
        <section id="hero">
          <h2>G'day! I'm</h2>
          <h1>Andrew Wilks</h1>
          <p>An Aussie computer science student venturing through the digital Outback,<br/>Wrangling code as a full-stack developer in the making.</p>
          {/* <Link to="about"><button>About</button></Link> */}
          {/* <Link to="contact"><button>Contact</button></Link> */}
          
          <div className='scroll-down'><span>scroll down <i className="gg-arrow-down-r" style={{"--ggs": 0.6}}/></span></div>
          <div className='scroll-down scroll-down--left'><span>scroll down <i className="gg-arrow-down-r" style={{"--ggs": 0.6}}/></span></div>
        </section>
      </main>
    </div>
  );
};

export default Home;