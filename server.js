const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;



app.use(express.body())
app.use(express.urlencoded())


app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})


// Base Route with no ID
app.get('/restaurants',async (req,res)=>{
    res.json(await Restaurant.findAll())
})







app.get('/restaurants/:id',async (req,res)=>{
    res.json(await Restaurant.findByPk(req.params.id))
})