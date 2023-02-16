var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var crustSchema = new Schema({
    type: String,
    calories: Number,
    cost: Double
});

module.exports = mongoose.model('crust', crustSchema);