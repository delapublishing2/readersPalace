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
      // Inside your heroSection.js component
<p>Unlock the Majesty of Storytelling at Reader's Palace - A regal haven for book lovers.<br /><br />Explore a world where every story matters, and become part of a community that cherishes the art of storytelling.</p>
      </div>
      <a href="/signup">
        <Button className="join-button">Join the Community</Button>
      </a>
    </section>
  );
};

export default HeroSection;