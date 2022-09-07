const express=require('express')
const router=express.Router()
const model=require('../model/modelcric')
router.get('/',async(req,res)=>{
try{
    const a=await model.find()
    res.json(a)
}
catch(err){
    res.send("Error : "+err)
}
})
router.post('/',async(req,res)=>{
    const a2 = new model(
        {
        name:req.body.name,
        tech:req.body.tech,
        eligibility:req.body.eligibility,
        Salary:req.body.Salary
        }
    )
    try{
       const a=await a2.save()
       res.json(a)
    }
    catch(err){
        res.send("Error : "+err)
    }
    })

    router.get('/:id',async(req,res)=>{
        try{
            const a=await model.findById(req.params.id)
            res.json(a)
        }
        catch(err){
            res.send("Error : "+err)
        }
        })

    router.patch('/:id',async(req,res)=>{
        try{
            const data=await model.findById(req.params.id)
            data.tech=req.body.tech
            const x1=await data.save()
            res.json(x1)
        }
        catch(err){
            res.send("Error : "+err)
        }
     })
module.exports=router
