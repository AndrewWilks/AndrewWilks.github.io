import React from 'react';
import '../assets/css/Home.css';
import HeroSection from '../utils/heroSection'

const UnderConstruction = () => {
  const Hero = {
    subtitle: "Building Something Great",
    title: "Under Construction",
    paragraph: "Hold on to your Akubras and get ready for some dust and dirt, because this page is currently undergoing some renovation work. I'm working hard to ensure that everything will be up and running soon, and I appreciate your patience. In the meantime, feel free to explore the rest of my website and immerse yourself in the stunning landscapes and unique culture of the Australian outback. I can't wait to show you what I have in store once the construction is complete!"
  }
  return (
    <div className="hero">
      <HeroSection hero={Hero} />
      <main>
        <section id="main" style={{ "height": "200vh" }}>This is the Body</section>
      </main>
    </div>
  );
};

export default UnderConstruction;