// src/components/BenefitsSection.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/BenefitsSection.css';

const BenefitsSection = () => {
  const benefits = [
    { title: 'Benefit 1', description: 'Description for Benefit 1', icon: 'icon-path-1', image: 'image-path-1' },
    { title: 'Benefit 2', description: 'Description for Benefit 2', icon: 'icon-path-2', image: 'image-path-2' },
    // Add more benefits as needed
  ];

  return (
    <section className="benefits-section">
      <h2>Benefits of Joining Reader's Palace</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit">
            <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
            <img src={benefit.image} alt={benefit.title} className="benefit-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;