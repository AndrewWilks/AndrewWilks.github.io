import React from 'react';
import '../assets/css/Home.css';
import HeroSection from '../utils/heroSection'
import pageDate from '../data/home.json'

const { Hero } = pageDate;

const Home = () => {
  return (
    <div className="home">
      <HeroSection hero={Hero} />
    </div>
  );
};

export default Home;