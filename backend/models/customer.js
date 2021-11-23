const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema ({
    name: String, 
    lastName: String, 
    location: String, 
    description: String, 
    workers: String,
    contact: String
})

module.exports = mongoose.model('Customer', CustomerSchema);