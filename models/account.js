var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    verified: Boolean,
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    cart: { type: Schema.Types.ObjectId, ref: 'cart'},
    locations: [{ type: Schema.Types.ObjectId, ref: 'accountLocation'}],
    savingPoints: Number,
    coupons: [{ type: Schema.Types.ObjectId, ref: 'coupon'}]
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('account', Account);