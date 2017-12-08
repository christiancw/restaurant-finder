import React from 'react';

export default function Search (props){
  return (
    <form className="col-12" id="search">
      <input
        onChange={props.handleSearch}
        className="form-control"
        type="search"
        placeholder="Search for Restaurants by Name, Cuisine, Location" />
    </form>
  );
}
