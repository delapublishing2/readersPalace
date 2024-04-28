// src/App.js
import React, { useState } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar navigate={navigate} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'about-us' && <AboutUs />}
      {/* Add other conditional renders for different pages */}
      <Footer />
    </div>
  );
}

export default App;