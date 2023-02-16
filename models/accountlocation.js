var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var accountLocation = new Schema({
    city: String,
    number: Number,
    road: String,
});

module.exports = mongoose.model('accountlocation', accountLocation);