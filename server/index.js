import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv';
import userRoutes from "../server/routes/user.routes.js"
dotenv.config();
const app = express()

mongoose.connect(process.env.CONNECT_LINK)
.then(()=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log(error);
})

app.use('/api', userRoutes)
 

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})