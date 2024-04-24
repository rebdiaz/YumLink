const Listing = require("./ListingSchema");

//Function creates new listing document in database
module.exports.CreateListing = async (req, res, next) => {
    try {
        //information needed for listing received front frontend through request body
        const { title, pricePerUnit, units, breakfast, lunch, dinner, dessert, beverage, snack,
            vegetarian, vegan, other, cuisine, dairyAllergy, glutenAllergy, shellfishAllergy,
            nutAllergy, soyAllergy, fishAllergy, otherAllergy, username, venmo} = req.body;

        const newListing = await Listing.create({title, pricePerUnit, units, breakfast, lunch, dinner, dessert, beverage, snack,
            vegetarian, vegan, other, cuisine, dairyAllergy, glutenAllergy, shellfishAllergy,
            nutAllergy, soyAllergy, fishAllergy, otherAllergy, username, venmo});

        //success message and newly created listing returned
        res.status(201).json({success: true, message: "New listing successfully created", newListing});

        next();

    } catch (error) {
        console.error(error);
    }
};