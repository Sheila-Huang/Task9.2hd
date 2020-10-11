const mongoose=require('mongoose')
const noteSchema=new mongoose.Schema({

noteLine:String,
})

module.exports=mongoose.model("Note",noteSchema)