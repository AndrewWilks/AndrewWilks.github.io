import React from 'react';
import '../assets/css/Home.css';
import HeroSection from '../utils/heroSection'

const Contacts = () => {
  const Hero = {
    subtitle: "Drop Me a Line",
    title: "Contact Me",
    paragraph: "Have a question? Want to learn more about my work or experience? Ready to round up some digital cattle together? Great! Drop me a line below and I'll get back to you as soon as I can. Let's work together to build something amazing in the digital outback!"
  }
  return (
    <div className="contact">
      <main>
        <HeroSection hero={Hero} />
        <section id="main" style={{ "height": "200vh" }}>This is the Body</section>
      </main>
    </div>
  );
};

export default Contacts;