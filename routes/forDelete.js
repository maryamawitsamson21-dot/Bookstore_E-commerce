import express from "express";
import {auth} from '../middlewares/auth.js'
import {admin} from '../middlewares/admin.js'

import {forDelete} from "../controllers/forDelete.js";
import {forDeleteCart} from '../controllers/forDeleteCart.js'
import {forDeleteAllCart} from '../controllers/forDeleteAllCart.js'
import { forDeleteOrder } from "../controllers/forDeleteOrder.js";
export const router = express.Router();
router.delete("/forDelete/:id",auth,admin,forDelete)   
router.delete("/forDeleteCart/:id",auth,forDeleteCart)
router.delete("/forDeleteAllCart/",auth,forDeleteAllCart)
router.delete("/forDeleteOrder/:id",auth,forDeleteOrder)
