const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const SkilledSchema= new Schema({
    name: String,
    lastName: String,
    location: String,
    skill: String,
    contact: String
})
module.exports = mongoose.model('Skilled', SkilledSchema)