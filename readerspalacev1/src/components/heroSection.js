// src/components/HeroSection.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/heroSection.css'; // Assuming you are using plain CSS

const HeroSection = () => {
  return (
    <div className="herosection">
        <div className="hero-section-header">
        <h1>Welcome to Reader's Palace</h1>
        </div>
     <div className="hero-section-text">
     <p>Explore the world of books and join our community!</p>
     </div>
     
      {/* Add more elements as needed */}
    </div>
  );
};

export default HeroSection;