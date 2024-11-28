import express from "express";
import {
  checkAuth,
  forgotPassword,
  logIn,
  logOut,
  resetPassword,
  signUp,
  verifyEmail,
} from "../controllers/auth.controller";
import {
  forgotPasswordValidationRules,
  loginValidationRules,
  signUpValidationRules,
  verifyEmailValidationRules,
} from "../validators/auth.validators";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/check-auth", authMiddleware, checkAuth)

router.post("/signup", signUpValidationRules, signUp);
router.post("/login", loginValidationRules, logIn);
router.post("/logout", logOut);

router.post("/verify-email", verifyEmailValidationRules, verifyEmail);

router.post("/forgot-password", forgotPasswordValidationRules, forgotPassword);
router.post("/reset-password/:token", forgotPasswordValidationRules, resetPassword);

export default router;
