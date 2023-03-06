const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;



app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})


// Base Route with no ID
app.get('/restaurants',async (req,res)=>{
    res.json(await Restaurant.findAll())
})



//Adds a restaurant to the db
app.post('/restaurants',async(req,res)=>{
    await Restaurant.create(req.body)
    res.json(await Restaurant.findAll())
})


//Updates a restaurant 

app.put('/restaurants/:id',async(req,res)=>{

    await Restaurant.update(req.body,{
        where:{
            id:req.params.id
        }
    })
    console.log('Updated')
    res.send(await Restaurant.findAll())
})

//Removes a restaurant

app.delete('/restaurants/:id',async(req,res)=>{
    await Restaurant.destroy({where:{id:req.params.id}})
    res.send(await Restaurant.findAll())
    console.log('Deleted')
})

app.get('/restaurants/:id',async (req,res)=>{
    res.json(await Restaurant.findByPk(req.params.id))
})