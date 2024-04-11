// Menu.js

import React, { useState } from 'react';
import './Listings.css';
import Pepperoni from '../Assets/pepperoni.jpg';
import ListingButton from '../ListingButton/ListingButton.js';
import ListingModal from '../ListingPopUp/ListingPopUp.js'; // Import the new modal component

const MenuList = [
  {
    name: 'Pepperoni Pizza',
    image: Pepperoni,
    price: 15.99,
    Chef: 'Anshil',
  },
];

function MenuItem({ image, name, price, Chef }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
      <p>Chef: {Chef}</p>
    </div>
  );
}

function Menu() {
  const [showModal, setShowModal] = useState(false);

  const handleListingsClick = () => {
    // Handle button click logic here
    window.location.href = '/create'; // Redirect to the "/create" page
  };


  return (
    <div className="Listings">
      <h1 className="menuTitle">Listings</h1>
      <ListingButton onClick={handleListingsClick} /> {/* Add the Listings button */}
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
            Chef={menuItem.Chef}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
