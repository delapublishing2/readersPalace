// src/components/HeaderSection.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/HeaderSection.css'; 
import Button from './buttons/JoinButton.js'; 

const HeaderSection = ({ title, subtitle, imageSrc }) => {
    return (
      <div className="header-section" style={{ backgroundImage: `url(${imageSrc})` }}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Button />
      </div>
    );
};

export default HeaderSection;