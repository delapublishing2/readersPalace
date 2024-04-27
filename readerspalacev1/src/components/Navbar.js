import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/Navbar.css'; // Adjust the path as necessary based on your project structure

function Navbar({ setCurrentPage }) {
  return (
    <nav>
      <button onClick={() => setCurrentPage('Home')}>Home</button>
      <button onClick={() => setCurrentPage('AboutUs')}>About Us</button>
      // Add other buttons similarly
    </nav>
  );
}

export default Navbar;