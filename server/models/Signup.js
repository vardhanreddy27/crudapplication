const mongoose = require('mongoose');
const SignupSchema = new mongoose.Schema({
Name:{
    type:String,
    required: true,
},
Email:{
    type:String,
    required: true,
},Password:{
    type:String,
    required: true,
},
});
const Custumer = mongoose.model('Signup',SignupSchema);
module.exports=Custumer;