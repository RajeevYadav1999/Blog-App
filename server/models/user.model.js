const mongoose = require('mongoose')

//! Schema...

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    }
    
})

//! Model...

const user = mongoose.model("User", userSchema)

module.exports = {User}