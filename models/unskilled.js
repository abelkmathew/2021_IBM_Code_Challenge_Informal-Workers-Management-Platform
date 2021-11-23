const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnskilledSchema = new Schema ({
    name: String, 
    lastName: String, 
    location: String, 
    jobDescription: String, 
    workers: String,
    contact: String
})

module.exports = mongoose.model('Unskilled', UnskilledSchema);