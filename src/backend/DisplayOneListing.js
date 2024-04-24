const Listing = require("./ListingSchema");

//Function retrieves a desired listing, given the title and seller username
module.exports.DisplayOneListing = async (req, res, next) => {
    let lists;
    try {
        //listing name and seller username received through request body
        const {
            title, username
        } = req.body;

        //listing returned once found
        const listing = await Listing.find({title: title, username: username}, function (err, results) {});

        res.status(201).json({success: true, message: "Listings found", listing});

        next();

    } catch (error) {
        console.error(error);
    }
};