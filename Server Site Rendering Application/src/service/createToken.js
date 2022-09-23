const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/User.js');
const { secret } = require('../constants.js');

exports.token = async (email, password) => {
    let user = await User.findOne({ email: email });

    if (!user) {
        throw { message: 'Wrong username or password, please try again!' }
    };

    const isItValid = await bcrypt.compare(password, user.password);
    if (!isItValid) {
        throw { message: 'Wrong username or password!!! Please try later!' };
    };
    let token = {
        username: user.username,
        _id: user._id,
        email: user.email,
    };

    let result = new Promise((resolve, reject) => {
        jwt.sign(token, secret, { expiresIn: '2d' }, (err, token) => {
            if (err) {
                return reject(err);
            };
            resolve(token);
        });
    });
    return result;
};
