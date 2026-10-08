import cloudinary from "../config/cloudinary.js";
import { User } from "../models/user.js";



export const updateProfileImage = async (req, res) => {
  try {
    const {firstName,lastName,phoneNumber,address}=req.body
    
 
    if (req.file) {
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
    const search=await User.findById({_id:req.params.id})
const user = await User.findByIdAndUpdate({ _id: req.params.id }, {firstName: req.body.firstName||search.firstName, lastName: req.body.lastName||search.lastName, phoneNumber: req.body.phoneNumber||search.phoneNumber, address: req.body.address||search.address, profileImage: result.secure_url, updatedBy: req.user.id },  {returnDocument: 'after'});
   
   
    return res.status(200).json({
      success: true,
      message: "Profile image updated successfully",
      user: req.user
    });


  
    }else{
        const search=await User.findById({_id:req.params.id})
const user = await User.findByIdAndUpdate({ _id: req.params.id }, {firstName: req.body.firstName||search.firstName, lastName: req.body.lastName||search.lastName, phoneNumber: req.body.phoneNumber||search.phoneNumber, address: req.body.address||search.address, profileImage:search.profileImage, updatedBy: req.user.id },  {returnDocument: 'after'});
     return res.status(200).json({
      success: true,
      message: "Profile image updated successfully",
      user: req.user
    }); }

   

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};