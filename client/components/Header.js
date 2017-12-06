import React, { Component } from 'react';
import Search from './Search';

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(evt){
    this.props.setQuery(evt.target.value)
  }

  render() {
    console.log('whats here', this.props)
    return (
      <nav className="navbar row" id="header">
        <Search
          handleSearch={this.handleSearch} />
      </nav>
    )
  }
}
