import React from 'react';
import '../assets/css/Home.css';
import HeroSection from '../utils/heroSection'

const UnderConstruction = () => {
  const Hero = {
    subtitle: "Lost in the Outback",
    title: "Page Not Found",
    paragraph: "G'day, mate! It looks like you've stumbled into the vast expanse of the Australian outback, but unfortunately, I can't seem to find the page you're looking for. I apologize for any inconvenience this may have caused you. Why not head back to my homepage and explore more of what I have to offer? Who knows, you might just discover a hidden gem that you didn't even know existed!"
  }
  return (
    <div className="404-NotFound">
      <HeroSection hero={Hero} />
      <main>
        <section id="main" style={{ "height": "200vh" }}>This is the Body</section>
      </main>
    </div>
  );
};

export default UnderConstruction;