let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let server = express()
let route = require('./Routes/route')
server.use(express.json())
server.use(cors())
mongoose.connect("mongodb+srv://reservations:72zDm1eTOLD1crDh@cluster0.vmjwxjc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err);
})
server.use('/',route)
server.listen(3000)
