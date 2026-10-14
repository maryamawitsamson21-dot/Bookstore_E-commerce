import { cart } from "../models/cart.js";

export const getSpecificCart=async(req,res)=>{
   
        const {id}=req.params
const data=await cart.findOne({ user:req.user._id,"items.book":id}) 
 if(!data){
        return res.status(404).json({success:false,message:"There is not found any cart by this ibsn"})
    }
    return res.status(200).json({success:true,data,message:"Cart successfully found by this ibsn "})

   
}