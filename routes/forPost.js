import express from "express";
import {auth} from '../middlewares/auth.js'
import {admin} from '../middlewares/admin.js'
import {forPostCart} from '../controllers/forPostCart.js'
import {validator} from "../middlewares/validator.js";

import {forPost} from "../controllers/forPost.js";
import { forPostOrder } from "../controllers/forPostOrder.js";
import multer from "multer";
import {upload} from "../middlewares/multer.js"
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { bookSchema } from "../validators/book.validator.js";
import { cartSchema } from "../validators/cart.validator.js";
import { orderSchema } from "../validators/order.validator.js";

export const router = express.Router();
router.post("/forPost",auth,validator(bookSchema), upload.single("bookImage"),asyncHandler(forPost))
router.post("/forPostCart",auth,validator(cartSchema),asyncHandler(forPostCart))
router.post("/forPostOrder",auth,validator(orderSchema),asyncHandler(forPostOrder))