const express = require('express')
const router = express.Router({ mergeParams: true });
const Pet = require('../../model/pet');

router.patch('/',async(req,res)=>{
    try{
        console.log(req.params.id);
        console.log("*");
        await Pet.updateOne({_id:req.params.id},req.body);
       res.send({'data':'Updated Successfully','error':''});
   }catch(e){
       res.send({'data':'','error':e});
   }
})

module.exports =router;