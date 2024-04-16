import React, { useState } from 'react';
import './ListingPopUp.css';
import axios from "axios";

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
      let breakfast = false;
      let lunch = false;
      let dinner = false;
      let snack = false;
      let dessert = false;
      let beverage = false;
      let vegetarian = false;
      let vegan = false;
      let other = false;
      if(formData.categories.findIndex((element) => element === 'Breakfast') !== -1){
        breakfast = true;
      }
      if(formData.categories.findIndex((element) => element === 'Lunch') !== -1){
        lunch = true;
      }
      if(formData.categories.findIndex((element) => element === 'Dinner') !== -1){
        dinner = true;
      }
      if(formData.categories.findIndex((element) => element === 'Snack') !== -1){
        snack = true;
      }
      if(formData.categories.findIndex((element) => element === 'Dessert') !== -1){
        dessert = true;
      }
      if(formData.categories.findIndex((element) => element === 'Beverage') !== -1){
        beverage = true;
      }
      if(formData.categories.findIndex((element) => element === 'Vegetarian') !== -1){
        vegetarian = true;
      }
      if(formData.categories.findIndex((element) => element === 'Vegan') !== -1){
        vegan = true;
      }
      if(formData.categories.findIndex((element) => element === 'Other') !== -1){
        other = true;
      }
      let dairy = false;
      let nut = false;
      let shellfish = false;
      let fish = false;
      let soy = false;
      let wheat = false;
      let otherA = false;
      if(formData.allergies.findIndex((element) => element === 'Dairy') !== -1){
        dairy = true;
      }
      if(formData.allergies.findIndex((element) => element === 'Nut') !== -1){
        nut = true;
      }
      if(formData.allergies.findIndex((element) => element === 'Shellfish') !== -1){
        shellfish = true;
      }
      if(formData.allergies.findIndex((element) => element === 'Fish') !== -1){
        fish = true;
      }
      if(formData.allergies.findIndex((element) => element === 'Soy') !== -1){
        soy = true;
      }
      if(formData.allergies.findIndex((element) => element === 'Wheat') !== -1){
        wheat = true;
      }
      if(formData.allergies.findIndex((element) => element === 'Other') !== -1){
        otherA = true;
      }
      handleCreate(formData.title.trim(), formData.pricePerUnit.trim(), formData.numberOfUnits.trim(), breakfast, lunch, dinner,
          snack, dessert, beverage, vegetarian, vegan, other, formData.cuisine.trim(), dairy, nut, shellfish, fish, soy, wheat, otherA,
          formData.venmo.trim());
      console.log(formData);
      handleClick();
    } else {
      alert('Please fill in all required fields.'); // You can customize this alert message
    }
  };

  const handleCreate = async (title, pricePerUnit, units, breakfast, lunch, dinner, snack, dessert, beverage, vegetarian, vegan, other, cuisine, dairy, nut, shellfish, fish, soy, wheat, otherA, venmo) => {
    try{
      const { data } = axios.post(
          "http://localhost:3001/createlisting",
          {title: title, pricePerUnit: pricePerUnit, units: units, breakfast: breakfast, lunch: lunch, dinner: dinner, dessert: dessert, beverage: beverage, snack: snack,
            vegetarian: vegetarian, vegan: vegan, other: other, cuisine: cuisine, dairyAllergy: dairy, glutenAllergy: wheat, shellfishAllergy: shellfish,
            nutAllergy: nut, soyAllergy: soy, fishAllergy: fish, otherAllergy: otherA, username: "reb", venmo: venmo},
          { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        console.log("Listing added");
        //console.log(message);
      } else {
        console.log("Error!")
        //console.log(message);
      }
    } catch (error) {
      console.log("error");
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
