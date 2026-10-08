import {User} from "../models/user.js"
export const getSpecificProfile=async(req,res)=>{
   try{
     const {id}=req.params
    const user=await User.findById(id)
    res.json({success:true,message:"User profile fetched successfully",data:user})
   }catch(error){
    console.log(`There is an error in getSpecificProfile controller: ${error}`);
    return res.status(500).json({success:false, message:"Internal server error"});
   }
}