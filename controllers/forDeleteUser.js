import {User} from "../models/user.js";
export const forDeleteUser = async (req, res) => {
  
        const {id}=req.params
        const user=await User.findByIdAndDelete(id)
        if(!user){
            return res.json({success:false,message:"User not found"})
        }
        return res.json({success:true,message:"User deleted successfully"})
   }