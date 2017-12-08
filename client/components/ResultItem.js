import React from 'react';
import Stars from './Stars'

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
            <div className="row no-gutters first-row justify-content-start">
              <div className="col-2 star-count">
                {starsCount}
              </div>
              <div className="col-lg-3 stars-rating">
                <Stars starNumber={starsCount} />
              </div>
              <div className="col-3 reviews-count">
                ({reviewsCount} Reviews)
              </div>
            </div>
            <div className="row second-row justify-content-start">
              <div className="col-md-auto">
                {foodType}
              </div>
              <div id="item-price" className="col-md-auto">
                {priceRange}
              </div>
              <div className="col-md-auto">
                {neighborhood}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
