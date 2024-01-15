import React from 'react';
import './Hero.css';

const HeroRight = () => {
  return (
    <div className="hero-right">
      <div className="hero-right-image rotating-image">
        <img
          src="/Images/hero.png" // Use relative path for better portability
          alt="Hero"
          className="rotating-element"
        />
      </div>
    </div>
  );
};

export default HeroRight;
