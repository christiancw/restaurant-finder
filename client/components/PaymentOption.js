import React from 'react';

export default function PaymentOption (props){
  return (
    <div className="sidebar-option one-row" id={props.type} onClick={props.handleClick} >
      <span>
        {props.type}
      </span>
      <span>
        {props.count}
      </span>
    </div>
  );
}
