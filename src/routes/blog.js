const router = require('express').Router();
const Blog = require('../models/Blog');
const bodyparser=require("body-parser");

router.use(bodyparser())
// Your routing code goes here




router.get("/blog",async(req,res)=>{
    const page = req.query.page
    const search = req.query.search

const blog=await Blog.find({topic:search},{},{limit:5,skip:((Number(page)-1)*5)})
res.json({
    status:"success",
    result:blog
})

router.post("/blog",async(req,res)=>{
    try{
        const blog_data=new Blog({
            topic:req.body.topic,
            description:req.body.description,
            posted_at:req.body.posted_at,
            posted_by:req.body.posted_by
        })
        const result= await blog_data.save()
        res.json({
            status:"success",
            result:result
        })
    }
    catch(err){
        console.log("error")
    }
})

})


router.put("/blog/:id",async(req,res)=>{
try{
const _id=req.params.id
const data =await Blog.findByIdAndUpdate(_id,req.body,{new:true})
res.json({
    status:"success",
    result:data
})
}
catch(err){
    console.log("error")
}
})

router.delete("/blog/:id",async(req,res)=>{
    try{
const _id=req.params.id;
const deletedata=await Blog.findByIdAndDelete(_id,req.body)
res.json({
    status:"success",
    result:deletedata
})
    }
    catch(err){
        console.log("error")
    }
})

module.exports = router;