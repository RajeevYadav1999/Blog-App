import bcryptjs from "bcryptjs";
import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next)=>{

    const {username, email, password} = req.body;

    if(!username || !email || !password || username ==="" || email=== "" || password ===""){
        // return res.status(400).json({message:"please fill all the fields" })
        next(errorHandler(400, "Please fill all the fields"))
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)


 const newUser = new User({
    username : req.body.username,
    email : req.body.email,
    password : hashedPassword,
 })
try{
    await newUser.save()
    res.json({"message": "user created"})
}catch(error){
    res.status(400).json({"message": error.message})
}
}