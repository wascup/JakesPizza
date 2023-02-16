var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var couponScheme = new Schema({
    type: String, //carry out / pickup
    
});

module.exports = mongoose.model('coupon', couponScheme);