import React from 'react';

export default function Stats (props){
  const { number, processingTime } = props;
  const statText = `${number} results found `
  return (
    <div id="stats">
      <span id="stat-text">
        {statText}
      </span>
      <span>
        in 0.000{processingTime} seconds.
      </span>
    </div>
  );
}
