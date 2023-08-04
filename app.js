const express =require("express");
const app=express();
const cors=require('cors');
const mongoose=require("mongoose")
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://itexperttraining:itExpertraining_2023@cluster0.y1ctxvj.mongodb.net/ITET-EVENTMANAGMENT").then(function(){
    console.log("db connected");
})

app.listen(3001,function(){
    console.log("app started to run on 3001")
})
app.use('/',require("./Routes/userRoutes"))
