require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router=require('./Routes/router')
require("./DB/connection")

// Creates an Express application
const pfServer = express()

// use cors in express server
pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

pfServer.listen(PORT,() => {
    console.log(`Project fair server star at PORT : ${PORT}`);
})

pfServer.get("/",(req,res)=>{
    res.status(200).send("Project fair server started and wating for clinet requested!!")
})

 