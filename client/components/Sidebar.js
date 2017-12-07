import React, { Component } from 'react';
import Cuisine from './Cuisine';
import Stars from './Stars';
import Payment from './Payment';

export default class Sidebar extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    // this.cuisineCounter = this.cuisineCounter.bind(this);
    // this.paymentCounter = this.paymentCounter.bind(this);
    // this.helper = this.props.helper;
    this.handleClick = this.handleClick.bind(this);
    this.handlePaymentClick = this.handlePaymentClick.bind(this);
  }

  componentDidMount(){
      const foodTypes = this.props.searchResults.getFacetValues('food_type', {sortBy: ['count:desc', 'selected']})
      const paymentTypes = this.props.searchResults.getFacetValues('payment_options', {sortBy: ['count:desc']});
      console.log('calling this function')
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
    console.log('this state', this.state)
    const foodTypes = this.state.foodFacetValues;
    const handleClick = this.handleClick;
    const paymentTypes = this.state.paymentTypes;
    const handlePaymentClick = this.handlePaymentClick;
    return (
      <div className="col-3" id="sidebar">
        {foodTypes ?
          <Cuisine
            foodTypes={foodTypes}
            handleClick={handleClick}
             />
        : null}
        <Stars />
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
