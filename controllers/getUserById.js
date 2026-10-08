import {User} from "../models/user.js"    
export const getUserById=async(req,res)=>{
    try{
        const {id}=req.params
        const user=await User.findById(id)
        if(!user){
            return res.status(404).json({success:false,message:"User not found"})
        }
        return res.json({success:true,message:"User fetched successfully",data:user})

    }catch(error){
        console.log(`There is an error in getUserById controller: ${error}`);
        return res.status(500).json({success:false, message:"Internal server error"});
    }
}