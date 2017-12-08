import React from 'react';
import Stars from './Stars';

export default function ResultItem (props){
  const imageURL = props.restaurantData.image_url;
  const foodType = props.restaurantData.food_type;
  const name = props.restaurantData.name;
  const neighborhood = props.restaurantData.neighborhood;
  const starsCount = props.restaurantData.stars_count;
  const priceRange = props.restaurantData.price_range;
  const reviewsCount = props.restaurantData.reviews_count;
  return (
    <div className="result-item">
      <div className="media">
        <img className="thumbnail align-self-center mr-3" src={imageURL} alt="Generic placeholder image" />
        <div className="media-body">
          <h5 className="mt-0">{name}</h5>
          <div id="item-info">
            <div className="row first-row justify-content-start">
              <div className="col-md-auto star-count">
                {starsCount}
              </div>
              <div className="col-md-4 stars-rating">
                <Stars starNumber={starsCount} />
              </div>
              <div className="col-md-auto reviews-count">
                ({reviewsCount} Reviews)
              </div>
            </div>
            <div className="row second-row justify-content-start">
              <div className="col">
                {foodType}
              </div>
              <div id="item-price" className="col">
                {priceRange}
              </div>
              <div className="col">
                {neighborhood}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
