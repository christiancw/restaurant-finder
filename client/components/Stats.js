import React from 'react';

export default function Stats (props){
  const number = props.number;
  return (
    <div id="stats">
      {number} results found in 0.0002 seconds.
    </div>
  );
}
