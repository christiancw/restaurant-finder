import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
// import initialState from './dummydata';

// const initialState = {
//   searchResults: {
//     hits: [],
//     nbHits: 0,
//     processingTimeMS: 0,
//     facets: [],
//     getFacetValues: {}
//   }
// };

const algoliasearch = require('algoliasearch');
const algoliasearchHelper = require('algoliasearch-helper');
const client = algoliasearch('KBNJ9HM3SF', 'ea8fd6f86e6d428e54255b7707770011');
const helper = algoliasearchHelper(client, 'restaurant_index', {
  facets: ['food_type'],
  maxValuesPerFacet: 7,
  aroundLatLngViaIP: true
});

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {};
    // this.setLocation = this.setLocation.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.setQuery = this.setQuery.bind(this);
    // this.getFacetValues = this.getFacetValues.bind(this)
  }

  componentDidMount() {
    const getSearchResults = this.getSearchResults;
    helper.on('result', function(content) {
      console.log(content);
      getSearchResults(content);
    });
    helper.search();
  }

  getSearchResults (content) {
    this.setState({
      searchResults: content
    });
  }

  setQuery (queryString) {
    console.log('callt this', queryString)
    helper.setQuery(queryString).search();
  }

  // getFacetValues(){
  //   this.state.searchResults.getFacetValues('food_type', {sortBy: ['count:desc', 'selected']});
  // }


  render() {
    const searchResults = this.state.searchResults;
    const setQuery = this.setQuery;
    // const getFacetValues = this.getFacetValues;
    return (
      <div>
        {searchResults ?
          <div className="container">
            <Header setQuery={setQuery} />
            <div className="row">
              <Sidebar
                searchResults={searchResults}
                helper={helper}
                />
              <Main searchResults={searchResults} />
            </div>
          </div>
        : null}
      </div>
    );
  }
}
