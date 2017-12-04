import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <Sidebar />
          <Main />
        </div>
      </div>
    );
  }
}
