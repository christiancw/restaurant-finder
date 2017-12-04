import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import initialState from './dummydata';

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }
  render() {
    const restaurants = this.state.restaurants;
    return (
      <div className="container">
        <Header />
        <div className="row">
          <Sidebar />
          <Main restaurants={restaurants} />
        </div>
      </div>
    );
  }
}
