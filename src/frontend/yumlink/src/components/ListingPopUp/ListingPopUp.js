import React, { useState } from 'react';
import './ListingPopUp.css';

function ListingForm() {
  const [formData, setFormData] = useState({
    title: '',
    pricePerUnit: '',
    numberOfUnits: '',
    cuisine: '',
    categories: [],
    allergies: []
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked ? [...prevState[name], value] : prevState[name].filter(c => c !== value)
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, like sending data to a server
    console.log(formData);
  };

  return (
    <form className="listing-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="pricePerUnit">Price per Unit:</label>
        <input type="text" id="pricePerUnit" name="pricePerUnit" onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="numberOfUnits">Number of Units:</label>
        <input type="text" id="numberOfUnits" name="numberOfUnits" onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="cuisine">Cuisine:</label>
        <input type="text" id="cuisine" name="cuisine" onChange={handleInputChange} />
      </div>
      <fieldset className="form-group">
        <legend>Categories:</legend>
        {/* You would repeat the below pattern for each checkbox, adjusting the value as necessary */}
        <label>
          <input type="checkbox" name="categories" value="Breakfast" onChange={handleInputChange} /> Breakfast
        </label>
        {/* More checkboxes... */}
      </fieldset>
      <fieldset className="form-group">
        <legend>Allergies:</legend>
        {/* Repeat the pattern for allergies */}
        <label>
          <input type="checkbox" name="allergies" value="Dairy" onChange={handleInputChange} /> Dairy
        </label>
        {/* More checkboxes... */}
      </fieldset>
      <button type="submit">Create Listing</button>
    </form>
  );
}

export default ListingForm;
