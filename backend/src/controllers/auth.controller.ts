import { Request, Response } from "express";
import { validationResult } from "express-validator";
import mongoose from "mongoose";
import crypto from "crypto";

import User from "../models/users.model";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie";
import {
  sendPasswordResetEmail,
  sendResetSuccessEmail,
  sendVerificationEmail,
  sendWelcomeEmail,
} from "../services/emailService";

import { UserDocument } from "../types";

export const signUp = async (req: Request, res: Response) => {
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  try {
    const { email, firstName, lastName, password } = req.body;

    // Check if user already exists
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      res.status(400).json({ message: "User Credential already exit" });
      return;
    }

    // Generate verification token
    const verificationToken = (
      (parseInt(crypto.randomBytes(3).toString("hex"), 16) % 900000) +
      100000
    ).toString();

    const verificationTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    // Create and save new user
    const newUser = new User({
      email,
      firstName,
      lastName,
      password,
      verificationToken,
      verificationTokenExpiresAt,
    });
    await newUser.save();

    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User registered successfully, check email for verification",
      user: {
        userId: newUser._id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        isVerified: newUser.isVerified,
      },
    });
    return;
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Something went wrong." });
    return;
  }
};

export const logIn = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // generate token and setCookie
    generateTokenAndSetCookie(res, user._id);

    //update loginDate
    user.lastLoginDate = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Login Successfully",
    });
    return;
  } catch (error) {
    console.log("Error during Login", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
    return;
  }
};

export const logOut = async (req: Request, res: Response) => {
  try {
    res.clearCookie("auth_token");

    // Send a success response
    res.status(200).json({ success: true, message: "Logged out successfully" });
    return;
  } catch (error) {
    console.error("Error during Logout:", error);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong during logout." });
    return;
  }
};

export const verifyEmail = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  try {
    const { userId, verificationToken } = req.body;

    if (!userId || !verificationToken) {
      res.status(400).json({
        message: "Please provide the required credentials for verification.",
      });
      return;
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      res.status(400).json({ message: "Invalid user ID format." });
      return;
    }

    // Find user by email
    const user = await User.findOne({
      _id: userId,
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Verify the token
    if (
      user.verificationToken !== verificationToken ||
      (user.verificationTokenExpiresAt &&
        new Date(user.verificationTokenExpiresAt) < new Date())
    ) {
      res
        .status(400)
        .json({ message: "Invalid or expired verification token." });
      return;
    }

    // Update the user to mark as verified
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    await user.save();

    await sendWelcomeEmail(user.email, user.firstName, user.lastName);

    res.status(200).json({
      success: true,
      message: "Email successfully verified.",
    });
    return;
  } catch (error) {
    console.error("Error during email verification:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
    return;
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ success: false, message: "Invalid credentials" });
      return;
    }
    // Generate a secure random reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = new Date(Date.now() + 1 * 60 * 60 * 1000); // 1 hour

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpireAt = resetTokenExpiresAt;

    // verificationLink
    const verificationLink = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

    await user.save();

    await sendPasswordResetEmail(user.email, verificationLink);
    res.status(200).json({
      success: true,
      message: "Password reset link sent to your email",
    });
    return;
  } catch (error) {
    console.error("Error during forgotPassword:", error);
    res.status(400).json({
      success: false,
      message: "Something went wrong.",
    });
    return;
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  const { token } = req.params;
  const { password } = req.body;
  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      res
        .status(400)
        .json({ success: false, message: "Invalid or expired reset token" });
      return;
    }

    // Update the user's password
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpireAt = undefined;
    await user.save();

    await sendResetSuccessEmail(user.email);

    res
      .status(200)
      .json({ success: true, message: "Password reset successful" });
    return;
  } catch (error) {
    console.error("Error during resetPassword:", error);
    res.status(400).json({
      success: false,
      message: "Something went wrong.",
    });
    return;
  }
};

export const checkAuth = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
      return;
    }
    res.status(200).json({
      success: true,
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isAdmin: user.isAdmin,
      },
    });
    return;
  } catch (error) {
    console.log("Error in checkAuth ", error);
    res.status(400).json({ success: false, message: "Something went wrong" });
    return;
  }
};
