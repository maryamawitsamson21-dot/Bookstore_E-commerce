import express from "express";
import {auth} from '../middlewares/auth.js'
import {admin} from '../middlewares/admin.js'
import {updateCart} from '../controllers/updateCart.js'
import { forDeactivateUser } from "../controllers/forDeactivateUser.js";
import {forUpdate} from "../controllers/forUpdate.js";
import {updateOrderStatus} from "../controllers/updateOrderStatus.js";
import { updateProfileImage } from "../controllers/updateProfileImage.js";
import multer from "multer";
import {upload} from "../middlewares/multer.js"
import cloudinary from "../config/cloudinary.js";
import { updatePassword } from "../controllers/updatePassword.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import {validator} from "../middlewares/validator.js";
import { updateBookData,updateCartData, updateOrderData, updateOrderStatusSchema } from "../validators/updateData.js";
import {paramsValidator} from "../middlewares/validator.js";
import {mongoIdSchema} from "../validators/mongodbId.js";
import { updateProfileSchema,updatePasswordSchema } from "../validators/user.validator.js";
export const router = express.Router();

router.put("/forUpdatePassword",auth,validator(updatePasswordSchema),asyncHandler(updatePassword))
router.patch("/forUpdate/:id",paramsValidator(mongoIdSchema),auth,admin, upload.single("bookImage"),validator(updateBookData),asyncHandler(forUpdate))
router.patch("/forUpdateCart/:id",paramsValidator(mongoIdSchema),auth,validator(updateCartData),asyncHandler(updateCart))
router.patch("/forUpdateOrderStatus/:id",paramsValidator(mongoIdSchema),auth,admin,validator(updateOrderStatusSchema),asyncHandler(updateOrderStatus))
router.patch("/forDeactivateUser/:id",paramsValidator(mongoIdSchema),auth,admin,asyncHandler(forDeactivateUser))  
router.patch("/forUpdateProfile/:id",paramsValidator(mongoIdSchema),auth,upload.single('image'),validator(updateProfileSchema),asyncHandler(updateProfileImage))







