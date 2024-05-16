const mongoose = require('mongoose');

const useSchema = new mongoose.Schema({
    name:String,
    age:String 
})

// we use the useModel to store a useschema
const  UseModel = mongoose.model('use',useSchema)


// we use the above variable for module exports 
module.exports = UseModel;