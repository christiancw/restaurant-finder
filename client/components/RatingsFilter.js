import React from 'react';
import Stars from './Stars';

export default function RatingsFilter (props){
  const filterByRating = props.filterByRating;
  return (
    <div id="ratings">
      <h6>Rating</h6>
        <Stars starNumber={0} filterByRating={filterByRating} />
        <Stars starNumber={1} filterByRating={filterByRating} />
        <Stars starNumber={2} filterByRating={filterByRating} />
        <Stars starNumber={3} filterByRating={filterByRating} />
        <Stars starNumber={4} filterByRating={filterByRating} />
        <Stars starNumber={5} filterByRating={filterByRating} />
    </div>
  );
}
