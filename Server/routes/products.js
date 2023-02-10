const express = require('express')
const foodData = require('../models/model')

const router = express.Router()

//get all foodItems
router.get("/fooditems", async(req, res)=>{
    try {
        const getFoodItems = await foodData.find()
        res.json(getFoodItems)
        
    } catch (error) {
        res.json({message: error})
    }
})

//Submits a foodItem
router.post("/fooditems", async(req, res)=>{
    const foodItem = new foodData({
        CategoryName: req.body.CategoryName,
        name: req.body.name,
        img: req.body.img,
        options: req.body.options,
        description: req.body.description

    })
    try {
        const savedData = await foodItem.save()
        res.json(savedData)
        
    } catch (error) {
        res.json({message: error})
    }
})

// //find by Id 
// router.get("/posts/:postId", async(req, res)=>{
//     try {
//         const getPost = await Post.findById(req.params.postId)
//         res.json(getPost)
        
//     } catch (error) {
//         res.json({message: error})
//     }
// })

// //delete a post
// router.delete("/posts/:postId", async(req, res)=>{
//     try {
//         await Post.findByIdAndDelete(req.params.postId)
//         res.json(`Post with id ${req.params.postId} deleted`)
        
//     } catch (error) {
//         res.json({message: error})
//     }
// })

// //update a post
// router.patch("/posts/:postId", async(req, res)=>{
//     try {
//         const updatedPost = await Post.updateOne({_id:req.params.postId}, {$set: {
//             title : req.body.title,
//             description : req.body.description
//         }})
//         res.json(updatedPost)
        
//     } catch (error) {
//         res.json({message: error})
//     }
// })

router.post


module.exports = router