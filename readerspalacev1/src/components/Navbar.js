// src/components/Navbar.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/Navbar.css';

const Navbar = ({ navigate }) => {
  return (
    <div className="app-wrapper">
      <nav className="navigationbar">
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-6">
            <li><a onClick={() => navigate('home')}>Reader's Palace</a></li>
            <li><a onClick={() => navigate('home')}>Home</a></li>
            <li><a onClick={() => navigate('events')}>Events</a></li>
            <li><a onClick={() => navigate('bookclubs')}>Book Clubs</a></li>
            <li><a onClick={() => navigate('contests')}>Contests</a></li>
            <li><a onClick={() => navigate('blogs')}>Blogs</a></li>
            <li><a onClick={() => navigate('about-us')}>About Us</a></li>
          </ul>
        </div>
        <NavbarButton onClick={() => navigate('signup')}>Sign Up</NavbarButton>
      </nav>
    </div>
  );
};

export default Navbar;