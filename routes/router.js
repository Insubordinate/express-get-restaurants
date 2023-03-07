const express = require('express')
const router = express.Router()
const {check,oneOf,validationResult} = require('express-validator')
const {sequelize} = require('../db')
const { Restaurant } = require('../models/Restaurant')



router.use(express.json())
router.use(express.urlencoded())



// Allows you to request data from the DB
router.get('/',async(req,res)=>{
    res.json(await Restaurant.findAll())

})

router.get('/:id',async(req,res)=>{
    res.json(await Restaurant.findAll({where:{id:req.params.id}}))
})



// Allows you to update a row in the DB
router.put('/:id',async(req,res)=>{
    await Restaurant.update(req.body,{where:{id:req.params.id}})
    res.json(await Restaurant.findAll())
})


// Allows you to add Restaurants to the Database
 router.post('/',
                check(['name','location','cuisine'])
                    .trim()
                    .exists({checkFalsy:true})
            ,
            async(req,res)=>{
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({errors:errors.array()})
                }
                await Restaurant.create(req.body)
                res.json(await Restaurant.findAll())
 })



// // Allows you to delete Restaurants from the DB
router.delete('/:id',async(req,res)=>{
    await Restaurant.destroy({where:{id:req.params.id}})
    res.json(await Restaurant.findAll())
})


module.exports = router