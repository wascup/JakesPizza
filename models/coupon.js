var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var couponScheme = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'account'},
    pizzas: [{ type: Schema.Types.ObjectId, ref: 'account' }],
});

module.exports = mongoose.model('coupon', couponScheme);