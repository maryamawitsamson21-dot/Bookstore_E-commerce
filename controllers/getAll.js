import {Book} from '../models/book.js'
export const getAll=async (req,res)=>{
   
        const books=await Book.find({ })
        if(!books){
            return res.status(404).json({success:false, message:"No books found"});
        }

        return res.status(200).json({success:true, data:books});

   
}