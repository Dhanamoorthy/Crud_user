const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')

const dotenv=require ('dotenv')
const config = require('../config/mongoose')

const postroute= require('../routes/postuser')
const getroute = require('../routes/getuser')
const updateroute = require('../routes/updateuser')
const deleteroute = require('../routes/deleteuser')

dotenv.config();
const app= express()
app.use(cors())
app.use(express.json())

app.use('/post',postroute)
app.use('/get',getroute)
app.use('/update',updateroute)
app.use('/delete',deleteroute)

mongoose.connect(config.mongodburi,{})
const db = mongoose.connection
db.on('error', (err) => {
    console.error('Connection error:', err)
})
db.once('open', () => {
    console.log('Successfully connected to MongoDB')
})

app.listen(config.port,config.hostname,()=>{
    console.log(`server is running on http://${config.hostname}:${config.port}`)
})
