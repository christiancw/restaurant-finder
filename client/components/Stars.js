import React from 'react';
import emptyStar from '../../resources/graphics/star-empty.png';
import plainStar from '../../resources/graphics/stars-plain.png';

export default function Stars (props){
  const filterByRating = props.filterByRating;
  const starNumber = props.starNumber;
  const filledStars = [];
  for (let i = 0; i < starNumber; i++){
    filledStars.push(plainStar);
  }
  return (
      <div id={starNumber} onClick={filterByRating} className="stars-box">
        <div className="star-container filled-star">
          {filledStars.map(() => {
            return <img src={plainStar} alt="plainStar" height="15" width="15" />;
          })}
        </div>
        <div className="star-container empty-star">
          <img src={emptyStar} alt="emptyStar" height="15" width="15" />
          <img src={emptyStar} alt="emptyStar" height="15" width="15" />
          <img src={emptyStar} alt="emptyStar" height="15" width="15" />
          <img src={emptyStar} alt="emptyStar" height="15" width="15" />
          <img src={emptyStar} alt="emptyStar" height="15" width="15" />
        </div>
      </div>
  );
}
