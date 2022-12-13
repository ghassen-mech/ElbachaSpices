const mongoose=require('mongoose');
var Schema=mongoose.Schema;
var Product = new Schema({
    Name : String,
    Matricule : Number,
    Prix : Number,
    Stock : Number
});
module.exports = mongoose.model('EBMagasin',Product);