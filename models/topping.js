var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var toppingSchema = new Schema({
    type: String,
    calories: Number,
    cost: Double
});

module.exports = mongoose.model('topping', toppingSchema);