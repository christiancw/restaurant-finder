import React from 'react';

export default function PaymentOption (props){
  return (
    <div className="payment-option">
      {props.type}
      {props.count}
    </div>
  )
}
