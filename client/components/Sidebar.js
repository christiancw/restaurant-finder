import React, { Component } from 'react';
import Cuisine from './Cuisine';
import Stars from './Stars';
import Payment from './Payment';

export default class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="col-3" id="sidebar">
        <Cuisine />
        <Stars />
        <Payment />
      </div>
    )
  }
}
