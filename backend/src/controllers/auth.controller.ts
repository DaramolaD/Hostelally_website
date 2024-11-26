import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/users.model";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie";
import { sendVerificationEmail, sendWelcomeEmail } from "../services/emailService";
import crypto from "crypto";
import mongoose from "mongoose";

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

    // ---------- For verification Link ----------

    //  // Generate a secure random verification token
    //  const cryptoToken = crypto.randomBytes(16).toString('hex');

    //  // Hash the token before storing it in the database
    //  const verificationToken = await bcrypt.hash(cryptoToken, 10);

    // ---------- For verification Link ----------

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

    // generate token and setCookie
    // generateTokenAndSetCookie(res, newUser._id);

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
  res.status(200).json({ message: "Log In Route is working" });
};
export const logOut = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Log Out Route is working" });
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
      message: "Email successfully verified.",
    });
  } catch (error) {
    console.error("Error during email verification:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
};
