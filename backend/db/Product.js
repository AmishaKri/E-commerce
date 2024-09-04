var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const productSchema=new Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
});
module.exports=mongoose.model("products",productSchema);
