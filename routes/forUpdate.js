import express from "express";
import {auth} from '../middlewares/auth.js'
import {admin} from '../middlewares/admin.js'
import {updateCart} from '../controllers/updateCart.js'

import {forUpdate} from "../controllers/forUpdate.js";
import {updateOrderStatus} from "../controllers/updateOrderStatus.js";
export const router = express.Router();
router.patch("/forUpdate/:id",auth,admin,forUpdate)
router.patch("/forUpdateCart/:id",auth,updateCart)
router.patch("/forUpdateOrder/:id",auth,admin,updateOrderStatus)