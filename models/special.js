var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var specialSchema = new Schema({
    pizza: [{ type: Schema.Types.ObjectId, ref: 'pizza' }],
    saving: Double
});

module.exports = mongoose.model('special', specialSchema);