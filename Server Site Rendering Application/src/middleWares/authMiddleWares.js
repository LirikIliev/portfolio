const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { secret, sessionName } = require('../constants.js');

const jswPromisify = promisify(jwt.verify);

exports.auth = async (req, res, next) => {
    let token = req.cookies[sessionName]

    if (token) {
        try {
            let decodedToken = await jswPromisify(token, secret);
            req.user = decodedToken;
            res.locals.user = decodedToken;
        } catch (error) {
            res.clearCookie(sessionName)
            res.redirect('/login');
        };
    };
    next();
};


exports.isAuth = (req, res, next) => {
    if (req.user) {
        res.redirect('/');
    };
    next();
};

exports.isNotAuth = (req, res, next) => {
    if (!req.user) {
        res.redirect('/login');
    };
    next();
};

exports.authRedirect = (req, res, next) => {
    res.redirect('/404-not-found');
    next();
};