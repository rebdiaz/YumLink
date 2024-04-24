const Listings = require('./ListingSchema'); // Import the Listing model
const mongoose = require('mongoose');

//Function returns a specific listing's information
//Used to display a listing's properties when listing tile clicked on menu
module.exports.returnProperties = async (req, res, next) => {
    try {
        //listing ID retrieved from query parameter
        const {id: listingID} = req.query;

        //listing retrieved from the document id
        const listing = await Listings.findById(listingID).exec();
        //invalid listing id returns an error
        if (!listing) {
            return res.status(404).json({success: false, message: 'Listing not found'});
        }

        //listing properties extracted
        let listingName = listing.title;
        let ppu = listing.pricePerUnit;
        let numUnits = listing.units;
        let cuisine = listing.cuisine;
        let venmo = listing.venmo;
        let rating = listing.averageRating;

        //listing properties returned as a JSON
        res.status(200).json({
            success: true,
            data: {
                listingName,
                ppu,
                numUnits,
                cuisine,
                venmo,
                rating
            }
        });
    }
    catch (error) {
        console.error("Error retrieving listing properties:", error.message);
        res.status(500).json({success: false, message: "Internal server error"});
    }
};