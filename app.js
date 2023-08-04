const express =require("express");
const app=express();
const cors=require('cors');
const mongoose=require("mongoose")
const port = process.env.PORT || 3001

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://root:password123*@cluster0.hxeftjt.mongodb.net/ITET-EVENTMANAGMENT").then(function(){
    console.log("db connected");
})

app.listen(port,function(){
    console.log("app started to run on 3001")
})
app.use('/',require("./Routes/userRoutes"))
