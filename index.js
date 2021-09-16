
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

//connecting to database:

mongoose.connect(
    'mongodb+srv://PritiPurbey:priti%401234@cluster0.xfcon.mongodb.net/Firstdatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
    () => console.log('Database connected..')
);

//Importing Routes:

const routes = require('./Routes/Routes')

//route middleware:

app.use('/api',routes)

app.get("/Hello",(req,res)=>{
    res.send("Hello World")
})

app.listen(process.env.PORT || 8081,()=>console.log('Listening to the port..'))

