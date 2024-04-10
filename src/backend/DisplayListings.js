const Listing = require("./Listings");


module.exports.DisplayListings = async (req, res, next) => {
    let lists;
    try {
        const {
            sorted, lowToHigh, highToLow, title, breakfast, lunch, dinner, dessert, beverage, snack,
            vegetarian, vegan, other, cuisine, dairyAllergy, glutenAllergy, shellfishAllergy,
            nutAllergy, soyAllergy, fishAllergy, otherAllergy
        } = req.body;

        lists = [];
        if (sorted) {
            if (title !== '') {
                lists.push(await Listing.find({title: title}, function (err, results) {}));
            }
            if (breakfast !== '') {
                lists.push(await Listing.find({breakfast: breakfast}, function (err, results) {}));
            }
            if (lunch !== '') {
                lists.push(await Listing.find({lunch: lunch}, function (err, results) {}));
            }
            if (dinner !== '') {
                lists.push(await Listing.find({dinner: dinner}, function (err, results) {}));
            }
            if (dessert !== '') {
                lists.push(await Listing.find({dessert: dessert}, function (err, results) {}));
            }
            if (beverage !== '') {
                lists.push(await Listing.find({beverage: beverage}, function (err, results) {}));
            }
            if (snack !== '') {
                lists.push(await Listing.find({snack: snack}, function (err, results) {}));
            }
            if (vegetarian !== '') {
                lists.push(await Listing.find({vegetarian: vegetarian}, function (err, results) {}));
            }
            if (vegan !== '') {
                lists.push(await Listing.find({vegan: vegan}, function (err, results) {}));
            }
            if (other !== '') {
                lists.push(await Listing.find({other: other}, function (err, results) {}));
            }
            if (cuisine !== '') {
                lists.push(await Listing.find({cuisine: cuisine}, function (err, results) {}));
            }
            if (dairyAllergy !== '') {
                lists.push(await Listing.find({dairyAllergy: dairyAllergy}, function (err, results) {}));
            }
            if (glutenAllergy !== '') {
                lists.push(await Listing.find({glutenAllergy: glutenAllergy}, function (err, results) {}));
            }
            if (shellfishAllergy !== '') {
                lists.push(await Listing.find({shellfishAllergy: shellfishAllergy}, function (err, results) {}));
            }
            if (nutAllergy !== '') {
                lists.push(await Listing.find({nutAllergy: nutAllergy}, function (err, results) {}));
            }
            if (soyAllergy !== '') {
                lists.push(await Listing.find({soyAllergy: soyAllergy}, function (err, results) {}));
            }
            if (fishAllergy !== '') {
                lists.push(await Listing.find({fishAllergy: fishAllergy}, function (err, results) {}));
            }
            if (otherAllergy !== '') {
                lists.push(await Listing.find({otherAllergy: otherAllergy}, function (err, results) {}));
            }

        }  else {
            lists = await Listing.find({});
        }

        if(lowToHigh){
            lists.sort(function(a, b){return a.pricePerUnit - b.pricePerUnit});
            //lists = await Listing.find({}).sort({pricePerUnit: 'asc'});
        } else if (highToLow) {
            lists.sort(function(a, b){return b.pricePerUnit - a.pricePerUnit});
            //lists = await Listing.find({}).sort({pricePerUnit: 'desc'});
        }


        res.status(201).json({success: true, message: "Listings found", lists});

        next();

    } catch (error) {
        console.error(error);
    }
};