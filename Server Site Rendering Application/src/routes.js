const routes = require('express').Router();
const homePage = require('./controllers/homePageController.js');
const otherPages = require('./controllers/photographyPagesControllers.js');

routes.use(homePage);
routes.use(otherPages);

module.exports = routes;