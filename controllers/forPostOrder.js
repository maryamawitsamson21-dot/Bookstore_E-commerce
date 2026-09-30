import {cart} from '../models/cart.js'
import {order} from '../models/order.js'
export const forPostOrder=async(req,res)=>{
    try{
        const {id}=req.body //the id of the book that is send from frontend
    const user=req.user.id
    const match=await cart.findOne({user}).populate("items.book")
   
    const selectedItem=match.items.find((item)=>item.book._id.toString()===id)
    
    if(!selectedItem){
        return res.status(404).json({
            success:false,
            message:"Book is not in your cart"
        })
    }
    const total=selectedItem.quantity * selectedItem.book.price
    const data=await order.create({
        user:match.user,
        items:[
            {
                book:selectedItem.book._id,
                quantity:selectedItem.quantity,
                price:selectedItem.book.price,
                total:total
            }
        ]
    })
  
    match.items=match.items.filter((item)=>item.book.toString()!==id)
    await match.save()
    return res.status(201).json({
            success:true,
           message:"The Book successfully added to the order",data:match
        })

    }catch(error){
        console.log(`There is an error in the controller ${error}`)
        return res.status(500).json({
            success:false,
            message:error.message||'server error'
        })
    }
}