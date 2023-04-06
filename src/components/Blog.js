import React from 'react';
import '../assets/css/Home.css';
import HeroSection from '../utils/heroSection'

const Contacts = () => {
  const Hero = {
    subtitle: "Tales from the Digital Frontier",
    title: "My Blog",
    paragraph: "Howdy, welcome to my digital campfire, where I share stories and insights from my adventures in the digital outback. From wrangling code to exploring the latest developments in technology, I have plenty of tales to tell. I'll also be sharing my thoughts on everything from the latest tech trends to the cultural impact of technology. So, grab a billy and join me by the fire as we swap stories, ideas and insights. Who knows, you might just learn something new about the frontier of technology!"
  }

  return (
    <div className="blog">
      <main>
        <HeroSection hero={Hero} />
        <section id="main" style={{ "height": "200vh" }}>This is the Body</section>
      </main>
    </div>
  );
};

export default Contacts;