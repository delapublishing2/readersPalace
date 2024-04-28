// src/components/Header.js
import React from 'react';
import '.styles/HeaderSection.css'; 
import Button from './buttons/JoinButton.js'; 

const HeaderSection = ({ title, subtitle, imageSrc }) => {
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