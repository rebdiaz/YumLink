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

//reference for passing props: https://stackoverflow.com/questions/60669327/how-to-pass-props-through-window-href-react

//Images of our listings:
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
  //opens listing info when listing tile is clicked
  const handleClick = () => {
      //pass the listing id as a query parameter to /view to access a specific listing
      window.location.href = `/view?id=${id}`;
  };
  //Displays listing's name, price, and chef on tile
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

    //Redirect to the "/create" page when create listing button pressed:
    const handleListingsClick = () => {
        window.location.href = '/create';
    };
    //State to hold listings
    const [posts, setPosts] = useState({
        lists: []
    });
    // State to hold sorted listings
    const [sortedPosts, setSortedPosts] = useState([]);
    // State to track sorting order
    const [sortOrder, setSortOrder] = useState('asc');

    // Function to sort menu items by price
    const sortByPrice = () => {
        const sorted = [...posts.lists].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.pricePerUnit - b.pricePerUnit;
            } else {
                return b.pricePerUnit - a.pricePerUnit;
            }
        });
        setSortedPosts(sorted);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sorting order
    };

    //Retrieves listings from the database
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

        // Render sorted posts if sortedPosts is not empty, otherwise render unsorted posts
        const renderPosts = () => {
            const data = sortedPosts.length ? sortedPosts : posts.lists;
            return data.map((post, index) => (
                <MenuItem
                    key={index}
                    image={MenuImages.at(index % MenuImages.length)}
                    name={post.title}
                    price={post.pricePerUnit}
                    Chef={post.username}
                    units={post.units}
                    id={post._id}
                />
            ));
        };

    //Displays the title of the page, create new listing button, and sort button
    return (
        <div className="Listings">
            <h1 className="menuTitle">Menu</h1>
            <ListingButton onClick={handleListingsClick}/>
            <SortButton onClick={sortByPrice}/>
            <div className="menuList">
            {renderPosts()}
            </div>
        </div>
    );
}

export default Menu;
