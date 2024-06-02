import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv';
import userRoutes from "../server/routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
import bodyparser from "body-parser";
import cors from "cors"
dotenv.config();
const app = express()

app.use(bodyparser.json())
app.use(cors())

//! Allow cors origin
const corsOptions = {
    origin: "http://localhost:5173/",
    optionsSuccessStatus: 200
}

cors(corsOptions)

mongoose.connect(process.env.CONNECT_LINK)
.then(()=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log(error);
})

app.use('/api', userRoutes)
app.use('/api/user', authRoutes)
app.use('/api/auth', authRoutes);
 

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})