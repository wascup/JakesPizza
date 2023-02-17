const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const accountModel = require("../models/account");
const passport = require('passport');

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
router.use(bodyParser.urlencoded({
    extended: false
}));


router.get('/', (req, res) => {
    //replace when adding passport support to check if auto logged in
    var loggedIn = false;
    if(loggedIn) {
        res.redirect("/account/view")
    }
    res.redirect("/account/login")
})
router.get('/login', (req, res) => {
    var loggedIn = false;
    if(loggedIn) {
        res.redirect("/account/view")
    }
    res.render("accountLogin");
})
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true
  }), function (req, res) {
    res.redirect('/');
  });
router.get('/register', (req, res) => {
    var loggedIn = false;
    if(loggedIn) {
        res.redirect("/account/view")
    }
    res.render("accountRegister");
})
router.post('/accountRegister',urlencodedParser, (req, res) => {
    try {
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var email = req.body.email;
        var password = req.body.password;
        //server sided validation
        if(email == "") {
            console.log("> User created an account with no email, disposing.");
            return;
        }
        if(email.indexOf("@") == -1) {
            console.log("> User created an account with an invalid email, disposing.");
            return;
        }
        if(email.indexOf(".") == -1) {
            console.log("> User created an account with an invalid email, disposing.");
            return;
        }
        if(password == "") {
            console.log("> User created an account with no password, disposing.");
            return;
        }
        if(password.length < 8) {
            console.log("> User created an account with a password less than 8 characters, disposing.");
            return;
        }
        if(password == email) {
            console.log("> User created an account with a password that is the same as their email, disposing.");
            return;
        }
        if(firstName == "") {
            console.log("> User created an account with no first name, disposing.");
        return;
        }
        //we allow no last name
        
        var account = {
            verified: false,
            firstName: firstName,
            lastName: lastName,
            username: email,
            password: password,
            cart: null,
            locations: null,
            savingPoints: 0,
            coupons: null
        }
        const newAccount = new accountModel(account).save().then(() => {
            res.redirect("/account/login");
            console.log(`> New Account created: ${firstName} ${lastName}`);
        });
    } catch(e) {
        console.log(e);
    }
})

module.exports = router