// src/components/Navbar.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/Navbar.css'

const Navbar = ({ navigate }) => {
  return (
    <nav>
      <button onClick={() => navigate('home')}>Home</button>
      <button onClick={() => navigate('about-us')}>About Us</button>
      {/* Add other navigation buttons */}
    </nav>
  );
};

export default Navbar;