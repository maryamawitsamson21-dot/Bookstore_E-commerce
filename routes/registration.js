import express from "express";
export const router = express.Router();//not immediately invoked whole backend instead the specific router only
import {register,login,logout} from "../controllers/registration.js";
import {asyncHandler} from "../middlewares/asyncHandler.js"
import {validator} from "../middlewares/validator.js"
import {registerSchema,loginSchema} from "../validators/user.validator.js"
router.post("/register",validator(registerSchema ),asyncHandler(register))
router.post("/login",validator(loginSchema),asyncHandler(login))
router.post("/logout",asyncHandler(logout))