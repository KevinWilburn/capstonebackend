const mongoose =require ('mongoose')
const { closetSchema }= require('..models/clothes')

const closetSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength: 2, maxlength: 300},
    inventory:[{type: closetSchema, default:[]}]
})

const Closet = mongoose.model("Closet", closetSchema);

module.exports = closetSchema;
module.exports = Closet;