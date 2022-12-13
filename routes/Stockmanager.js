var express = require('express');
var app = express();
var prod = require('../models/Products');
app.get('/',(req,res)=>{
    res.send('heloooooo');

});
app.get('/add',async(req,res)=>{
    
    var product = new prod ({
        Name : 'gazeuz',
        Matricule : 2,
        Prix : 2,
        Stock : 3
    })
    try{
        newproduct = await product.save();
        res.status(201).json({newproduct});
    }
    catch(err){//404 we cound not find some thing like specifique user
        res.status(400).json({message : err})//400 some thing wrong with your user input not with your server

    }
    res.end();

});
app.get('/show',async(req,res,next)=>{
    var prodlist ;
    try{
        prodlist = await prod.find();
    }
    catch(err){
        return console.log(err);
    }
    console.log(prodlist);
    return res.json({prodlist});    

});
app.get('/delete',async(req,res,next)=>{
    try{
        await prod.findByIdAndRemove('6397d646d23183f7c40aba0f',()=> console.log('deleted'));
        res.json({message : 'removed'})
    }
    catch(err){
        res.status(500).json({message : err.message });//500 some thig wrong hapened
    }
})
module.exports = app;