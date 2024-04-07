const Listing = require("./Listings");


module.exports.DisplayListings = async (req, res, next) => {
    let index;
    try {
        const {dinner} = req.body;
        //const listing = await Listing.findOne( {dinner} );
        const lists = [];
        index = 0;
        await Listing.find({dinner: dinner}, function (err, results) {
            lists[index++] = results;
        });


        res.status(201).json({success: true, message: "Listings found", lists});

        next();

    } catch (error) {
        console.error(error);
    }
};