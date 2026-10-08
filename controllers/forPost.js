import {Book} from '../models/book.js'
import cloudinary from "../config/cloudinary.js";
export const forPost=async(req,res)=>{
   try{
   
     const {title,author,description,price,category,isbn,stock}=req.body
     console.log(req.body)
      if(!req.file){
            return res.json({
                success:false,
                message:"Please upload a book image"
            })
        }
        const result=await new Promise((resolve,reject)=>{
            const stream=cloudinary.uploader.upload_stream(
                {
                    floder:"bookstore/books"
                },
                (error,result)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve(result)
                    }
                }
            );
            stream.end(req.file.buffer)
        })
      
    const book=(await Book.create({title,author,addedBy:req.user.id,description,price,category,isbn,image:result.secure_url||null,stock, updatedBy:req.user.id}))
    await book.populate(["addedBy","updatedBy"])
    return res.status(201).json({success:true,message:"The Book successfully added",data:book})

   }catch(error){
    console.log(`There is an error in forPost controller ${error}`)
          return res.status(500).json({ success: false, message: error.message|| "Internal server error" });
   }

}