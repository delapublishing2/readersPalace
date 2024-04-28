// src/pages/home.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/home.css'
import HeroSection from '../components/heroSection'
import FeatureSection from '../components/FeatureSection';
import FeatureListSection from '../components/FeatureListSection';
import BenefitsSection from '../components/BenefitsSection';
import CtaSection from '../components/CtaSection';
// Import other sections

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <FeatureListSection />
      <BenefitsSection />
      <CtaSection />
      {/* Include other sections here */}
    </div>
  );
};

export default Home;