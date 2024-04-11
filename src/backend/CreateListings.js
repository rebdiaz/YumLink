const Listing = require("./Listings");

module.exports.CreateListing = async (req, res, next) => {
    try {
        const { title, pricePerUnit, units, breakfast, lunch, dinner, dessert, beverage, snack,
            vegetarian, vegan, other, cuisine, dairyAllergy, glutenAllergy, shellfishAllergy,
            nutAllergy, soyAllergy, fishAllergy, otherAllergy, username} = req.body;

        const newListing = await Listing.create({title, pricePerUnit, units, breakfast, lunch, dinner, dessert, beverage, snack,
            vegetarian, vegan, other, cuisine, dairyAllergy, glutenAllergy, shellfishAllergy,
            nutAllergy, soyAllergy, fishAllergy, otherAllergy, username});

        res.status(201).json({success: true, message: "New listing successfully created", newListing});

        next();

    } catch (error) {
        console.error(error);
    }
};