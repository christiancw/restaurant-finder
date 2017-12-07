import React from 'react';

export default function ShowMore (props){
  const nextPage = props.nextPage;
  return (
    <button id="showmore" onClick={nextPage}>
      Show More
    </button>
  )
}
