// src/components/CtaSection.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/CtaSection.css';

const CtaSection = () => {
    return (
        <section className="cta-section">
            <h2>Join Our Book Club or Subscribe to Our Newsletter</h2>
            <p>Stay updated with the latest news and events at Reader's Palace. Join our book club or subscribe to our newsletter today!</p>
            <button className="cta-button">Join the Book Club</button>
            <button className="cta-button">Subscribe to Newsletter</button>
        </section>
    );
};

export default CtaSection;