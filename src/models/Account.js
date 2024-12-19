const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        max_length: 255,
        unique: true
    },
    password: {
        type: String,
        min_length: 8
    },
    role: {
        type: String,
        default: "user"
    }
})

const User = mongoose.model("User", userSchema);

module.exports = {User};