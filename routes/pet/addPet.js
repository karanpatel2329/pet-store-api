const express = require('express')
const router = express.Router();
const Pet = require('../../model/pet');
const path = require("path")
const reader = require('xlsx')
router.post('/',async(req,res)=>{
    try{
        var XLSX = require('xlsx')
        var workbook = XLSX.readFile(req.file.path);
        var sheet_name_list = workbook.SheetNames;
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        console.log(xlData);
        for(var i in xlData){
            const pet = new Pet({name:xlData[i].name,type:xlData[i].type,breed:xlData[i].breed,age:xlData[i].age});
            await pet.save();
            console.log(xlData[i].name);
        }
        res.send({"data":"Successfully Added",'error':''});
        }
        catch(e){
            res.send({'data':'','error':e})
        }
})

module.exports =router;