const express =require("express");
const app=express();
const cors=require('cors');
const mongoose=require("mongoose")

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://root:password123*@cluster0.hxeftjt.mongodb.net/ITET-EVENTMANAGMENT").then(function(){
    console.log("db connected");
})

app.listen("/",function(){
    console.log("app started to run on 3001")
})
app.use('/',require("./Routes/userRoutes"))
