import { cart } from "../models/cart.js"
export const forDeleteCart=async(req,res)=>{
      
            const {id}=req.params
        const data=await cart.findOneAndDelete({
             user:req.user.id,
         "items.book":id
        })
        if(!data){
            return res.status(404).json({
               success:false, message:"No cart found"
            })
        }
         return res.status(200).json({
               success:true, message:"The cart is Deleted Successfully"
            })
    
        
}