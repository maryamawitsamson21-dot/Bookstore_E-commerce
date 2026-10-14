import { cart } from "../models/cart.js"
export const forDeleteAllCart=async(req,res)=>{
   
          
        const data=await cart.findOneAndDelete({
            user:req.user.id,
         
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