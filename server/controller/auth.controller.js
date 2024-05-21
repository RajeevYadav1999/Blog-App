import bcryptjs from "bcryptjs";
import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"

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

export const signin = async (req, res, next) => {
const {email, password} = req.body;
if(!email || !password || email ==="" || password ===""){
    next(errorHandler(400, "Please fill all the fields"))
}
try {
    const validUser = await User.findOne({email})
    if(!validUser){
        return next(errorHandler(404, "User not found"))
    }

    const token = jwt.sign({id : validUser._id}, process.env.JWT_SECRET)

    const {password : pass, ...rest} = validUser._doc
    return res.status(200).cookie("access_token", token, {
        httpOnly : true
    })
    .json(rest)

} catch(error) {
    console.log(error);
    res.status(400).json({message : error.message})
}
}