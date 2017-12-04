import React from 'react';
import ResultItem from './ResultItem';

export default function Results (props){
  const restaurants = props.restaurants;
  console.log('RESTAURANTS', restaurants);
  return (
    <div id="results">
      Results
      {
        restaurants.map(function(restaurant){
          return (
            <ResultItem name={restaurant.name} />
          );
        })
      }
    </div>
  )
}
