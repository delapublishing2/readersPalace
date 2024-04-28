// src/components/NavbarButton.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/NavbarButton.css';

const NavbarButton = ({ onClick, children, className = '', type = 'button' }) => {
  const buttonClass = `navbar-button ${className}`;
  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default NavbarButton;