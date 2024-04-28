// src/components/HeroSection.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/heroSection.css'; 
import Button from './buttons/JoinButton.js'; // Assuming Button is a custom component styled according to your project's needs

const HeroSection = () => {
  return (
    <section className="herosection">
      <div className="background-image"></div> {/* Background image is handled via CSS */}
      <div className="overlay"></div> {/* Overlay is handled via CSS */}
      <div className="content">
        <h1>Welcome to Reader's Palace</h1>
        <p>Unlock the Majesty of Storytelling at Reader's Palace - A regal haven for book lovers.</p>
        <a href="/signup" className="join-button">
          <Button>Join the Community</Button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;