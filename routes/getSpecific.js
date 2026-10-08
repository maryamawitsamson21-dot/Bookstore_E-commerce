import express from "express";
import {auth} from '../middlewares/auth.js'
import {getSpecificCart} from '../controllers/getSpecificCart.js'
export const router = express.Router();
import {getUserById} from '../controllers/getUserById.js'
import {admin} from '../middlewares/admin.js'
import {getSpecific} from "../controllers/getSpecific.js";
import { getSpecificOrder } from "../controllers/getSpecificOrder.js";
import { getSpecificProfile } from "../controllers/getSpecificProfile.js";
router.get("/getSpecific/:id",auth,getSpecific)
router.get("/getSpecific/cart/:id",auth,getSpecificCart)
router.get("/getSpecific/order/:id",auth,getSpecificOrder)
router.get("/getSpecific/profile/:id",auth,getSpecificProfile)
router.get("/getSpecific/getUserById/:id",auth,admin,getUserById)