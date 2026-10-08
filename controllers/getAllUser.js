import {User} from "../models/user.js"
export const getAllUser = async (req, res) => {
    try{

        const users=await User.find({})
        if(!users){
            return res.json({
success:false,message:"No user found"
            })  }
            return res.json({success:true,message:"All user profiles fetched successfully",data:users})
      
    }catch(error){
        console.log(`There is an error in getAllUser controller: ${error}`);
        return res.status(500).json({success:false, message:"Internal server error"});
    }
}
