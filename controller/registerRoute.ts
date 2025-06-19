import { Request, Response } from "express";
import { z } from "zod";
import { signupSchema } from "../schemas/userSchemas";
import { User } from "../models/User.model";
import bcrypt from "bcrypt";

type BodyParams = z.infer<typeof signupSchema>;

export const handleRegister = async (
  req: Request<{}, {}, BodyParams>,
  res: Response
) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email }).lean();
    if (existingUser) {
       res.status(409).json({
        success: false,
        message: "User already exists with this email.",
      });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  Create and save the user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    //  Send response
     res.status(201).json({
      success: true,
      message: "User registered successfully.",
      data: {
        name: newUser.fullName,
        email: newUser.email,
        id: newUser._id,
      },
    });
    return;
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
      return;
  }
};      

