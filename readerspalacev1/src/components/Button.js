// src/components/Button.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/Button.css';

const Button = ({ onClick, children, className }) => {
  // Combine provided className with default button classes
  const buttonClass = `button ${className}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;