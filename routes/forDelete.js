import express from "express";
import {auth} from '../middlewares/auth.js'
import {admin} from '../middlewares/admin.js'

import {forDelete} from "../controllers/forDelete.js";
import {forDeleteCart} from '../controllers/forDeleteCart.js'
import {forDeleteAllCart} from '../controllers/forDeleteAllCart.js'
import { forDeleteOrder } from "../controllers/forDeleteOrder.js";
import { forDeleteUser } from "../controllers/forDeleteUser.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import {paramsValidator} from "../middlewares/validator.js";
import {mongoIdSchema} from "../validators/mongodbId.js";

export const router = express.Router();
router.delete("/forDelete/:id",paramsValidator(mongoIdSchema),auth,admin,asyncHandler(forDelete))   
router.delete("/forDeleteCart/:id",paramsValidator(mongoIdSchema),auth,asyncHandler(forDeleteCart))
router.delete("/forDeleteAllCart/",paramsValidator(mongoIdSchema),auth,asyncHandler(forDeleteAllCart))
router.delete("/forDeleteOrder/:id",paramsValidator(mongoIdSchema),auth,asyncHandler(forDeleteOrder))
router.delete("/forDeleteUser/:id",paramsValidator(mongoIdSchema),auth,admin,asyncHandler(forDeleteUser))   

