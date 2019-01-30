const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
    Firstname: {
        type: String
    },
    Lastname: {
        type: String
    },
    Address:{
        type:String
    },
    Contact:{
        type:String
    },
    Birthday:{
        type:String
    },
    Email:{
        type:String
    }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);