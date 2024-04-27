// src/components/Navbar.js
import React from 'react';
import Button from './JoinButton';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/Navbar.css';

const Navbar = ({ navigate }) => {
  return (
    <div className="app-wrapper">
      <nav className="navigationbar">
        <div className="container mx-auto flex justify-between items-center">
          <Button onClick={() => navigate('home')}>Reader's Palace</Button>
          <ul className="flex space-x-6">
            <li><Button onClick={() => navigate('home')}>Home</Button></li>
            <li><Button onClick={() => navigate('events')}>Events</Button></li>
            <li><Button onClick={() => navigate('bookclubs')}>Book Clubs</Button></li>
            <li><Button onClick={() => navigate('contests')}>Contests</Button></li>
            <li><Button onClick={() => navigate('blogs')}>Blogs</Button></li>
            <li><Button onClick={() => navigate('about-us')}>About Us</Button></li>
          </ul>
          {/* Add SearchBarComponent here */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;