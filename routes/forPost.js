import express from "express";
import {auth} from '../middlewares/auth.js'
import {admin} from '../middlewares/admin.js'
import {forPostCart} from '../controllers/forPostCart.js'

import {forPost} from "../controllers/forPost.js";
import { forPostOrder } from "../controllers/forPostOrder.js";
export const router = express.Router();
router.post("/forPost",auth,admin,forPost)
router.post("/forPostCart",auth,forPostCart)
router.post("/forPostOrder",auth,forPostOrder)