import React from 'react';
import CuisineType from './CuisineType';

export default function Cuisine (props){
  const cuisines = Object.keys(props.restaurants);
  console.log('CUISINES', props.restaurants);
  return (
    <div id="cuisine">
      <h6>Cuisine/Food Type</h6>
      {
        cuisines.map(function(cuisine){
          return (
            <CuisineType
              key={cuisine}
              type={cuisine}
              count={props.restaurants[cuisine]}
              />
          );
        })
      }
    </div>
  )
}
