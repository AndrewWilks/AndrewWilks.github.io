import React from 'react';
import '../assets/css/Home.css';
import { ScrollDown } from "../utils/utils"

const Home = () => {
  return (
    <div className="home">
      <main>
        <section id="hero">
          <h5>Welcome to my Digital Homestead</h5>
          <h1>G'day, I'm Andrew Wilks</h1>
          <p>As a computer science student hailing from the rugged Australian outback, I'm thrilled to have you here. I'm a full-stack developer in the making, wrangling code and blazing a trail through the digital wilderness. Take a look around my digital homestead to explore my portfolio, learn more about my journey and get in touch. So, grab your Akubra and join me for a journey through the frontier of technology!</p>
          <ScrollDown />
        </section>
        <section id="main" style={{ "height": "200vh" }}>This is the Body</section>
      </main>
    </div>
  );
};

export default Home;