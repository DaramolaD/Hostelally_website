import express from "express";
import {
  logIn,
  logOut,
  signUp,
  verifyEmail,
} from "../controllers/auth.controller";
import {
  signUpValidationRules,
  verifyEmailValidationRules,
} from "../validators/auth.validators";

const router = express.Router();

router.post("/signup", signUpValidationRules, signUp);
router.post("/login", logIn);
router.post("/logout", logOut);
router.post("/verify-email", verifyEmailValidationRules, verifyEmail);

export default router;
