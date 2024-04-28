// src/pages/AboutUs.js
import React from 'react';
import HeaderSection from '../components/HeaderSection.js';
import HeroSection from '../components/heroSection.js';
import ReadersPalaceAboutUs from '.readerspalacev1/src/assets/ReadersPalaceAboutUs.JPG';


const AboutUs = () => {
    return (
      <div>
<HeaderSection 
  title="About Us" 
  subtitle="Introducing Reader's Palace and its dedication to celebrating the love of literature."
  imageSrc={ReadersPalaceContact} 
/>
        <p> hi</p>
        <HeroSection />
      </div>
    );
};

export default AboutUs;