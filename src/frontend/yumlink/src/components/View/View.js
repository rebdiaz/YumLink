import React, { useState } from 'react';
import './View.css';

function View() {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className="view-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="title" name="title" value={'Pepperoni Pizza'} readOnly />
      </div>
      <div className="form-group">
        <label htmlFor="pricePerUnit">Price per Unit:</label>
        <input type="text" id="pricePerUnit" name="pricePerUnit" value={'$15.99'} readOnly />
      </div>
      <div className="form-group">
        <label htmlFor="numberOfUnits">Number of Units:</label>
        <input type="text" id="numberOfUnits" name="numberOfUnits" value={'4'} readOnly />
      </div>
      <div className="form-group">
        <label htmlFor="cuisine">Cuisine:</label>
        <input type="text" id="cuisine" name="cuisine" value={'Italian'} readOnly />
      </div>
      <div className="form-group">
        <label htmlFor="venmo">Venmo:</label>
        <input type="text" id="venmo" name="venmo" value={'Anshil0'} readOnly />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating:</label>
        {/* Rating input */}
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <label key={index}>
              <input type="radio" name="rating" value={index + 1} onChange={() => handleRatingChange(index + 1)} checked={rating === index + 1} />
              ★
              
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default View;
