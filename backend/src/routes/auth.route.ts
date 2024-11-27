import express from "express";
import {
  forgotPassword,
  logIn,
  logOut,
  signUp,
  verifyEmail,
} from "../controllers/auth.controller";
import {
  forgotPasswordValidationRules,
  loginValidationRules,
  signUpValidationRules,
  verifyEmailValidationRules,
} from "../validators/auth.validators";

const router = express.Router();

router.post("/signup", signUpValidationRules, signUp);
router.post("/login", loginValidationRules, logIn);
router.post("/logout", logOut);

router.post("/verify-email", verifyEmailValidationRules, verifyEmail);
router.post("/forgot-password", forgotPasswordValidationRules, forgotPassword);

export default router;
