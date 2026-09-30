import mongoose from "mongoose"
import {MONGODB_URL} from "../.env"

export const connection=async()=>{
    try{
        
await mongoose.connect(MONGODB_URL)
console.log("Database connected successfully")
return 
    }catch(error){
        console.log("Error connecting to database",error)
     return   
    }

}