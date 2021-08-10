const mongoose =require ('mongoose')



const clothesSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength: 2, maxlength: 300},
    weatherCategory:{type:String, required:true, minlength: 2, maxlength: 300}
})

const Clothes = mongoose.model("Clothes", clothesSchema);


exports.clothesSchema = clothesSchema;
module.exports = Clothes;