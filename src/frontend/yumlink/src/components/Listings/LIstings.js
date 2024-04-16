// Menu.js

import React, { useState } from 'react';
import './Listings.css';
import Pepperoni from '../Assets/pepperoni.jpg';
import ListingButton from '../ListingButton/ListingButton.js';
import SortButton from '../SortButton/SortButton.js';
import ListingForm from '../ListingPopUp/ListingPopUp.js'; // Import the new modal component


const MenuList = [
  {
    name: 'Pepperoni Pizza',
    image: Pepperoni,
    price: 15.99,
    Chef: 'Anshil', 
    units: 4,
    venmo: 'Anshil'
  },
];
function MenuItem({ image, name, price, Chef, venmo, units }) {
  const handleClick = () => {
    window.location.href = '/view';
  };

  return (
    <div className="menuItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price} #{units}/{units}</p>
      <p>Chef: {Chef}</p>
    </div>
  );
}

function Menu() {

  const handleListingsClick = () => {
    // Handle button click logic here
    window.location.href = '/create'; // Redirect to the "/create" page
  };

  const handleSortClick = () => {
    // Handle sort button click logic here
    // You can implement sorting functionality or redirect to a sorting page
  };


  return (
    <div className="Listings">
      <h1 className="menuTitle">Menu</h1>
      <ListingButton onClick={handleListingsClick} /> {/* Add the Listings button */}
      <SortButton onClick={handleSortClick} />
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            Chef={menuItem.Chef}
            units = {menuItem.units}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
