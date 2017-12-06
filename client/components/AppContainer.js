import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
// import initialState from './dummydata';

const initialState = {
  searchResults: {
    hits: [],
    nbHits: 0,
    processingTimeMS: 0,
    facets: []
  }
};

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
    this.state = initialState;
    // this.setLocation = this.setLocation.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.setQuery = this.setQuery.bind(this);
  }

  // componentWillMount() {
  //   const setLocation = this.setLocation;
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     setLocation(position.coords);
  //   });
  // }

  componentDidMount() {
    const getSearchResults = this.getSearchResults;
    helper.on('result', function(content) {
      console.log(content);
      getSearchResults(content);
    });
    helper.search();
  }

  // getSearchResults (content) {
  //   this.setState({
  //     searchResults: content
  //   });
  // }

  setQuery (queryString) {
    console.log('callt this', queryString)
    helper.setQuery(queryString).search();
  }

  gettingfacetValues(returnValue){
    this.setState({
      facetValues: returnValue
    });
  }

  // const Categories = connect(
  // state => ({
  //   categories: state.searchResults &&
  //     state.searchResults.getFacetValues('category', {sortBy: ['count:desc', 'selected']}) ||
  //     []
  // })
  //   )(
  // ({categories, helper}) =>
  //     <ul className="categories">
  //       {categories.map(
  //         category =>
  //           <Category
  //             key={category.name}
  //             {...category}
  //             handleClick={e => helper.toggleRefine('category', category.name).search()}
  //           />
  //       )}
  //     </ul>
  //     );

  render() {
    const searchResults = this.state.searchResults;
    const setQuery = this.setQuery;
    return (
      <div className="container">
        <Header setQuery={setQuery} />
        <div className="row">
          <Sidebar searchResults={searchResults} />
          <Main searchResults={searchResults} />
        </div>
      </div>
    );
  }
}
