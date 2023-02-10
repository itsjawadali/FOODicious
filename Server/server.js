const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv/config')
const app = express()

app.use(bodyParser.json())

//middleWare
app.use(cors())

//import routes
const Routes = require('./routes/products')
app.use(Routes)

app.use("/", require('./routes/createUser'))





//Routes
app.get("/",(req, res)=>{
    res.send('Here we go again')
})



//connect to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION,
()=>{
    console.log('db connected')
})


const port = 3001
app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})
 