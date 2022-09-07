const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    eligibility:{
        type:Boolean,
        required:true,
        default:false
    },
    Salary:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('cric',schema)

