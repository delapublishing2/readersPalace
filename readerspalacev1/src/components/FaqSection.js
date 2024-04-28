// src/components/FaqSection.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/FaqSection.css';

const FaqSection = () => {
  const faqs = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    // Add more FAQs as needed
  ];

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </section>
  );
};

export default FaqSection;