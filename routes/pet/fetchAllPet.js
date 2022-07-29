const express = require('express')
const router = express.Router();
const Pet = require('../../model/pet');

router.get('/',async(req,res)=>{
    try{
       var pet = await Pet.find();
       res.send({'data':pet,'error':''});
   }catch(e){
       res.send({'data':'','error':e});
   }
})

module.exports =router;