import React from 'react';
import '../assets/css/Home.css';
import HeroSection from '../utils/heroSection'

const About = () => {
  const Hero = {
    subtitle: "My Trail Through the Digital Wilderness",
    title: "About Me",
    paragraph: "Welcome to my homestead, where I'm excited to share my journey through the digital wilderness. From my roots in the Australian outback to my current pursuit of a computer science degree, I've always been fascinated by technology and how it can bring people together. So, come along with me as I blaze a trail through the frontier of tech - I promise there'll be plenty of adventure and innovation along the way! Let's ride into the sunset of technology together!"
  }

  return (
    <div className="about">
      <main>
        <HeroSection hero={Hero} />
        <section id="main" style={{ "height": "200vh" }}>This is the Body</section>
      </main>
    </div>
  );
};

export default About;