// src/components/GallerySection.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/GallerySection.css';

const GallerySection = () => {
  const images = [
    'image-path-1',
    'image-path-2',
    // Add more image paths as needed
  ];

  return (
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;