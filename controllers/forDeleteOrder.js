import {order} from '../models/order.js'
export const forDeleteOrder=async(req,res)=>{
    const {id}=req.params
    const {bookId}=req.body
    const match=await order.findOne({_id:id})
    if(!match){
         return res.status(404).json({
            success:false,
            message:"Order is not found"
        })
    }
   

    match.items.status="Cancelled"
    await match.save()
  return res.status(200).json({
               success:true, message:"The cart is Deleted Successfully"
            })
}