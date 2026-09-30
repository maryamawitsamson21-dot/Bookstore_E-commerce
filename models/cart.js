import mongoose from 'mongoose'
const cartSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    items:[{
        book:{
             type:mongoose.Schema.Types.ObjectId,
        ref:"Book",
        required:true
        },
        quantity:{
            type:Number,
            default:1
            
        }
    }]

})
export const cart=mongoose.model('cart',cartSchema)