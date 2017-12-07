import React from 'react';

export default function ResultItem (props){
  const imageURL = props.restaurantData.image_url;
  const foodType = props.restaurantData.food_type;
  const name = props.restaurantData.name;
  const neighborhood = props.restaurantData.neighborhood;
  const starsCount = props.restaurantData.stars_count;
  const priceRange = props.restaurantData.price_range;
  const reviewsCount = props.restaurantData.reviews_count;
  return (
    <div id="result-item">
      <div className="media">
        <img className="align-self-center mr-3" src={imageURL} alt="Generic placeholder image" />
        <div className="media-body">
          <h5 className="mt-0">{name}</h5>
          <div>
            {starsCount}
            <span>
              {reviewsCount} Reviews
            </span>
            <div>
              {foodType}
              {priceRange}
              {neighborhood}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
