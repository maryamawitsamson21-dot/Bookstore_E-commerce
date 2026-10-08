import express from "express";
import {auth} from '../middlewares/auth.js'
import {admin} from '../middlewares/admin.js'
import {updateCart} from '../controllers/updateCart.js'

import {forUpdate} from "../controllers/forUpdate.js";
import {updateOrderStatus} from "../controllers/updateOrderStatus.js";
import { updateProfileImage } from "../controllers/updateProfileImage.js";
import multer from "multer";
import {upload} from "../middlewares/multer.js"
import cloudinary from "../config/cloudinary.js";
import { updatePassword } from "../controllers/updatePassword.js";
export const router = express.Router();
router.put("/forUpdatePassword",auth,updatePassword)
router.patch("/forUpdate/:id",auth,admin,(req,res,next)=>{
    upload.single("bookImage")(req,res,function(err){
        if(err instanceof multer.MulterError){
            return res.status(400).json({success:false,message:err.message})
        }
        else if(err){
           
            return res.status(500).json({success:false,message:"An error occurred while uploading the file.",error:err.message})
        }
        next();
    })
},forUpdate)
router.patch("/forUpdateCart/:id",auth,updateCart)
router.patch("/forUpdateOrder/:id",auth,admin,updateOrderStatus)
router.patch("/forUpdateProfile/:id",auth,(req,res,next)=>{
    upload.single('image')(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ success: false, message: err.message });
        } else if (err) {
            return res.status(500).json({ success: false, message: 'An error occurred while uploading the file.' });
        }
        next();
    });
},updateProfileImage)







