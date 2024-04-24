const Listings = require('./ListingSchema'); // Import the Listing model
//Reference for findbyID function: https://www.educative.io/answers/what-is-findbyid-in-mongoose

//Function adds a new rating for dish, averaging overall dish rating once added
module.exports.updateDishRating = async (req, res, next) => {
    //listing's document ID and new rating are retrieved from request body
    const {listingID, newRating} = req.body;
    try {
        // Query the listing document by its ID
        const listing = await Listings.findById(listingID).exec()

        // Check if the dish exists
        if (!listing) {
            return res.status(404).json({ success: false, message: 'Listing not found' });
        }

        // Add the new rating to the ratings array
        listing.rating.push(newRating);

        // Calculate the average rating
        const ratings = listing.rating;
        const totalRatings = ratings.length;
        let ratingSum = 0;
        let averageRating = 0;
        if(totalRatings>0)
        {
            for (let i = 0; i < totalRatings; i++) {
                ratingSum+=ratings[i];
            }
            averageRating = ratingSum / totalRatings;
        }

        // Update the dish document with the calculated average rating
        listing.averageRating = averageRating;

        // Save the updated dish document
        await listing.save();
        console.log("Listing's average rating:", listing.averageRating);
        res.status(201).json({success: true, message: "Rating updated successfully" });

    } catch (error) {
        console.error('Error updating dish rating:', error.message);
        return res.status(500).json({ success: false, message: 'Failed to update dish rating' });
    }
}