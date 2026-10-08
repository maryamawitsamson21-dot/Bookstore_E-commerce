import {User} from "../models/user.js"
export const getAllProfile=async(req,res)=>{
    try{
const users=await User.find({})
res.json({success:true,message:"All user profiles fetched successfully",data:users})
    }catch(error){
        console.log(`There is an error in getAllProfile controller: ${error}`);
        return res.status(500).json({success:false, message:"Internal server error"});
    }
}