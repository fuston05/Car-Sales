import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        onClick= {() => {props.buyItem({
          id: props.feature.id,
          name: props.feature.name,
          price: props.feature.price
        })}} 
        className="button"
        >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
