import { order } from "../models/order.js"
export const getSpecificOrder=async(req,res)=>{

    const {id}=req.params
    const user=req.user._id
    const data=await order.findOne({user,_id:id})
     if(!data){
        return res.status(404).json({success:false,message:"There is not found any order by this order id"})
    }
    return res.status(200).json({success:true,data,message:"Order successfully found by this ibsn "})



}