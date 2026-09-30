import mongoose from 'mongoose'
export const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
      updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },

    author: {
        type:String,
        required:true
    },
       description: {
        type:String,
       
    },
    price: {
        type:Number,
        required:true
    },
    category: {
        type: String,
        enum: ["Fiction", "Non-Fiction", "Science Fiction", "Fantasy", "History"],
        required: true
    },
    isbn: {
        type: String,
        unique: true
    },
    image: {
        type:String,
    },
    stock: {
        type:Number,
        required:true
     }

    

},{timestamps:true
});
export const Book = mongoose.model('Book', bookSchema);