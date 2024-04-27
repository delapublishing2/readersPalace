// src/components/HeroSection.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/heroSection.css'; 
import Button from './Button'; // Assuming Button is in the same directory

const HeroSection = () => {
  return (
    <section id="welcome" className="herosection">
      <div className="hero-section-header">
        <h1>Welcome to Reader's</h1>
        <h1> Palace</h1>
      </div>
      <div className="hero-section-text">
        <span>Unlock the Majesty of Storytelling at Reader's Palace - A regal</span>
        <span> haven for book lovers and aspiring authors. </span>
      </div>
      <a href="/signup">
        <Button className="join-button">Join the Community</Button>
      </a>
    </section>
  );
};

export default HeroSection;