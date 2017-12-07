import React from 'react';

export default function CuisineType (props){
  const handleClick = props.handleClick;
  return (
    <div className="cuisine-type">
      <div onClick={handleClick} id={props.type}>
        {props.type}
        <span>
          {props.count}
        </span>
      </div>
    </div>
  )
}
