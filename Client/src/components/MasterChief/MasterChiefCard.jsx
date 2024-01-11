import React from 'react';

const MasterChiefCard = (props) => {
  console.log(props.data);
  return (
    <div className="master-chief-card">
      <div className="card-image">
        <img src={props.data.image} alt="chief" />
      </div>
      <div className="designation">
        <h4>{props.data.fullName}</h4>
        <p>{props.data.designation}</p>
      </div>
    </div>
  );
}

export default MasterChiefCard;
