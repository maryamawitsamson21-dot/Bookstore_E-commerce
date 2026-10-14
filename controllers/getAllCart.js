import {cart} from '../models/cart.js'
export const getAllCart=async(req,res)=>{
   
        const data=await cart.findOne({user:req.user._id})
    if(!data){
        return res.status(404).json({success:false,message:"There is not found any cart"})
    }
    return res.status(200).json({success:true,data,message:"Cart successfully send"})
   
}