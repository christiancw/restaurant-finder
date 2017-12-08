import React, { Component } from 'react';
import CuisineType from './CuisineType';

export default class Cuisine extends Component {
  constructor(props){
    super(props);
      this.state = {};
      this.isSelected = this.isSelected.bind(this);
    }

  isSelected(currentFoodType, selectedFoodType){
    if (currentFoodType === selectedFoodType) {
      return 'highlighted';
    }
    else {
      return 'not-highlighted';
    }
  }

  render (){
    const cuisines = this.props.foodTypes;
    const handleClick = this.props.handleClick;
    const selectedFoodType = this.props.selectedFoodType;
    const isSelected = this.isSelected;
    return (
      <div id="cuisine">
        <h6>Cuisine/Food Type</h6>
        {
          cuisines.map(function(cuisine){
            return (
              <CuisineType
                key={cuisine.name}
                type={cuisine.name}
                count={cuisine.count}
                handleClick={handleClick}
                selectedFoodType={selectedFoodType}
                isSelected={isSelected}
                />
            );
          })
        }
      </div>
    );
  }
}
