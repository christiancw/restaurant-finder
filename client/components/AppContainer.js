import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

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
    this.getSearchResults = this.getSearchResults.bind(this);
    this.setQuery = this.setQuery.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.configureHelper = this.configureHelper.bind(this);
  }

  componentDidMount() {
    const getSearchResults = this.getSearchResults;
    helper.on('result', function(content) {
      getSearchResults(content);
    });
    this.configureHelper();
    helper.search();
  }

  configureHelper() {
    helper.addFacetExclusion('payment_options', 'JCB');
    helper.addFacetExclusion('payment_options', 'Cash Only');
    helper.addFacetExclusion('payment_options', 'Pay with OpenTable');
    // helper.addFacetExclusion('payment_options', 'Diners Club');
    // helper.addFacetExclusion('payment_options', 'Carte Blanche');
  }

  getSearchResults (content) {
    this.setState({
      searchResults: content
    });
  }

  setQuery (queryString) {
    helper.setQuery(queryString).search();
  }

  nextPage(){
    const currentPage = helper.getPage()
    helper.setPage(currentPage).nextPage().search()
  }

  render() {
    const searchResults = this.state.searchResults;
    const setQuery = this.setQuery;
    const nextPage = this.nextPage;
    return (
      <div id="main-background">
        {searchResults ?
          <div className="container main-container">
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
