import { order } from "../models/order.js"

export const updateOrderStatus=async(req,res)=>{
    try{
        const {id}=req.params
    const {status,bookId}=req.body
    const allowed=[
        "Pending","Confirmed","Shipped","Delivered","Cancelled"
    ]
    if(!allowed.includes(status)){
        return res.status(400).json({
            message:"Invalid status"
        })
    }
    
    const match=await order.findById(id)
     if(!match){
            return res.status(404).json({success:false, message:"No order found"});
        }
       const value= match.items.find((item)=>item.book.toString()===bookId)
       if(!value){
          return res.status(404).json({success:false, message:"No bookId found in this order"});
       }
       value.status=status
       await match.save()
        return res.status(200).json({success:true, data:match,message:"Order status updated successfully"});

    }catch(error){
        console.log(`There is an error in updateCart controller: ${error}`);
        return res.status(500).json({success:false, message:"Internal server error"});
    }







}