// src/components/Button.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/Button.css';


const Button = ({ onClick, children, className = '', type = 'button' }) => {
  const buttonClass = `join-button ${className}`; // Use join-button class for base styling
  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;