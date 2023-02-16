var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var cartScheme = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'account'},
    pizzas: [{ type: Schema.Types.ObjectId, ref: 'pizza' }],
});

module.exports = mongoose.model('cart', cartScheme);