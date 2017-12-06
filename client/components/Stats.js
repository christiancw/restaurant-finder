import React from 'react';

export default function Stats (props){
  const { number, processingTime } = props;
  return (
    <div id="stats">
      {number} results found in 0.000{processingTime} seconds.
    </div>
  );
}
