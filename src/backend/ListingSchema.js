const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pricePerUnit: {
        type: String,
        required: true,
    },
    units: {
        type: String,
        required: true
    },
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
    username: {
        type: String,
        required : false
    },
    venmo: {
        type: String,
        required : true
    }
})


module.exports = mongoose.model("Listings", listingSchema)
