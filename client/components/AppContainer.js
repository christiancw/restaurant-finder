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
const helper = algoliasearchHelper(client, 'new_restaurant_index', {
  facets: ['food_type', 'payment_options', 'stars_count'],
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
    this.nextPage = this.nextPage.bind(this);
    // this.filterByRating = this.filterByRating.bind(this);
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

  nextPage(){
    // console.log('hello')
    const currentPage = helper.getPage()
    helper.setPage(currentPage).nextPage().search()
  }

  // filterByRating(){
  //   console.log('will filter')
  //   // helper.addNumericRefinement('stars_count', '>', 2)
  // }

  // getFacetValues(){
  //   this.state.searchResults.getFacetValues('food_type', {sortBy: ['count:desc', 'selected']});
  // }


  render() {
    const searchResults = this.state.searchResults;
    const setQuery = this.setQuery;
    const nextPage = this.nextPage;
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
              <Main
                searchResults={searchResults}
                nextPage={nextPage}
                />
            </div>
          </div>
        : null}
      </div>
    );
  }
}
