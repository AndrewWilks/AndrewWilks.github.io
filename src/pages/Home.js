import React from 'react';
import '../assets/css/Home.css';
import HeroSection from '../utils/heroSection'

const Home = () => {
  const Hero = {
    subtitle: "Welcome to my Digital Homestead",
    title: "G'day, I'm Andrew Wilks",
    paragraph: "As a computer science student hailing from the rugged Australian outback, I'm thrilled to have you here. I'm a full-stack developer in the making, wrangling code and blazing a trail through the digital wilderness. Take a look around my digital homestead to explore my portfolio, learn more about my journey and get in touch. So, grab your Akubra and join me for a journey through the frontier of technology!"
  }

  return (
    <div className="home">
      <HeroSection hero={Hero} />
    </div>
  );
};

export default Home;