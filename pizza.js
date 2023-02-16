const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const port = 3000;

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/jake-pizza");

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (req, res) =>  {
    res.render("index");
});

//Routing
const accountRoute = require("./routes/account.js");
const makerRoute = require("./routes/maker.js");

app.use("/account",accountRoute);
app.use("/PizzaDesigner",makerRoute);

app.get('*', (req, res) =>  {
    res.render("404");
});


app.listen(port, () => console.log(`Jakes Pizza starting on http://localhost:${port}/`));