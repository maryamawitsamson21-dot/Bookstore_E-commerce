import { order } from "../models/order.js"
export const getAllOrders=async(req,res)=>{
   try{
     const data=await order.find({})
if(!data||data.length===0){
        return res.status(404).json({success:false,message:"There is not found any order"})
    }
    

   return res.status(200).json({
    success:true,data,message:"Order successfully send"
   })
   }catch(error){
     console.log(`There is an error in the controller ${error}`)
        return res.status(500).json({
            success:false,
            message:error.message||'server error'
        })
}
}