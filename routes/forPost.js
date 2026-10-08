import express from "express";
import {auth} from '../middlewares/auth.js'
import {admin} from '../middlewares/admin.js'
import {forPostCart} from '../controllers/forPostCart.js'

import {forPost} from "../controllers/forPost.js";
import { forPostOrder } from "../controllers/forPostOrder.js";
import multer from "multer";
import {upload} from "../middlewares/multer.js"
export const router = express.Router();
router.post("/forPost",auth,(req,res,next)=>{
    upload.single("bookImage")(req,res,function(err){
        if(err instanceof multer.MulterError){
            return res.status(400).json({success:false,message:err.message})
        }
        else if(err){
           
            return res.status(500).json({success:false,message:"An error occurred while uploading the file.",error:err.message})
        }
        next();
    })
},forPost)
router.post("/forPostCart",auth,forPostCart)
router.post("/forPostOrder",auth,forPostOrder)