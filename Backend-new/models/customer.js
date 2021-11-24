const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./post')
const passportLocalMongoose = require('passport-local-mongoose');


const CustomerSchema = new Schema ({
    username: {
        type: String,
    },
    email :{
        type: String,
    },
    // location: {
    //     type:String, 
    // },
    // contact: {
    //     type:String, 
    //     required: true 
    // },
    password: {
        type: String, 
    },
    posts: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Post'
        }
    ]
});

// CustomerSchema.virtual('posts', {
//     ref: 'Post', //The Model to use
//     localField: '_id', //Find in Model, where localField 
//     foreignField: 'customer', // is equal to foreignField
//  });
 
//  // Set Object and Json property to true. Default is set to false
//  CustomerSchema.set('toObject', { virtuals: true });
//  CustomerSchema.set('toJSON', { virtuals: true });
 
 
module.exports = mongoose.model('Customer', CustomerSchema);