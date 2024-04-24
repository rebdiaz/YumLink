import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
import axios from 'axios';

//Function takes in rating input on the clickable star buttons
//New rating is sent to backend, and used in computing listing's avg. rating
const Rate = ({id}) => {
    //set rating state variable
    const [rate, setRate] = useState(0);

    const handleRatingChange = async(value, id) => {
        setRate(value);
        try{
            //Post new rating to backend to compute new listing avg. rating
            const response = await axios.post('http://localhost:3001/updateRating', {
                listingID: id,
                newRating: value
            });
            console.log(response.data);
        }
        catch(error){
            console.error("Error updating rating:", error.message);
        }
    };
    //Display the clickable stars on listing page that take a rating input
    return (
        <Container>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                handleRatingChange(givenRating, id);
                            }}
                        />
                        <Rating>
                            <FaStar
                                color={
                                    givenRating < rate || givenRating === rate
                                        ? "rgb(255,215,0)                                        "
                                        : "rgb(192,192,192)"
                                }
                            />
                        </Rating>
                    </label>
                );
            })}
        </Container>
    );
};

export default Rate;