import { order } from "../models/order.js"
export const getSpecificOrder=async(req,res)=>{
try{
    const {id}=req.params
    const user=req.user._id
    const data=await order.findOne({user,_id:id})
     if(!data){
        return res.status(404).json({success:false,message:"There is not found any order by this order id"})
    }
    return res.status(200).json({success:true,data,message:"Order successfully found by this ibsn "})


}catch(error){
         console.log(`There is an error in getSpecificOrder controller: ${error}`);
        return res.status(500).json({success:false, message:"Internal server error"});
    }
}