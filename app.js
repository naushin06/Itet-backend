const express =require("express");
const app=express();
const cors=require('cors');
const mongoose=require("mongoose")
const port = process.env.PORT || 5000
// const corsOptions = {
//     origin: "https://itet-frontend.vercel.app/", // Replace with your frontend's domain
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true
//   };
  
//   app.use(cors(corsOptions));
  
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://itexperttraining:itExpertraining_2023@cluster0.y1ctxvj.mongodb.net/ITET-EVENTMANAGMENT").then(function(){
    console.log("db connected");
})

app.listen(port,function(){
    console.log("app started to run on 3001")
})
app.use('/',require("./Routes/userRoutes"))
