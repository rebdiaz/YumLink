const Listings = require('./ListingSchema'); // Import the Listing model
const mongoose = require('mongoose');

module.exports.returnProperties = async (req, res, next) => {
    try {
        const {id: listingID} = req.query;
        console.log("Listing ID:", listingID);
        //const objID = mongoose.Types.ObjectId.createFromHexString(listingID);
        //var mongoose = require('./node_modules/mongoose');
        //console.log(mongoose.Types.ObjectId.isValid(listingID));
        const listing = await Listings.findById(listingID).exec();
        if (!listing) {
            return res.status(404).json({success: false, message: 'Listing not found'});
        }
        let listingName = listing.title;
        let ppu = listing.pricePerUnit;
        let numUnits = listing.units;
        let cuisine = listing.cuisine;
        let venmo = listing.venmo;
        let rating = listing.averageRating;
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