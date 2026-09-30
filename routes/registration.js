import express from "express";
export const router = express.Router();//not immediately invoked whole backend instead the specific router only
import {register,login,logout} from "../controllers/registration.js";
router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)