import React, { Component } from 'react';
import Stats from './Stats';
import Results from './Results';
import ShowMore from './ShowMore';

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    console.log('props', this.props);
    return (
      <div className="col-9" id="main">
        <Stats number={this.props.restaurants.length} />
        <Results restaurants={this.props.restaurants} />
        <ShowMore />
      </div>
    )
  }
}
