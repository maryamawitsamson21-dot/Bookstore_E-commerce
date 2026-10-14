import express from "express";
import {auth} from '../middlewares/auth.js'
import {getSpecificCart} from '../controllers/getSpecificCart.js'
export const router = express.Router();
import {getUserById} from '../controllers/getUserById.js'
import {admin} from '../middlewares/admin.js'
import {getSpecific} from "../controllers/getSpecific.js";
import { getSpecificOrder } from "../controllers/getSpecificOrder.js";
import { getSpecificProfile } from "../controllers/getSpecificProfile.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import {paramsValidator} from "../middlewares/validator.js";
import {mongoIdSchema} from "../validators/mongodbId.js";   
router.get("/getSpecific/:id",paramsValidator(mongoIdSchema),auth,asyncHandler(getSpecific))
router.get("/getSpecific/cart/:id",paramsValidator(mongoIdSchema),auth,asyncHandler(getSpecificCart))
router.get("/getSpecific/order/:id",paramsValidator(mongoIdSchema),auth,asyncHandler(getSpecificOrder))
router.get("/getSpecific/profile/:id",paramsValidator(mongoIdSchema),auth,asyncHandler(getSpecificProfile))
router.get("/getSpecific/getUserById/:id",paramsValidator(mongoIdSchema),auth,admin,asyncHandler(getUserById))