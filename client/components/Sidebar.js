import React, { Component } from 'react';
import Cuisine from './Cuisine';
import Stars from './Stars';
import Payment from './Payment';

export default class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.cuisineCounter = this.cuisineCounter.bind(this);
    this.paymentCounter = this.paymentCounter.bind(this);
  }

  cuisineCounter (restaurantsArr){
    const cuisineKinds = {};
    restaurantsArr.forEach(restaurant => {
      if (cuisineKinds[restaurant.type]){
        cuisineKinds[restaurant.type] += 1;
      }
      else {
        cuisineKinds[restaurant.type] = 1;
      }
    })
    return cuisineKinds;
  }

  paymentCounter (restaurantsArr){
    const paymentCards = {};
    restaurantsArr.forEach(restaurant => {
      restaurant.paymentOptions.forEach(paymentOption => {
        if (paymentCards[paymentOption]){
          paymentCards[paymentOption] += 1;
        }
        else {
          paymentCards[paymentOption] = 1;
        }
      })
    })
    return paymentCards;
  }

  render() {
    console.log('FILTERRESULTS-->', this.paymentCounter(this.props.results))
    const filteredResults = this.cuisineCounter(this.props.results);
    const paymentTypes = this.paymentCounter(this.props.results);
    return (
      <div className="col-3" id="sidebar">
        <Cuisine restaurants={filteredResults} />
        <Stars />
        <Payment paymentOptions={paymentTypes} />
      </div>
    )
  }
}
