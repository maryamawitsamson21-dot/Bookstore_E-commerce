import {Book} from '../models/book.js'
import cloudinary from "../config/cloudinary.js";
export const forUpdate=async (req,res)=>{
    try{
        const {id}=req.params
        const {isbn}=req.body
        const file=req.file
                const existingBook = await Book.findOne({
  isbn

})

if (existingBook) {
  return res.status(400).json({
    success: false,
    message: "ISBN already exists"
  })
}
if(!file){
     const book=await Book.findByIdAndUpdate({ _id: id}, {...req.body,updatedBy:req.user.id}, {returnDocument: 'after'})

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
     
       const book = await Book.findByIdAndUpdate({ _id: id }, { ...req.body,updatedBy:req.user.id,image: result.secure_url },{returnDocument: 'after'});

       
        if(!book){
            return res.status(404).json({success:false, message:"No book found"});
        }
        return res.status(200).json({success:true, data:book});

    } catch(error){
        return res.status(500).json({
            success:false,
            message:"An error occurred while uploading the book image",
            error:error.message

        })
    }

}