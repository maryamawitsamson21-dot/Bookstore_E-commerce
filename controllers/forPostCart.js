import { cart } from "../models/cart.js"

export const forPostCart=async(req,res)=>{
   try{
     const {book,quantity}=req.body// book is the _id of the book model not the isbn
     const user=req.user.id
     const match=await cart.findOne({user})
     if(!match){
         const data=await cart.create({user,items:[{book,quantity}]})
   return res.status(201).json({success:true,message:"The Book successfully added to the cart",data})
     }
     else {
           // 3. If a cart exists, check if the book is already in the array
           const existingItem = match.items.find(
               (item) => item.book.toString() === book
           );

           if (existingItem) {
               // Item exists -> increase the quantity
               
              existingItem.quantity += Number(quantity);
           } else {
               // Item does not exist -> push it to the array
               match.items.push({ book, quantity });
           }
        }
        await match.save(); 
        return res.status(200).json({ success: true, message: "The book successfully added", data: match });
   
   }catch(error)
   { console.log(`There is an error in forPostCart controller ${error}`)
          return res.status(500).json({ success: false, message:error.message|| "Internal server error" });

   }

}