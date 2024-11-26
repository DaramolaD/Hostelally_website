import express from "express";
import {
  logIn,
  logOut,
  signUp,
  verifyEmail,
} from "../controllers/auth.controller";
import {
  loginValidationRules,
  signUpValidationRules,
  verifyEmailValidationRules,
} from "../validators/auth.validators";

const router = express.Router();

router.post("/signup", signUpValidationRules, signUp);
router.post("/login", loginValidationRules, logIn);
router.post("/logout", logOut);
router.post("/verify-email", verifyEmailValidationRules, verifyEmail);

export default router;
