import {User} from "../models/user.js"
export const getAllProfile=async(req,res)=>{
  
const users=await User.find({})
res.json({success:true,message:"All user profiles fetched successfully",data:users})
    
}