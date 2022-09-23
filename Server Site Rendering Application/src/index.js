const express = require('express');
const { port } = require('./constants.js')
const app = express();
const handlebars = require('./config/handlebars.js')(app);
const cookie = require('cookie-parser');
const { auth, authRedirect } = require('./middleWares/authMiddleWares.js')

const routes = require('./routes.js');
app.use('/static', express.static('static'));
app.use(cookie());
app.use(express.urlencoded({ extended: false }));
app.use(auth);
app.use(routes);
app.use(authRedirect);

const mongoose = require('./config/mongooseDB.js')
    .then((dataBase) => {
        console.log('Database is connected!');
        app.listen(port, () => console.log(`Server is listen on port ${port}`))
    }).catch(error => {
        console.log(error);
    })