import React from 'react';
import '../assets/css/Home.css';
import HeroSection from '../utils/heroSection'

const Resume = () => {
  const Hero = {
    subtitle: "Saddle Up and Take a Look",
    title: "My Digital Resume",
    paragraph: "Howdy, thanks for taking a look at my digital resume! This page serves as a digital corral for all my work and educational history. I've rounded up my skills and experience on this page, so you can see what I'm capable of. Whether it's wrangling code or communicating with clients, I'm always up for a challenge. So, saddle up and take a look to see if I'm the right cowboy for your herd. If you have any questions or comments, feel free to give me a shout!"
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

export default Resume;