import React from 'react';

export default function ResultItem (props){
  return (
    <div id="result-item">
      <div className="media">
        <img className="align-self-center mr-3" src="..." alt="Generic placeholder image" />
        <div className="media-body">
          <h5 className="mt-0">{props.name}</h5>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </div>
      </div>
    </div>
  )
}
