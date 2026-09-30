import {Book} from '../models/book.js'
export const forPost=async(req,res)=>{
   try{
   
     const {title,author,description,price,category,isbn,image,stock}=req.body
    const book=(await Book.create({title,author,addedBy:req.user.id,description,price,category,isbn,image,stock, updatedBy:req.user.id}))
    await book.populate(["addedBy","updatedBy"])
    return res.status(201).json({success:true,message:"The Book successfully added",data:book})

   }catch(error){
    console.log(`There is an error in forPost controller ${error}`)
          return res.status(500).json({ success: false, message: error.message|| "Internal server error" });
   }

}