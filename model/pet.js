const mongoose = require('mongoose')
let Schema = mongoose.Schema

const petSchema = new Schema(
    {
        name: {
            type:String,
        },
        type:{
            type:String,
        },
        breed:{
            type:String,
        },
        age:{
            type:Number,
        }, 
    }
)

module.exports = mongoose.model('Pet', petSchema)