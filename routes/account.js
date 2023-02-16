const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const accountModel = require("../models/account");

router.get('/', (req, res) => {
    //replace when adding passport support to check if auto logged in
    var loggedIn = false;
    if(!loggedin) {
        res.redirect("/account/login")
    } else {
        res.redirect("/account/view")
    }
})
router.get('/login', (req, res) => {
    var loggedIn = false;
    if(!loggedin) {
        res.redirect("/account/view")
    }
    res.render("accountLogin");
})
router.get('/register', (req, res) => {
    var loggedIn = false;
    if(!loggedin) {
        res.redirect("/account/view")
    }
    res.render("accountRegister");
})
router.post('/accountRegister', (req, res) => {
    const newAccount = new accountModel({
        firstName: req.body.firstName,
        lastName: req.body.lastname,
        password: req.body.password,
        cart: null,
        locations: null,
        savingPoints: 0,
        coupons: null
    });
    newAccount.save().then(() => {
        res.redirect("/account/login");
        console.log(`> New Account created: ${firstName} ${lastName}`);
        
    });
})

module.exports = router