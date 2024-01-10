import React from 'react';
import './HomeServices.css';
import ServicesHome from '../HomeService/ServiesHome'; // Fix the typo in the import statement

import Services from '../../utils/HomeServices/services.json';

const HomeServices = () => {
  return (
    <div className="home-service">
      <div className="services">
        {Services && Services.map((elem, index) => {
          return <ServicesHome key={index} data={elem} />;
        })}
      </div>
    </div>
  );
};

export default HomeServices;
