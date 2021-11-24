const mongoose= require('mongoose');
const {Schema} = require('mongoose');

const postSchema = new Schema({
   title: String,
   workers: String,
   description: String,
   customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    // required: true
 }
},
{timestamps: true});

module.exports = mongoose.model('Post', postSchema);