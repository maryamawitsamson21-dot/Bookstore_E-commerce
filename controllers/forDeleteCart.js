import { cart } from "../models/cart.js"
export const forDeleteCart=async(req,res)=>{
      try{
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
    
        }catch(error){
            console.log(`There is an error in delete cart controller ${error}`)
            return res.status(500).json({success:false, message:"Internal server error"});
        }
}