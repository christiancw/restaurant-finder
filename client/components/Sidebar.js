import React, { Component } from 'react';
import Cuisine from './Cuisine';
import RatingsFilter from './RatingsFilter';
import Payment from './Payment';

export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFoodType: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePaymentClick = this.handlePaymentClick.bind(this);
    this.filterByRating = this.filterByRating.bind(this);
  }

  componentDidMount(){
      const foodTypes = this.props.searchResults.getFacetValues('food_type', {sortBy: ['count:desc', 'selected']});
      const allPaymentTypes = this.props.searchResults.getFacetValues('payment_options', {sortBy: ['count:desc']});
      const paymentTypes = allPaymentTypes.filter(function(option) {
        return option.isExcluded === false;
      });
      this.setState({
        foodFacetValues: foodTypes,
        paymentTypes: paymentTypes
      });
  }

  componentWillReceiveProps(){
      const foodTypes = this.props.searchResults.getFacetValues('food_type', {sortBy: ['count:desc', 'selected']});
      const allPaymentTypes = this.props.searchResults.getFacetValues('payment_options', {sortBy: ['count:desc']});
      const paymentTypes = allPaymentTypes.filter(function(option) {
        return option.isExcluded === false;
      });
      this.setState({
        foodFacetValues: foodTypes,
        paymentTypes: paymentTypes
      });
  }

  handleClick(evt){
    const foodType = evt.currentTarget.id;
    this.props.helper.clearRefinements('food_type');
    this.props.helper.toggleRefine('food_type', foodType).search();
      this.setState({
        selectedFoodType: foodType
      });
  }

  handlePaymentClick(evt){
    const paymentType = evt.currentTarget.id;
    this.props.helper.toggleRefine('payment_options', paymentType).search();
  }

  filterByRating(evt){
    const starNumber = evt.currentTarget.id;
    this.props.helper.addNumericRefinement('stars_count', '>', starNumber).search();
  }

  render() {
    const foodTypes = this.state.foodFacetValues;
    const handleClick = this.handleClick;
    const paymentTypes = this.state.paymentTypes;
    const handlePaymentClick = this.handlePaymentClick;
    const filterByRating = this.filterByRating;
    const selectedFoodType = this.state.selectedFoodType;
    return (
      <div className="col-md-4" id="sidebar">
        {foodTypes ?
          <Cuisine
            foodTypes={foodTypes}
            handleClick={handleClick}
            selectedFoodType={selectedFoodType}
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
    );
  }
}
