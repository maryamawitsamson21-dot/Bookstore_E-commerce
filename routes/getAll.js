import express from "express";
import {auth} from '../middlewares/auth.js'
import {admin} from '../middlewares/admin.js'
import {getAllCart} from '../controllers/getAllCart.js'

import {getAll} from "../controllers/getAll.js";
import { getAllOrders } from "../controllers/getAllOrders.js";
import { getMyOrders } from "../controllers/getMyOrders.js";
import { getAllProfile } from "../controllers/getAllProfile.js";
import { getAllUser } from "../controllers/getAllUser.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
export const router = express.Router();
router.get("/getAll",auth,asyncHandler(getAll))
router.get("/cart",auth,asyncHandler(getAllCart))
router.get("/myorder",auth,asyncHandler(getMyOrders))
router.get("/allorder",auth,admin,asyncHandler(getAllOrders))
router.get("/allprofile",auth,asyncHandler(getAllProfile))
router.get("/getAllUser",auth,asyncHandler(getAllUser))
