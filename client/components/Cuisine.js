import React from 'react';
import CuisineType from './CuisineType';

export default function Cuisine (props){
  const cuisines = Object.keys(props.foodTypes[0].data);
  console.log('CUISINES', props.foodTypes);
  return (
    <div id="cuisine">
      <h6>Cuisine/Food Type</h6>
      {
        cuisines.map(function(cuisine){
          return (
            <CuisineType
              key={cuisine}
              type={cuisine}
              />
          );
        })
      }
    </div>
  )
}
