import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/users.model";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie";
import { sendVerificationEmail } from "../services/emailService";

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
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
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
    generateTokenAndSetCookie(res, newUser._id);

    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user: {
        ...newUser.toObject(),
        password: undefined,
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
