import React from 'react';
import './MasterChief.css';
import MasterChiefCard from '../MasterChief/MasterChiefCard'; // Adjust the path based on your project structure

import ChiefImages from '../../utils/ChiefDetails/chiefdetails.json';

const MasterChief = () => {
  return (
    <div className='master-chief'>
      <div className="head-master-chief">
        <h4 className='team-member'>Team Members</h4>
        <h2 className='dark-blue'>Our Master Chefs</h2>
      </div>
      <div className="bottom-master-chief">
        {ChiefImages && ChiefImages.map((elem, index) => {
          return <MasterChiefCard key={index} data={elem} />;
        })}
      </div>
    </div>
  );
};

export default MasterChief;
