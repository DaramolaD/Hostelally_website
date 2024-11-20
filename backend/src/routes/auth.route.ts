import express from "express";
import { check } from "express-validator";
import { logIn, logOut, signUp } from "../controllers/auth.controller";
import { signUpValidationRules } from "../validators/auth.validators";

const router = express.Router();

router.post("/signup", signUpValidationRules, signUp);
router.post("/login", logIn);
router.post("/logout", logOut);

export default router;
