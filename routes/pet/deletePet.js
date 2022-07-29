const express = require('express')
const router = express.Router({ mergeParams: true });
const Pet = require('../../model/pet');

router.delete('/',async(req,res)=>{
    try{
        await Pet.deleteOne({_id:req.params.id});
       res.send({'data':'Deleted Successfully','error':''});
   }catch(e){
       res.send({'data':'','error':e});
   }
})

module.exports =router;