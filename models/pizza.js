var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var PizzaSchema = new Schema({
    crust: { type: Schema.Types.ObjectId, ref: 'crust' },
    toppings: [{ type: Schema.Types.ObjectId, ref: 'topping' }],
});


module.exports = mongoose.model('pizza', PizzaSchema);