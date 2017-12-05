import React from 'react';
import plainStar from '../../resources/graphics/stars-plain.png'
import starIcons from '../../resources/graphics/stars-icons.png'

export default function Stars (props){
  return (
    <div id="stars">
      <h6>Rating</h6>
      <img src={starIcons} alt="starIcons" height="40" width="100" />
      <img src={starIcons} alt="starIcons" height="40" width="100" />
      <img src={starIcons} alt="starIcons" height="40" width="100" />
    </div>
  )
}
