import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
// import initialState from './dummydata';

const initialState = {
  searchResults: {
    hits: [],
    nbHits: 0
  }
};

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
    // this.setLocation = this.setLocation.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  // componentWillMount() {
  //   const setLocation = this.setLocation;
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     setLocation(position.coords);
  //   });
  // }

  componentDidMount() {
    const algoliasearch = require('algoliasearch');
    const algoliasearchHelper = require('algoliasearch-helper');
    const client = algoliasearch('KBNJ9HM3SF', 'ea8fd6f86e6d428e54255b7707770011');
    const helper = algoliasearchHelper(client, 'restaurant_index');
    const getSearchResults = this.getSearchResults;
    helper.on('result', function(content) {
      console.log(content);
      getSearchResults(content);
      // this.setState({
      //   searchResults: content
      // });
    });
    helper.search();
  }

  getSearchResults (content) {
    this.setState({
      searchResults: content
    });
  }

  // setLocation(coords){
  //   this.setState({
  //     userLocation: coords
  //   });
  // }
  // <Sidebar results={restaurants} />

  render() {
    console.log('app state', this.state)
    const searchResults = this.state.searchResults;
    return (
      <div className="container">
        <Header />
        <div className="row">
          <Main searchResults={searchResults} />
        </div>
      </div>
    );
  }
}
