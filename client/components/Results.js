import React from 'react';
import ResultItem from './ResultItem';

export default function Results (props){
  const restaurants = props.restaurants;
  console.log('RESTAURANTS', restaurants);
  return (
    <div id="results">
      {
        restaurants.map(function(restaurant){
          return (
            <ResultItem key={restaurant.name} name={restaurant.name} />
          );
        })
      }
    </div>
  )
}
