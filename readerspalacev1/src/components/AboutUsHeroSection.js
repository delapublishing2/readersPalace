// src/components/AboutUsHeroSection.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/AboutUsHeroSection.css'; 
import Button from './JoinButton'; // Assuming Button is a custom component styled according to your project's needs

const AboutUsHeroSection = () => {
  return (
    <section className="herosection">
      <div className="background-image"></div> {/* Background image is handled via CSS */}
      <div className="overlay"></div> {/* Overlay is handled via CSS */}
      <div className="content">
        <h1>About Us</h1>
        <p>Learn more about Reader's Palace and our mission to promote the love of reading.</p>
        <a href="/signup" className="join-button">
          <Button>Join the Community</Button>
        </a>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;