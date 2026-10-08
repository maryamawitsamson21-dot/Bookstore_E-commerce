import {order} from '../models/order.js'
export const forDeleteOrder=async(req,res)=>{
    try{
        const {id}=req.params
    const {bookId}=req.body
     if (!bookId) {
            return res.status(400).json({ success: false, message: "Please provide a bookId" });
        }
    const match=await order.findOne({user:req.user.id,_id:id})
    if(!match){
         return res.status(404).json({
            success:false,
            message:"Order is not found"
        })
    }
   const targetItem = match.items.find(item => item.book.toString() === bookId)
        
        if (!targetItem) {
            return res.status(404).json({
                success: false,
                message: "This book was not found in this order"
            })
        }

        // 2. Check if that specific item can be cancelled
        if (targetItem.status === "Shipped" || targetItem.status === "Delivered" || targetItem.status === "Cancelled") {
            return res.status(400).json({ // Changed to 400 Bad Request
                success: false, 
                message: `You can't cancel this item because it is already ${targetItem.status.toLowerCase()}`
            })
        }

        // 3. Update the specific item status correctly
        targetItem.status = "Cancelled"
    await match.save()
   return res.status(200).json({
            success: true, 
            message: "The item has been cancelled successfully"
        })

    }catch(error){
        console.log(`There is an error in delete order controller ${error}`)
        return res.status(500).json({success:false, message:"Internal server error"});
    }


  
}