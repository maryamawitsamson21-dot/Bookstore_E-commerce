import {User} from "../models/user.js"    
export const getUserById=async(req,res)=>{
   
        const {id}=req.params
        const user=await User.findById(id)
        if(!user){
            return res.status(404).json({success:false,message:"User not found"})
        }
        return res.json({success:true,message:"User fetched successfully",data:user})

}