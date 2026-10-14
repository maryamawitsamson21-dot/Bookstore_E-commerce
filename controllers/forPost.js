import {Book} from '../models/book.js'
import cloudinary from "../config/cloudinary.js";
export const forPost=async(req,res)=>{
   
   
     const {title,author,description,price,category,isbn,stock}=req.body
     console.log(req.body)
      if(req.file){
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
        }
     else{
           const book=(await Book.create({title,author,addedBy:req.user.id,description,price,category,isbn,image:null,stock, updatedBy:req.user.id}))
    await book.populate(["addedBy","updatedBy"])
    return res.status(201).json({success:true,message:"The Book successfully added without an image",data:book})
     }

  
}