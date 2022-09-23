const User = require('../model/User.js');
const { saltRounds } = require('../constants.js');
const bcrypt = require('bcrypt');

exports.createUser = async (data) => {
    let cryptPassword = await bcrypt.hash(data.password, saltRounds);
    let newUserData = {
        username: data.username,
        email: data.email,
        password: cryptPassword,
    };
    return await User.create(newUserData);
};
exports.loginUser = async (email) => {
    await User.findOne({ email: email })
};