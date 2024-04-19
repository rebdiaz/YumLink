// Menu.js

import React, {useEffect, useState} from 'react';
import './Listings.css';
import Pepperoni from '../Assets/pepperoni.jpg';
import SugarCookies from '../Assets/sugarcookies.jpeg';
import Pie from '../Assets/pie.jpeg';
import Shrimp from '../Assets/shrimptacos.jpeg';
import Beef from '../Assets/beeftacos.jpeg';
import Ravioli from '../Assets/ravioli.jpeg';
import Salmon from '../Assets/salmon.jpeg';
import Lemonade from '../Assets/lemonade.jpeg';
import Burger from '../Assets/burger.jpeg';
import Cheese from '../Assets/cheese.jpeg';
import Fish from '../Assets/fish.jpeg';
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
const MenuImages = [
    SugarCookies,
    Pepperoni,
    Pie,
    Shrimp,
    Beef,
    Ravioli,
    Salmon,
    Lemonade,
    Burger,
    Cheese,
    Fish
];
function MenuItem({ image, name, price, Chef, venmo, units, id }) {

  const handleClick = () => {
      //console.log(id)
      window.location.href = `/view?id=${id}`;
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
    const [posts, setPosts] = useState({
        lists: []
    });
    //posts.
    async function fetchData() {
        try {
            const res = await axios.get("http://localhost:3001/listings",{
                withCredentials: true,
                // params: {
                //     sorting: false
                // }
            });
            setPosts(await res.data);
            // console.log(res.data);
            // console.log(posts.lists.at(0).title);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect( () => {
        fetchData().then(r => console.log("fetched"));
    }, [posts]);
    //console.log(posts);
    //console.log(posts.lists.at(0).title);

    return (
        <div className="Listings">
            <h1 className="menuTitle">Menu</h1>
            <ListingButton onClick={handleListingsClick}/> {/* Add the Listings button */}
            <SortButton onClick={handleSortClick}/>
            <div className="menuList">
                {posts.lists.map((post, index) => (
                    <MenuItem
                        key={index}
                        image={MenuImages.at(index % MenuImages.length)}
                        name={posts.length === 0 ? "Loading" : post.title}
                        price={posts.length === 0 ? "Loading" : post.pricePerUnit}
                        Chef={posts.length === 0 ? "Loading" : post.username}
                        units={posts.length === 0 ? "Loading" : post.units}
                        id={posts.length === 0 ? "Loading" : post._id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;
