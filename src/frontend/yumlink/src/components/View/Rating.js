import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";
import axios from 'axios';

const Rate = ({id}) => {
    const [rate, setRate] = useState(0);

    const handleRatingChange = async(value, id) => {
        setRate(value);
        try{
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