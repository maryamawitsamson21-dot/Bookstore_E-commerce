import cloudinary from "../config/cloudinary.js";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber, address } =
    req.body;
  console.log(req.body);

  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !phoneNumber ||
    !address
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all the fields" });
  }
  const check = await User.findOne({ email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Password must be at least 6 characters",
      });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  if (req.file) {
    // Send the image from Multer to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "bookstore/profiles",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
      );

      stream.end(req.file.buffer);
    });

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: "user",
      profileImage: result.secure_url,
      phoneNumber, // <--- ADD THIS
      address,
    });
    console.log("New user created:", newUser);
    console.log("Generated token:", newUser.isActive);
    const token = jwt.sign(
      {
        id: newUser._id,
        email,
        role: newUser.role,
        isActive: newUser.isActive,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    // Log the new user for debugging

    res
      .status(201)
      .json({
        success: true,
        message: "User registered successfully",
        data: newUser,
        token,
      });
  } else {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: "user",
      profileImage: null,
      phoneNumber,
      address,
    });
    const token = jwt.sign(
      {
        id: newUser._id,
        email,
        role: newUser.role,
        isActive: newUser.isActive,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res
      .status(201)
      .json({
        success: true,
        message: "User registered successfully",
        data: newUser,
        token,
      });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all the fields" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "User does not exist" });
  }
  if (!user.isActive) {
    return res
      .status(403)
      .json({ success: false, message: "Your account is deactivated" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });
  }
  const token = jwt.sign(
    { id: user._id, email, role: user.role, isActive: user.isActive },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  res
    .status(200)
    .json({ success: true, message: "User logged in successfully", token });
};
export const logout = async (req, res) => {
  res.status(200).json({ message: "Signed out successfully" });
};
