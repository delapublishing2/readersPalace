// src/pages/AboutUs.js
import React from 'react';
import HeaderSection from '../components/HeaderSection.js';
import HeroSection from '../components/heroSection.js';


const AboutUs = () => {
    return (
      <div>
        <HeaderSection 
          title="About Us" 
          subtitle="Introducing Reader's Palace and its dedication to celebrating the love of literature."
          imageSrc="readerspalacev1/src/assets/ReadersPalaceContact.JPG" 
        />
        <p> hi</p>
        <HeroSection />
      </div>
    );
};

export default AboutUs;