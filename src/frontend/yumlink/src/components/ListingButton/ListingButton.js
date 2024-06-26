// ListingButton.js

import React from 'react';
import './ListingButton.css'; // Import the CSS file for styling

//Create new listing button
const ListingButton = ({ onClick }) => {
  return (
    <button className="listing-button" onClick={onClick}>
      + Create Listing 
    </button>
  );
};

export default ListingButton;
