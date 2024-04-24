const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema defines the required properties of a listing entry
const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pricePerUnit: {
        type: Number,
        required: true,
    },
    units: {
        type: String,
        required: true
    },
    //properties to define the category of food:
    breakfast: {
        type: Boolean,
        required: true
    },
    lunch: {
        type: Boolean,
        required: true,
    },
    dinner: {
        type: Boolean,
        required: true
    },
    dessert: {
        type: Boolean,
        required: true
    },
    beverage: {
        type: Boolean,
        required: true
    },
    snack: {
        type: Boolean,
        required: true
    },
    vegetarian: {
        type: Boolean,
        required: true
    },
    vegan: {
        type: Boolean,
        required: true
    },
    other: {
        type: String,
        required: false
    },

    cuisine: {
        type: String,
        required: true
    },

    //properties to define allergens present:
    dairyAllergy: {
        type: Boolean,
        required: true
    },
    glutenAllergy: {
        type: Boolean,
        required: true
    },
    shellfishAllergy: {
        type: Boolean,
        required: true
    },
    nutAllergy: {
        type: Boolean,
        required: true
    },
    soyAllergy: {
        type: Boolean,
        required: true
    },
    fishAllergy: {
        type: Boolean,
        required: true
    },
    otherAllergy: {
        type: String,
        required: false
    },

    //properties needed to tie a listing to its chef:
    username: {
        type: String,
        required : false
    },
    venmo: {
        type: String,
        required : true
    },

    rating: [{
        type: Number
    }],
    averageRating: {
        type: Number,
        default: 0
    }
})

const listings = mongoose.model("Listings", listingSchema);
module.exports = listings;
// module.exports = mongoose.model("Listings", listingSchema)