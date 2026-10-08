import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true},
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password:{
        type:String,
        required:true,
    select:false
    },
     role:{
            type:String,
            enum:["user","admin"],
            default:"user"
        },
       profileImage:{
            type:String,
            default:null
        },
        phoneNumber:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        }

},{timestamps:true}
)
export const User=mongoose.model("User",userSchema)
