import React from 'react';
import PaymentOption from './PaymentOption';

export default function Payment (props){
  const paymentOptions = Object.keys(props.paymentOptions);
  return (
    <div id="payment">
      <h6>Payment Options</h6>
      {
        paymentOptions.map(function(cardType){
          return (
            <PaymentOption
              key={cardType}
              type={cardType}
              count={props.paymentOptions[cardType]}
              />
          );
        })
      }
    </div>
  );
}
