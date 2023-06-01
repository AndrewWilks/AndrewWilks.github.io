import React from 'react';
import '../assets/css/Home.css';
import '../assets/css/Resume.css';
import { HeroSection_Blog as HeroSection } from '../utils/heroSection'
import {
  ResumeSkills,
  ResumeProgramming,
  ResumeSoftware,
  ResumeSpoken,
  ResumeEducation,
  ResumeHistory,
  ResumeAccomplishments,
  ResumeName,
  ResumeContact
} from '../utils/ResumeParts'

const Resume = () => {
  const Hero = {
    subtitle: "Saddle Up and Take a Look",
    title: "My Digital Resume",
    paragraph: "Howdy, thanks for taking a look at my digital resume! This page serves as a digital corral for all my work and educational history. I've rounded up my skills and experience on this page, so you can see what I'm capable of. Whether it's wrangling code or communicating with clients, I'm always up for a challenge. So, saddle up and take a look to see if I'm the right cowboy for your herd. If you have any questions or comments, feel free to give me a shout!"
  }
  return (
    <div className="resume">
      <HeroSection hero={Hero} />
      <main>
        <section className="container"><ResumeName /></section>
        <section className="container resume">
          <div className="resume-side">
            <ResumeContact />
            <ResumeSpoken />
            <ResumeSkills />
            <ResumeProgramming />
            <ResumeSoftware />
          </div>
          <div className="resume-main">
            <ResumeEducation />
            <ResumeHistory />
            <ResumeAccomplishments />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;