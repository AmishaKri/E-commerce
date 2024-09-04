var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema=new Schema({
    name:String,
    email:String,
    password:String
});
module.exports=mongoose.model("users",userSchema);

