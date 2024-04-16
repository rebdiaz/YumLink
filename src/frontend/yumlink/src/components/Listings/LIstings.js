// Menu.js

import React, {useEffect, useState} from 'react';
import './Listings.css';
import Pepperoni from '../Assets/pepperoni.jpg';
import ListingButton from '../ListingButton/ListingButton.js';
import SortButton from '../SortButton/SortButton.js';
import ListingForm from '../ListingPopUp/ListingPopUp.js'; // Import the new modal component
import axios from "axios";

// const { data } = axios.get(
//     "http://localhost:3001/listings",
//     {sorted: false, lowToHigh: false, highToLow: false, title: '', breakfast: '', lunch: '', dinner: '', dessert: '', beverage: '', snack: '',
//             vegetarian: '', vegan: '', other: '', cuisine: '', dairyAllergy: '', glutenAllergy: '', shellfishAllergy: '',
//             nutAllergy: '', soyAllergy: '', fishAllergy: '', otherAllergy: ''},
//     { withCredentials: true }
// );
// const {success, message, listings} = data;
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
    const [posts, setPosts] = useState([]);
    useEffect( () => {
        async function fetchData() {
            try {
                const res = await axios.get("http://localhost:3001/listings",{
                        withCredentials: true,
                        params: {
                            sorting: false
                        }
                    });
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    console.log(posts.lists.at(0).title);

    return (
        <div className="Listings">
            <h1 className="menuTitle">Menu</h1>
            <ListingButton onClick={handleListingsClick}/> {/* Add the Listings button */}
            <SortButton onClick={handleSortClick}/>
            <div className="menuList">
                {MenuList.map((menuItem, key) => (
                    <MenuItem
                        key={key}
                        image={menuItem.image}
                        name={posts.lists.at(12).title}
                        price={posts.lists.at(12).pricePerUnit}
                        Chef={posts.lists.at(12).username}
                        units={posts.lists.at(12).units}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;
