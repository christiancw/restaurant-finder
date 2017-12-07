import React from 'react';

export default function PaymentOption (props){
  return (
    <div className="sidebar-option" id={props.type} onClick={props.handleClick} >
      {props.type}
      {props.count}
    </div>
  )
}
