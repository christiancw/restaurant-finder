import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import initialState from './dummydata';

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
    this.setLocation = this.setLocation.bind(this);
  }

  componentWillMount() {
    const setLocation = this.setLocation;
    navigator.geolocation.getCurrentPosition(function(position) {
      setLocation(position.coords);
    });
  }

  setLocation(coords){
    this.setState({
      userLocation: coords
    });
  }

  render() {
    console.log('app state', this.state)
    const restaurants = this.state.restaurants;
    return (
      <div className="container">
        <Header />
        <div className="row">
          <Sidebar results={restaurants} />
          <Main restaurants={restaurants} />
        </div>
      </div>
    );
  }
}
