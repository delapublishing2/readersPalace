import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/home.css'
import HeroSection from '../components/heroSection'
import FeatureSection from '../components/FeatureSection';
// Import other sections

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      {/* Include other sections here */}
    </div>
  );
};

export default Home;