import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'; // Assuming you have a Footer component
import HomePage from './pages/home.js';
import AboutUsPage from './pages/AboutUs.js';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;