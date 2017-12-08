import React from 'react';

export default function CuisineType (props){
  const handleClick = props.handleClick;
  return (
    <div className="cuisine-type">
      <div onClick={handleClick} id={props.type} className="sidebar-option one-row">
        <span>
          {props.type}
        </span>
        <span>
          {props.count}
        </span>
      </div>
    </div>
  )
}
