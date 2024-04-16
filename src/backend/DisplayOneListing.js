const Listing = require("./ListingSchema");


module.exports.DisplayOneListing = async (req, res, next) => {
    let lists;
    try {
        const {
            title, username
        } = req.body;

        const listing = await Listing.find({title: title, username: username}, function (err, results) {});

        res.status(201).json({success: true, message: "Listings found", listing});

        next();

    } catch (error) {
        console.error(error);
    }
};