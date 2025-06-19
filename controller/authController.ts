import { Request, Response } from "express";
import { z } from "zod";
import { loginSchema } from "../schemas/userSchemas";
import { User } from "../models/User.model";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";

type LoginRequestBody = z.infer<typeof loginSchema>;

export const handleLogin = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response
) => {
  const { email, password } = req.body;
  const cookies = req.cookies;

  // 1. Find user by email
  const existingUser = await User.findOne({ email }).exec();

  if (!existingUser) {
     res.status(401).json({
      success: false,
      message: "Email address not found.",
    });
    return;
  }

  // 2. Verify password
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid) {
     res.status(401).json({
      success: false,
      message: "Email or password is incorrect.",
    });
    return;
  }

  // 3. Generate tokens
  const accessToken = jwt.sign(
    {
      user: {
        id: existingUser._id,
        name: existingUser.fullName,
      },
    },
    process.env.JWT_ACCESS_SECRET!,
    {
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
    } as SignOptions
  );

  const refreshToken = jwt.sign(
    {
      userId: existingUser._id,
    },
    process.env.JWT_REFRESH_SECRET!,
    {
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
    } as SignOptions
  );

  // 4. Handle refresh token reuse detection
  let validRefreshTokens = Array.isArray(existingUser.refreshToken)
    ? existingUser.refreshToken
    : [];

    console.log(cookies?.jwt);
  if (cookies?.jwt) {
    const previousToken = cookies.jwt;
    console.log(previousToken);

    const tokenOwner = await User.findOne({ refreshToken: previousToken }).exec();

    if (!tokenOwner) {
      console.warn("⚠️  Possible refresh token reuse detected!");
      validRefreshTokens = []; // Clear all tokens (compromised session)
    } else {
      validRefreshTokens = validRefreshTokens.filter(
        (token) => token !== previousToken
      );
    }

    // Clear old cookie
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
  }

  // 5. Save new refresh token
  existingUser.refreshToken = [...validRefreshTokens, refreshToken];
  await existingUser.save();

  // 6. Set new cookies
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  // 7. Respond to client
   res.status(200).json({
    success: true,
    message: "Login successful",
    data: {
      name: existingUser.fullName,
      userId: existingUser._id,
    },
  });
  return;
};
