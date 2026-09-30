import express from "express";
import {auth} from '../middlewares/auth.js'
import {getSpecificCart} from '../controllers/getSpecificCart.js'
export const router = express.Router();
import {getSpecific} from "../controllers/getSpecific.js";
import { getSpecificOrder } from "../controllers/getSpecificOrder.js";
router.get("/getSpecific/:id",auth,getSpecific)
router.get("/getSpecific/cart/:id",auth,getSpecificCart)
router.get("/getSpecific/order/:id",auth,getSpecificOrder)