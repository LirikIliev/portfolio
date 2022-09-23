const mongoose = require('mongoose');

const validateEmail = function (email) {
    let regexp = /^\w+@\w+\.[a-zA-z]+$/g;
    return regexp.test(email)
};

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 10,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+@\w+\.[a-zA-z]+$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    }
});


const User = mongoose.model("User", userSchema);

module.exports = User;