const Listings = require('./ListingSchema'); // Import the Listing model

module.exports.updateDishRating = async (req, res, next) => {
// async function updateDishRating(dishId, newRating) {
    //async (req, res, next)
    //let sum;
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
        //const sumRatings = ratings.reduce((sum, rating) => sum + rating, 0);
        //const averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;

        // Update the dish document with the calculated average rating
        listing.averageRating = averageRating;

        // Save the updated dish document
        await listing.save();
        console.log("Listing's average rating:", listing.averageRating);
        res.status(201).json({success: true, message: "Rating updated successfully" });
        //next()
    } catch (error) {
        console.error('Error updating dish rating:', error.message);
        return res.status(500).json({ success: false, message: 'Failed to update dish rating' });
    }
}

// module.exports = { updateDishRating };