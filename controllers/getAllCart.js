import {cart} from '../models/cart.js'
export const getAllCart=async(req,res)=>{
    try{
        const data=await cart.findOne({user:req.user._id})
    if(!data){
        return res.status(404).json({success:false,message:"There is not found any cart"})
    }
    return res.status(200).json({success:true,data,message:"Cart successfully send"})
    }catch(error){
         console.log(`There is an error in getAllCart controller: ${error}`);
        return res.status(500).json({success:false, message:"Internal server error"});
    }
}