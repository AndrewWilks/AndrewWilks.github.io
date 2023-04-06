import React from 'react';
import '../assets/css/Home.css';
import HeroSection from '../utils/heroSection'

const Projects = () => {
  const Hero = {
    subtitle: "Venture into my Digital Corral",
    title: "My Projects",
    paragraph: "Welcome to my digital corral! Here's where I showcase my herd of projects - from personal to university - and wrangle the most innovative ones to share with you. Take a look around, let me know what you think, and feel free to give me a shout if you want to learn more about how I rounded up these projects."
  }
  return (
    <div className="hero">
      <main>
        <HeroSection hero={Hero} />
        <section id="main" style={{ "height": "200vh" }}>This is the Body</section>
      </main>
    </div>
  );
};

export default Projects;