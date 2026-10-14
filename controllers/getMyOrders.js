import { order } from "../models/order.js"

export const getMyOrders=async(req,res)=>{

    const user=req.user._id
   const data= await order.find({user})
    if(!data||data.length===0){
        return res.status(404).json({success:false,message:"There is not found any order"})
    }
    

   return res.status(200).json({
    success:true,data,message:"Order successfully send"
   })

}