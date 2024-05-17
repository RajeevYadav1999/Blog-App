import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv';
import userRoutes from "../server/routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
import bodyparser from "body-parser";
dotenv.config();
const app = express()

app.use(bodyparser.json())

mongoose.connect(process.env.CONNECT_LINK)
.then(()=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log(error);
})

app.use('/api', userRoutes)
app.use('/api/user', authRoutes)
 

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})