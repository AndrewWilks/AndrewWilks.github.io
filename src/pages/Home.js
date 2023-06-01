import React from 'react';
import '../assets/css/Home.css';
import HeroSection from '../utils/heroSection'

const Home = () => {
  const Hero = {
    subtitle: "Welcome to my Digital Homestead",
    title: "G'day, I'm Andrew Wilks",
    paragraph: "An undergraduate from the rugged Australian outback, carving my path in the vast digital wilderness. Currently focusing on frontend development, with the compass set towards becoming a full-stack developer in the future. Feel free to explore my digital homestead, peek into my portfolio, and learn more about my journey. So, grab your Akubra, mate! We're heading into the exciting frontier of technology together."
  }

  return (
    <div className="home">
      <HeroSection hero={Hero} />
    </div>
  );
};

export default Home;