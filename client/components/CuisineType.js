import React from 'react';

export default function CuisineType (props){
  return (
    <div className="cuisine-type">
      {props.type}
      {props.count}
    </div>
  )
}
