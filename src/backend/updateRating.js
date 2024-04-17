const Listings = require('./ListingSchema'); // Import the Listing model

module.exports.updateDishRating = async (req, res, next) => {
// async function updateDishRating(dishId, newRating) {
    //let sum;
    const {listingID, newRating} = req.body;
    try {
        // Query the listing document by its ID
        const listing = await Listings.findById(listingID).exec()

        // Check if the dish exists
        if (!listing) {
            throw new Error('Listing not found');
        }

        // Add the new rating to the ratings array
        listing.ratings.push(newRating);

        // Calculate the average rating
        const ratings = listing.ratings;
        const totalRatings = ratings.length;
        var ratingSum = 0;
        var averageRating = 0;
        if(totalRatings>0)
        {
            for (let i = 0; i < ratings; i++) {
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
        res.status(201).json({success: true, message: "Rating updated successfully" });
        next()
    } catch (error) {
        console.error('Error updating dish rating:', error.message);
    }
}

// module.exports = { updateDishRating };