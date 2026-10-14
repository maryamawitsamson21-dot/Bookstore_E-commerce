import {User} from "../models/user.js"
export const getSpecificProfile=async(req,res)=>{
   
     const {id}=req.params
    const user=await User.findById(id)
    res.json({success:true,message:"User profile fetched successfully",data:user})
 
}