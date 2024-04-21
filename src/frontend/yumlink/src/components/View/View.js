import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './View.css';
import Rating from './Rating'; // Adjust the path as per your project structure

function View() {
    const location = useLocation();
    const [listingProperties, setListingProperties] = useState(null);
    const [listID, setlistID] = useState(null);
    //const [ratingg, setRating] = useState(0);

    useEffect(() => {
        const fetchListingProperties = async () => {
            try {
                const searchParams = new URLSearchParams(location.search);
                const id = searchParams.get('id');
                setlistID(id);
                console.log(id);
                console.log('API URL:', `http://localhost:3001/getListingInfo?id=${id}`);
                const response = await axios.get(`http://localhost:3001/getListingInfo?id=${id}`);
                //console.log('API Response:', response.data);
                setListingProperties(response.data.data);
            } catch (error) {
                console.error('Error fetching listing properties:', error);
            }
        };

        fetchListingProperties();
    }, [location]);

    // const handleRatingChange = (value) => {
    //     setRating(value);
    // };

    if (!listingProperties) {
        return <div>Loading...</div>;
    }

    const { listingName, ppu, numUnits, cuisine, venmo, rating } = listingProperties;

    return (
        <div className="view-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="title" name="title" value={listingName} readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="pricePerUnit">Price per Unit:</label>
                <input type="text" id="pricePerUnit" name="pricePerUnit" value={`$${ppu}`} readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="numberOfUnits">Number of Units:</label>
                <input type="text" id="numberOfUnits" name="numberOfUnits" value={numUnits} readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="cuisine">Cuisine:</label>
                <input type="text" id="cuisine" name="cuisine" value={cuisine} readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="venmo">Venmo:</label>
                <input type="text" id="venmo" name="venmo" value={venmo} readOnly />
            </div>
            <div className="form-group">
                <label htmlFor="rating">Rating: {rating}/5</label>
                <p>Click on the stars to rate this item!</p>
                {/* Rating input */}
                <div className="rating">
                    <Rating id={listID}/>
                </div>

            </div>
        </div>
    );
}

export default View;