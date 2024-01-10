import React from 'react';
import { FaUtensils, FaHamburger, FaShoppingCart, FaClock } from 'react-icons/fa';

const iconMap = {
  "FaUtensils": <FaUtensils />,
  "FaHamburger": <FaHamburger />,
  "FaShoppingCart": <FaShoppingCart />,
  "FaClock": <FaClock />,
};

const ServiesHome = (props) => {
  const iconComponent = iconMap[props.data.icon] || null;

  return (
    <div className="service-home">
      {iconComponent && <div className="icon-container">{iconComponent}</div>}
      <h5 className='service-title'>{props.data.title}</h5>
      <p>{props.data.desc}</p>
    </div>
  );
};

export default ServiesHome;
