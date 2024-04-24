import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './View.css';
import Rating from './Rating'; // Adjust the path as per your project structure

//reference for retrieving parameters: https://stackoverflow.com/questions/35352638/how-to-get-parameter-value-from-query-string

function View() {
    const location = useLocation();
    const [listingProperties, setListingProperties] = useState(null);
    const [listID, setlistID] = useState(null);

    useEffect(() => {
        //retrieves listing properties through get request
        const fetchListingProperties = async () => {
            try {
                //retrieves the listing's id through query parameter passed from Listings.js
                const searchParams = new URLSearchParams(location.search);
                const id = searchParams.get('id');
                setlistID(id);
                const response = await axios.get(`http://localhost:3001/getListingInfo?id=${id}`);
                setListingProperties(response.data.data);
            } catch (error) {
                console.error('Error fetching listing properties:', error);
            }
        };
        fetchListingProperties();
    }, [location]);

    //Displayed if a listing couldn't be located
    if (!listingProperties) {
        return <div>Loading...</div>;
    }

    const { listingName, ppu, numUnits, cuisine, venmo, rating } = listingProperties;

    //Displays each individual listing's information
    return (
        <div className="view-form">
            {/* Listing Name */}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="title" name="title" value={listingName} readOnly />
            </div>
            {/* Listing's price per unit */}
            <div className="form-group">
                <label htmlFor="pricePerUnit">Price per Unit:</label>
                <input type="text" id="pricePerUnit" name="pricePerUnit" value={`$${ppu}`} readOnly />
            </div>
            {/* Number of units left */}
            <div className="form-group">
                <label htmlFor="numberOfUnits">Number of Units:</label>
                <input type="text" id="numberOfUnits" name="numberOfUnits" value={numUnits} readOnly />
            </div>
            {/* Listing's cuisine */}
            <div className="form-group">
                <label htmlFor="cuisine">Cuisine:</label>
                <input type="text" id="cuisine" name="cuisine" value={cuisine} readOnly />
            </div>
            {/* Seller's venmo */}
            <div className="form-group">
                <label htmlFor="venmo">Venmo:</label>
                <input type="text" id="venmo" name="venmo" value={venmo} readOnly />
            </div>
            {/* Listing's average rating */}
            <div className="form-group">
                <label htmlFor="rating">Rating: {rating}/5</label>
                <p>Click on the stars to rate this item!</p>
                {/* Rating input - changes avg. rating */}
                <div className="rating">
                    <Rating id={listID}/>
                </div>

            </div>
        </div>
    );
}

export default View;