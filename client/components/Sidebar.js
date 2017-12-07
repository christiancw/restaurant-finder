import React, { Component } from 'react';
import Cuisine from './Cuisine';
import RatingsFilter from './RatingsFilter';
import Payment from './Payment';

export default class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this);
    this.handlePaymentClick = this.handlePaymentClick.bind(this);
    this.filterByRating = this.filterByRating.bind(this);
  }

  componentDidMount(){
      const foodTypes = this.props.searchResults.getFacetValues('food_type', {sortBy: ['count:desc', 'selected']})
      const paymentTypes = this.props.searchResults.getFacetValues('payment_options', {sortBy: ['count:desc']});
      this.setState({
        foodFacetValues: foodTypes,
        paymentTypes: paymentTypes
      })
  }

  handleClick(evt){
    const foodType = evt.target.id;
    this.props.helper.toggleRefine('food_type', foodType).search()
    // console.log('what is this', foodType)
  }

  handlePaymentClick(evt){
    const paymentType = evt.target.id;
    this.props.helper.toggleRefine('payment_options', paymentType).search()
  }

  filterByRating(evt){
    const starNumber = evt.currentTarget.id;
    this.props.helper.addNumericRefinement('price', '>', starNumber).search()
  }

  render() {
    const foodTypes = this.state.foodFacetValues;
    const handleClick = this.handleClick;
    const paymentTypes = this.state.paymentTypes;
    const handlePaymentClick = this.handlePaymentClick;
    const filterByRating = this.filterByRating;
    return (
      <div className="col-3" id="sidebar">
        {foodTypes ?
          <Cuisine
            foodTypes={foodTypes}
            handleClick={handleClick}
             />
        : null}
        <RatingsFilter filterByRating={filterByRating} />
        {paymentTypes ?
          <Payment
            paymentTypes={paymentTypes}
            handleClick={handlePaymentClick}
            />
        : null}
      </div>
    )
  }
}
