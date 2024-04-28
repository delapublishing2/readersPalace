// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="app-wrapper">
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/events">Events</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/book-clubs">Book Clubs</Link>
      <Link to="/contests">Contests</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/authors-spotlight">Authors Spotlight</Link>
      <Link to="/forums">Forums</Link>
      <Link to="/signup">Signup</Link>
      {/* Add more links as needed */}
    </div>
  );
};

export default Navbar;