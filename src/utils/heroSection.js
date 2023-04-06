import React from 'react';
import '../assets/css/Home.css';

const HeroSection = (props) => {
  return (
    <section id="hero">
      <h3>{props.hero.subtitle}</h3>
      <h1>{props.hero.title}</h1>
      <p>{props.hero.paragraph}</p>
    </section>
  );
};

export default HeroSection;