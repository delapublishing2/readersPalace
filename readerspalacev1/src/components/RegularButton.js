// src/components/RegularButton.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/RegularButton.css';

const RegularButton = ({ onClick, children, className = '', type = 'button' }) => {
  const buttonClass = `regular-button ${className}`;
  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default RegularButton;