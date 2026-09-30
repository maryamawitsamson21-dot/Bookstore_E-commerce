import express from "express";
import {auth} from '../middlewares/auth.js'
import {admin} from '../middlewares/admin.js'
import {getAllCart} from '../controllers/getAllCart.js'

import {getAll} from "../controllers/getAll.js";
import { getAllOrders } from "../controllers/getAllOrders.js";
import { getMyOrders } from "../controllers/getMyOrders.js";
export const router = express.Router();
router.get("/getAll",auth,getAll)
router.get("/cart",auth,getAllCart)
router.get("/myorder",auth,getMyOrders)
router.get("/allorder",auth,admin,getAllOrders)