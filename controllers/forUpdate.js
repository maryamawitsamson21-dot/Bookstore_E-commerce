import {Book} from '../models/book.js'
export const forUpdate=async (req,res)=>{
    try{
        const {id}=req.params
        const {isbn}=req.body
                const existingBook = await Book.findOne({
  isbn

})

if (existingBook) {
  return res.status(400).json({
    success: false,
    message: "ISBN already exists"
  })
}

        const book=await Book.findOneAndUpdate({isbn:id}, {...req.body,updatedBy:req.user.id}, {returnDocument: 'after'})
        console.log(book)
        if(!book){
            return res.status(404).json({success:false, message:"No book found"});
        }
        return res.status(200).json({success:true, data:book});

    }catch(error){
        console.log(`There is an error in forUpdate controller: ${error}`);
       
        
    }
}