import { Book } from "../models/book.js"

export const forDelete=async(req,res)=>{
    try{
        const {id}=req.params
    const book=await Book.findOneAndDelete({
        isbn:id
    })
    if(!book){
        return res.status(404).json({
           success:false, message:"No book found"
        })
    }
     return res.status(200).json({
           success:true, message:"The Book is Deleted Successfully"
        })

    }catch(error){
        console.log(`There is an error in delete controller ${error}`)
        return res.status(500).json({success:false, message:"Internal server error"});
    }


}