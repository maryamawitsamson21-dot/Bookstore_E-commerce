import express from "express";
import multer from "multer";
import {upload} from "./middlewares/multer.js";
import {PORT} from "./.env";   
import cors from "cors";
import dns from "dns/promises";
dns.setServers(['8.8.8.8']);
import {router as registration} from "./routes/registration.js";
import {router as getAll} from "./routes/getAll.js";
import {router as getSpecific} from "./routes/getSpecific.js";
import {router as forUpdate} from "./routes/forUpdate.js";
import {router as forDelete} from "./routes/forDelete.js";
import {router as forPost} from "./routes/forPost.js";
import {connection} from "./database/mongoose.js";
import {auth} from './middlewares/auth.js'
import { updateProfileImage } from "./controllers/profile.js";



const app = express();
app.use(express.json());

app.use(cors());
app.use("/api",getAll)
app.use("/api",forPost)
app.use("/api",getSpecific)
app.use("/api",forUpdate)
app.use("/api",forDelete)
app.use("/api/auth",registration)
app.post("/api/upload",auth,upload.single("image"),updateProfileImage)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connection()
})