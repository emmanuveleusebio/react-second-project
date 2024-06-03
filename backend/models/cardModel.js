const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
    img:{
        type:String,
        required:[true, "please provide image"]
    },
    title:{
        type:String,
        required:[true, "please provide title"]
    },
    blog:{
        type:String,
        required:[true, "please provide title description"]
    },
    description:{
        type:String,
        required:[true, "please provide description"]
    },
    date:{
        type:String,
        required:[true, "please provide date"]
    }
},{timestamps:true})

module.exports = mongoose.model("reactCards", cardSchema)