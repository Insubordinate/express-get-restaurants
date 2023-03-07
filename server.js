const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/router')



app.use('/restaurants',router)

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})