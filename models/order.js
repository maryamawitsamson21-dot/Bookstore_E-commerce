import mongoose from 'mongoose'
const orderSchema=new mongoose.Schema({
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
           required:true
            
        },
        price:{
            type:Number,
        required:true
        },
        status:{
            type:String,
            enum:["Pending","Confirmed","Shipped","Delivered","Cancelled"],
            default:"Pending"

        },
        total:{
            type:Number,
            required:true
        }
    }]

},{timestamps:true})
export const order=mongoose.model('order',orderSchema)