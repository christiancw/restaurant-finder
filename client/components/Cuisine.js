import React from 'react';
import CuisineType from './CuisineType';

export default function Cuisine (props){
  const cuisines = props.foodTypes;
  const handleClick = props.handleClick;
  console.log('CUISINES', props.foodTypes);
  return (
    <div id="cuisine">
      <h6>Cuisine/Food Type</h6>
      {
        cuisines.map(function(cuisine){
          return (
            <CuisineType
              key={cuisine.name}
              type={cuisine.name}
              count={cuisine.count}
              handleClick={handleClick}
              />
          );
        })
      }
    </div>
  )
}
