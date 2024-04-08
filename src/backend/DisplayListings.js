const Listing = require("./Listings");


module.exports.DisplayListings = async (req, res, next) => {
    let index;
    try {
        const {sorted, lowToHigh, highToLow, title, breakfast, lunch, dinner, dessert, beverage, snack,
            vegetarian, vegan, other, cuisine, dairyAllergy, glutenAllergy, shellfishAllergy,
            nutAllergy, soyAllergy, fishAllergy, otherAllergy} = req.body;

        const lists = [];
        index = 0;
        if(sorted){
            if(title !== ''){
                await Listing.find({title: title}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(breakfast !== ''){
                await Listing.find({breakfast: breakfast}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(lunch !== ''){
                await Listing.find({lunch: lunch}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(dinner !== ''){
                await Listing.find({dinner: dinner}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(dessert !== ''){
                await Listing.find({dessert: dessert}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(beverage !== ''){
                await Listing.find({beverage: beverage}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(snack !== ''){
                await Listing.find({snack: snack}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(vegetarian !== ''){
                await Listing.find({vegetarian: vegetarian}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(vegan !== ''){
                await Listing.find({vegan: vegan}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(other !== ''){
                await Listing.find({other: other}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(cuisine !== ''){
                await Listing.find({cuisine: cuisine}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(dairyAllergy !== ''){
                await Listing.find({dairyAllergy: dairyAllergy}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(glutenAllergy !== ''){
                await Listing.find({glutenAllergy: glutenAllergy}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(shellfishAllergy !== ''){
                await Listing.find({shellfishAllergy: shellfishAllergy}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(nutAllergy !== ''){
                await Listing.find({nutAllergy: nutAllergy}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(soyAllergy !== ''){
                await Listing.find({soyAllergy: soyAllergy}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(fishAllergy !== ''){
                await Listing.find({fishAllergy: fishAllergy}, function (err, results) {
                    lists[index++] = results;
                });
            }
            if(otherAllergy !== ''){
                await Listing.find({otherAllergy: otherAllergy}, function (err, results) {
                    lists[index++] = results;
                });
            }

        } else if(lowToHigh){
            await Listing.find({}).sort({pricePerUnit: 'asc'});
        } else if(highToLow){
            await Listing.find({}).sort({pricePerUnit: 'desc'});
        } else {
            await Listing.find({});
        }



        res.status(201).json({success: true, message: "Listings found", lists});

        next();

    } catch (error) {
        console.error(error);
    }
};