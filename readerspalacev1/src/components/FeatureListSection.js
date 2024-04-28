// src/components/FeatureListSection.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/FeatureListSection.css';

const FeatureListSection = () => {
  const features = ['Upcoming Events', 'Book Clubs', 'Contests', 'Latest Blog Posts'];

  return (
    <section className="feature-list-section">
      <h2>Key Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </section>
  );
};

export default FeatureListSection;