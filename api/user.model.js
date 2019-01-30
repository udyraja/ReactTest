const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for User
let User = new Schema({
    Firstname: {
        type: String,required: true
    },
    Lastname: {
        type: String,required: true
    },
    Address:{
        type:String,required: true
    },
    Contact:{
        type:String,required: true
    },
    Birthday:{
        type: Date,required: true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);