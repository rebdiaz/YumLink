import React, { useState } from 'react';
import './ListingPopUp.css';

function ListingForm() {
  const [formData, setFormData] = useState({
    title: '',
    pricePerUnit: '',
    numberOfUnits: '',
    cuisine: '',
    venmo: '',
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
    
    // Validation: Check if title, pricePerUnit, numberOfUnits, and cuisine are not empty
    if (formData.title.trim() !== '' && formData.pricePerUnit.trim() !== '' && formData.numberOfUnits.trim() !== '' && formData.cuisine.trim() !== '' && formData.venmo.trim() !== '') {
      // Here you would typically handle form submission, like sending data to a server
      console.log(formData);
      handleClick();
    } else {
      alert('Please fill in all required fields.'); // You can customize this alert message
    }
  };

  const handleClick = () => {
    window.location.href = '/listings'; // Redirect to '/listings'
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
      <div className="form-group">
        <label htmlFor="venmo">Venmo:</label>
        <input type="text" id="venmo" name="venmo" onChange={handleInputChange} />
      </div>
      <fieldset className="form-group">
  <legend>Categories:</legend>
  <div className="checkbox-container">
    {/* Display checkboxes vertically */}
    <div className="checkbox-group-vertical">
      
      {/* Add more checkboxes vertically if needed */}
    </div>
    {/* Display checkboxes horizontally */}
    <div className="checkbox-group-horizontal">
      <label>
        <input type="checkbox" name="categories" value="Breakfast" onChange={handleInputChange} /> Breakfast
      </label>
      <label>
        <input type="checkbox" name="categories" value="Lunch" onChange={handleInputChange} /> Lunch
      </label>
      <label>
        <input type="checkbox" name="categories" value="Dinner" onChange={handleInputChange} /> Dinner
      </label>
      <label>
        <input type="checkbox" name="categories" value="Snack" onChange={handleInputChange} /> Snack
      </label>
      <label>
        <input type="checkbox" name="categories" value="Dessert" onChange={handleInputChange} /> Dessert
      </label>
      <label>
        <input type="checkbox" name="categories" value="Beverage" onChange={handleInputChange} /> Beverage
      </label>
      <label>
        <input type="checkbox" name="categories" value="Vegetarian" onChange={handleInputChange} /> Vegetarian
      </label>
      <label>
        <input type="checkbox" name="categories" value="Vegan" onChange={handleInputChange} /> Vegan
      </label>
      <label>
        <input type="checkbox" name="categories" value="Other" onChange={handleInputChange} /> Other
      </label>
      {/* Add more checkboxes horizontally if needed */}
    </div>
  </div>
</fieldset>
      <fieldset className="form-group">
        <legend>Allergies:</legend>
        {/* Repeat the pattern for allergies */}
        <div className="checkbox-group-horizontal">
        <label>
          <input type="checkbox" name="allergies" value="Dairy" onChange={handleInputChange} /> Dairy
        </label>
        <label>
          <input type="checkbox" name="allergies" value="Nut" onChange={handleInputChange} /> Nut
        </label>        
        <label>
          <input type="checkbox" name="allergies" value="Shellfish" onChange={handleInputChange} /> Shellfish
        </label>
        <label>
          <input type="checkbox" name="allergies" value="Fish" onChange={handleInputChange} /> Fish
        </label>
        <label>
          <input type="checkbox" name="allergies" value="Soy" onChange={handleInputChange} /> Soy
        </label>
        <label>
          <input type="checkbox" name="allergies" value="Wheat" onChange={handleInputChange} /> Wheat
        </label>
        <label>
          <input type="checkbox" name="allergies" value="Other" onChange={handleInputChange} /> Other
        </label>
        </div>
        {/* More checkboxes... */}
      </fieldset>
      <button type="submit">Create Listing</button>
    </form>
  );
}

export default ListingForm;
