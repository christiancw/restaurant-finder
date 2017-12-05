import React from 'react';
import CuisineType from './CuisineType';

export default function Cuisine (props){
  const cuisines = Object.keys(props.restaurants);
  console.log('CUISINES', props.restaurants);
  return (
    <div id="cuisine">
      Cuisine/Food Type
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
