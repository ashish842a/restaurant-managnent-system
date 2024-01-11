const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures that each email is unique in the database
        trim: true,   // Trims whitespace from the beginning and end of the email
        lowercase: true // Converts the email to lowercase before saving it
    },
    phone: {
        type: String,
        unique: true,
        trim: true
    },
    address: {
        street: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        },
        zip: {
            type: String,
            trim: true
        }
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
