const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 50,
    },
    username: {
        type: String,
        required: true,
        min: 3,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 50,

    },
    date: {
        type: Date,
        default: Date.now()
    }


})
const user = mongoose.model("user", userSchema)
module.exports = user;