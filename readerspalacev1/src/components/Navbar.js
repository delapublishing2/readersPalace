// src/components/Navbar.js
import React from 'react';
import Button from './Button';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/Navbar.css';

const Navbar = ({ navigate }) => {
  return (
    <nav>
      <Button onClick={() => navigate('home')}>Home</Button>
      <Button onClick={() => navigate('about-us')}>About Us</Button>
      {/* Add other navigation buttons */}
    </nav>
  );
};

export default Navbar;