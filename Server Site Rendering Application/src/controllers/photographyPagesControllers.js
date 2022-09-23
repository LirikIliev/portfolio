const router = require('express').Router();
const { registerValidator, loginValidator } = require('../utils/validators.js');
const { createUser, loginUser } = require('../service/authService.js');
const { token } = require('../service/createToken.js');
const { sessionName } = require('../constants.js');
const { isAuth, isNotAuth } = require('../middleWares/authMiddleWares.js');
const { createCryptoValidator } = require('../utils/cryptoValidators.js');
const { createCrypto, getAllCryptos, getCurrentCryptos, editCryptos, deleteCryptos, buyCryptos, searchCryptos } = require('../service/cryptoService.js');
//login page controller
router.get('/login', isAuth, (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    try {
        let validator = loginValidator(req.body);
        await loginUser(validator.email);
        let createToken = await token(validator.email, req.body.password);
        res.cookie(sessionName, createToken, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        let body = req.body;
        res.status(401).render('auth/login', { error, body });
    };

});

//register page controller
router.get('/register', isAuth, (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    try {
        let validator = registerValidator(req.body);
        console.log(validator);
        await createUser(validator);
        let createToken = await token(validator.email, validator.password);
        res.cookie(sessionName, createToken, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        let body = req.body;
        res.status(401).render('auth/register', { error, body })
    };
});

// logout controller 
router.get('/logout', isNotAuth, (req, res) => {
    res.clearCookie(sessionName);
    res.redirect('/');
});

//all cryptos controller
router.get('/all-crypto', async (req, res) => {
    let cryptos = await getAllCryptos();
    res.render('common/all-crypto', { cryptos });
});

// create cryptos controller
router.get('/create-crypto', isNotAuth, (req, res) => {
    res.render('common/create');
});

router.post('/create-crypto', async (req, res) => {
    try {
        let validator = createCryptoValidator(req.user._id, req.body);
        await createCrypto(validator);
        res.redirect('/');
    } catch (error) {
        let body = req.body;
        res.status(401).render('common/create', { body, error })
    }
});

//search controller
router.get('/search-crypto', isNotAuth, async (req, res) => {
    let results = await getAllCryptos()
    res.render('common/search', { results });
});

router.post('/search-crypto', async (req, res) => {
    try {
        let results = await searchCryptos(req.body);
        res.status(200).render('common/search', { results })
    } catch {
        res.status(200).render('common/search', { error });
    }
});


// detail page controller 
router.get('/crypto-details/:id', async (req, res) => {
    let crypto = await getCurrentCryptos(req.params.id);
    let isImOwner = false;
    let isIBought = false;
    if (req.user) {
        isImOwner = req.user._id == crypto.owner
        isIBought = Array.from(crypto.buyACrypto)
            .find(buyer => buyer == req.user._id);
    };
    res.render('common/details', { crypto, isIBought, isImOwner });
});

// edit page controller
router.get('/edit-crypto/:id', isNotAuth, async (req, res) => {
    let body = await getCurrentCryptos(req.params.id);
    res.render('common/edit', { body });
});

router.post('/edit-crypto/:id', isNotAuth, async (req, res) => {
    try {
        let validator = createCryptoValidator(req.user._id, req.body);
        await editCryptos(req.params.id, validator);
        res.redirect(`/crypto-details/${req.params.id}`);
    } catch (error) {
        let body = req.body;
        console.log(error);
        res.status(401).render('common/edit', { body, error })
    }
});

// delete page controller
router.get('/delete-crypto/:id', async (req, res) => {
    await deleteCryptos(req.params.id);
    res.redirect('/');
});

// buy page controller
router.get('/buy-crypto/:id', isNotAuth, async (req, res) => {
    await buyCryptos(req.params.id, req.user._id);
    res.redirect(`/crypto-details/${req.params.id}`);
});

// 404 not found page
router.get('/404-not-found', (req, res) => {
    res.render('home/error');
});
module.exports = router;