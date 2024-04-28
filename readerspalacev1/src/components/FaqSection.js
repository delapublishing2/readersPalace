// src/components/FaqSection.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/FaqSection.css'; // Import your CSS file

const FaqSection = () => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>Question 1</h3>
        <p>Answer to question 1...</p>
      </div>
      <div className="faq-item">
        <h3>Question 2</h3>
        <p>Answer to question 2...</p>
      </div>
      {/* Add more questions as needed */}
    </div>
  );
};

export default FaqSection;