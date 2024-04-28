// src/App.js
import React, { useState } from 'react';
import Home from './pages/home';
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
  {currentPage === 'home' && <Home />} // This will render the Home component if currentPage is 'home'
  {currentPage === 'AboutUs' && <AboutUs />} // This will render the AboutUs component if currentPage is 'AboutUs'
  {/* Add other conditional renders for different pages */}
      <Footer />
    </div>
  );
}

export default App;