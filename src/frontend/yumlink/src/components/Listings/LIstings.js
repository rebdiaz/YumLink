import React from "react";
import "./Listings.css";
import Pepperoni from "../Assets/pepperoni.jpg"; // Import the image directly where it's used

// Define the MenuList directly here
const MenuList = [
  {
    name: "Pepperoni Pizza",
    image: Pepperoni,
    price: 15.99,
    Chef: "Anshil",
  },
];

function MenuItem({ image, name, price, Chef }) { // Modify props to include Chef with correct case
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <p> Chef: {Chef} </p> {/* Access Chef prop here */}
    </div>
  );
}

function Menu() {
  return (
    <div className="Listings">
      <h1 className="menuTitle">Our Listings</h1>
      <div className="menuList">
        {/* Use the MenuList directly here */}
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              Chef={menuItem.Chef} // Pass Chef as a prop with correct case
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
