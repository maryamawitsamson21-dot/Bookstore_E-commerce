import {Book} from '../models/book.js'
export const getAll=async (req,res)=>{
    try{
        const books=await Book.find({ })
        if(!books){
            return res.status(404).json({success:false, message:"No books found"});
        }

        return res.status(200).json({success:true, data:books});

    }catch(error){
        console.log(`There is an error in getAll controller: ${error}`);
        return res.status(500).json({success:false, message:"Internal server error"});
    }
}