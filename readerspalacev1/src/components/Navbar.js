// src/components/Navbar.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/Navbar.css';
import NavbarButton from './NavbarButton.js';
const Navbar = ({ navigate }) => {
  return (
    <div className="app-wrapper">
    <nav className="navigationbar">
  <div className="container mx-auto flex justify-between items-center">
    <div>
      <li><a className="readers-palace" onClick={() => navigate('home')}>Reader's Palace</a></li>
    </div>
    <div>
      <ul className="flex space-x-6">
        <li><a className="navbar-link" onClick={() => navigate('home')}>Home</a></li>
        <li><a className="navbar-link" onClick={() => navigate('events')}>Events</a></li>
        <li><a className="navbar-link" onClick={() => navigate('bookclubs')}>Book Clubs</a></li>
        <li><a className="navbar-link" onClick={() => navigate('contests')}>Contests</a></li>
        <li><a className="navbar-link" onClick={() => navigate('blogs')}>Blogs</a></li>
        <li><a className="navbar-link" onClick={() => navigate('about-us')}>About Us</a></li>
      </ul>
    </div>
    <div>
      <li> <NavbarButton onClick={() => navigate('signup')}>Sign Up</NavbarButton></li>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;