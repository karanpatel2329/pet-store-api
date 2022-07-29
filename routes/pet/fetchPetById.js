const express = require('express')
const router = express.Router({ mergeParams: true });
const Pet = require('../../model/pet');

router.get('/',async(req,res)=>{
    try{
        console.log(req.params.id);
       var pet = await Pet.findOne({_id:req.params.id});
       res.send({'data':pet,'error':''});
   }catch(e){
       res.send({'data':'','error':e});
   }
})

module.exports =router;