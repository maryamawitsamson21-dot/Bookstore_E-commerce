import {User} from "../models/user.js"
export const getAllUser = async (req, res) => {
    

        const users=await User.find({})
        if(!users){
            return res.json({
success:false,message:"No user found"
            })  }
            return res.json({success:true,message:"All user profiles fetched successfully",data:users})
      
   
}
