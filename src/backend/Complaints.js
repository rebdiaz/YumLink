const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema defines the structure of a complaint document in database
const complaintsSchema = new Schema({
    usernameReported: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    usernameSubmittingForm: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model("Complaints", complaintsSchema)
