// src/components/Header.js
import React from 'react';
import '/Users/jazzyme/Documents/GitHub/readersPalace/readerspalacev1/src/styles/Header.css'; 
import Button from './buttons/JoinButton.js'; 

const HeaderSection = ({ imageSrc }) => {
    return (
      <div className="header-section">
        <img src={imageSrc} alt="Header Image" />
        <h1>{title}</h1>
      <p>{subtitle}</p>
      <Button />
    </div>
  );
};

export default HeaderSection;