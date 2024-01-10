import React from 'react';
import './Hero.css'; 

const HeroRight = () => {
  return (
    <div className="hero-right">
      <div className="hero-right-image rotating-image">
        <img
          src="https://themewagon.github.io/restoran/img/hero.png"
          alt="hero"
          className="rotating-element"
        />
      </div>
    </div>
  );
};

export default HeroRight;
