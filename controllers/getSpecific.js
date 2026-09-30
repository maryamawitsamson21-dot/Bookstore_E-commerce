import {Book} from '../models/book.js'
export const getSpecific=async (req,res)=>{
    try{
        const {id}=req.params
     
        const book=await Book.findOne({isbn:id})
        
        if(!book){
            return res.status(404).json({success:false, message:"No book found"});
        }
        return res.status(200).json({success:true, data:book});

    }catch(error){
        console.log(`There is an error in getSpecific controller: ${error}`);
        return res.status(500).json({success:false, message:"Internal server error"});
    }
}