const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const accountModel = require("./models/account");
const port = 3000;

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/jakepizza");

app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(cookieParser());
// app.use(session({
//   keys: ['secretkey1', 'secretkey2', '...']
// }));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(accountModel.authenticate()));
passport.serializeUser(accountModel.serializeUser());
passport.deserializeUser(accountModel.deserializeUser());

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/', (req, res) => {
    res.render("index");
});

//Routing
const accountRoute = require("./routes/accountAPI.js");
const makerRoute = require("./routes/maker.js");

app.use("/account", accountRoute);
app.use("/PizzaDesigner", makerRoute);

// app.get('/*', (req, res) =>  {
//     res.render("404");
// });

app.listen(port, () => console.log(`> Jakes Pizza starting on http://localhost:${port}/`));