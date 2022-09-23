const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('/home-page');
});

router.get('/home-page', (req, res) => {
    res.render('home');
});

module.exports = router;