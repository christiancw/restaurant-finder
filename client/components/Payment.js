import React from 'react';
import PaymentOption from './PaymentOption';

export default function Payment (props){
  const paymentOptions = props.paymentTypes;
  const handleClick = props.handleClick;
  return (
    <div id="payment">
      <h6>Payment Options</h6>
      {
        paymentOptions.map(function(cardType){
          return (
            <PaymentOption
              key={cardType.name}
              type={cardType.name}
              count={cardType.count}
              handleClick={handleClick}
              />
          );
        })
      }
    </div>
  );
}
