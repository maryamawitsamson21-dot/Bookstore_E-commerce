import { cart } from "../models/cart.js";

export const updateCart=async(req,res)=>{
    
        const {id}=req.params
        const {quantity}=req.body
     const data=await cart.findOneAndUpdate({ user:req.user.id,"items.book":id},{$set:{"items.$.quantity":quantity}},{returnDocument: 'after'}).populate("items.book")
        if(!data){
            return res.status(404).json({success:false, message:"No cart found"});
        }
        return res.status(200).json({success:true, data});

   

}