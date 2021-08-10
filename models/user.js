const mongoose =require ('mongoose');
const Clothes = require('../models/clothes');
const { clothesSchema } = require("../models/clothes");



const userSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 2, maxlength: 45},
    email:{type: String, required: true, minlength: 3, maxlength: 50},
    password:{type: String, required: true, minlength: 3, maxlength: 60},
    closet:[{type: clothesSchema, default:[]}],
    profileImage:{type: String, default: `no photo`},
    aboutMe:{type: String, default: `I like fashion and looking good`, minlength: 15, maxlength: 300}
})



const User = mongoose.model("User", userSchema);
module.exports = User;