// src/components/GallerySection.js
import React from 'react';
import './styles/GallerySection.css'; // Import your CSS file

const GallerySection = () => {
  return (
    <div className="gallery-section">
      <h2>Our Gallery</h2>
      <div className="gallery-items">
        {/* Replace with your actual image paths */}
        <img src="/path/to/book-cover.jpg" alt="Book Cover" />
        <img src="/path/to/event-photo.jpg" alt="Event Photo" />
        <img src="/path/to/featured-author.jpg" alt="Featured Author" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default GallerySection;