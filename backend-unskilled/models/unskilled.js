const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UnskilledSchema = new Schema({
  name: String,
  lastname: String,
  skill: String,
  location: String,
  contact: String
})

module.exports = mongoose.model('Unskilled',UnskilledSchema);
