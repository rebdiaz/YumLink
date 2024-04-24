const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');

//Schema defines a user's profile information
const logSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    sellerRating: {
        type: Number,
        default: 0
    },
    totalListings: {
        type: Number,
        default: 0
    }
})

// FOLLOWING FUNCTION FROM https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/#howtoimplementthebackend

//bcrypt library hashes the password property using 14 salt rounds
logSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 14);
});

module.exports = mongoose.model("Login", logSchema)
