// src/components/Navbar.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="app-wrapper">
      <nav className="navigationBar">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="brand">
            <span>Reader's Palace</span>
          </Link>
          <ul className="nav-links">
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/book-clubs">Book Clubs</Link></li>
            <li><Link to="/contests">Contests</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/authors-spotlight">Author's Spotlight</Link></li>
            <li><Link to="/forums">Forums</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
          {/* Include SearchBarComponent if needed */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;