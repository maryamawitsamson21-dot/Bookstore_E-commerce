import cloudinary from "../config/cloudinary.js";
import { User } from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();


export const updateProfileImage = async (req, res) => {
  try {
    const user=await User.findById(req.user.id);
    if(!user){
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }
    // Make sure an image was uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a profile image"
      });
    }

    // Send the image from Multer to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "bookstore/profiles"
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      stream.end(req.file.buffer);
    });

    // Save Cloudinary URL in MongoDB
    req.user.profileImage = result.secure_url;

    await user.save();
    

    return res.status(200).json({
      success: true,
      message: "Profile image updated successfully",
      user: req.user
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};