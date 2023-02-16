var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var pizzaSchema = new Schema({
    pizzas: [{ type: Schema.Types.ObjectId, ref: 'pizza' }]
});

module.exports = mongoose.model('crust', pizzaSchema);