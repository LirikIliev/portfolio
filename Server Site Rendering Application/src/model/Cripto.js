const mongoose = require('mongoose');

const validateImage = function (email) {
    let regexp = /^https:\/\/|http:\/\//g;
    return regexp.test(email)
};

const cryptoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    image: {
        type: String,
        required: true,
        validate: [validateImage, 'Please fill a valid email address'],
        match: [/^https:\/\/|http:\/\//, 'Please fill a valid email address'],
    },
    price: {
        type: Number,
        required: true,
        min: 0.0001
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
    },
    payment: {
        type: String,
        num: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    buyACrypto: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        }
    ],

});


const Crypto = mongoose.model("Crypto", cryptoSchema);

module.exports = Crypto;