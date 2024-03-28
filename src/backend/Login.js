const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');

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
    }
})

// FOLLOWING FUNCTION FROM https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/#howtoimplementthebackend
logSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 14); // 14 salt rounds
});

module.exports = mongoose.model("Login", logSchema)
