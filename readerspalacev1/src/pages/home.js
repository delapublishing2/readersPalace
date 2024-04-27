import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/home.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/heroSection'
// Import other sections

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* Include other sections here */}
      <Footer />
    </div>
  );
};

export default Home;