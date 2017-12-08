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
    const nextPage = this.props.nextPage;
    return (
      <div className="col-md-8" id="main">
        <Stats
          number={this.props.searchResults.nbHits}
          processingTime={this.props.searchResults.processingTimeMS}
           />
        <Results restaurants={this.props.searchResults.hits} />
        <ShowMore nextPage={nextPage} />
      </div>
    )
  }
}
