import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.util";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies["auth_token"];

  try {
    if (!token) {
      res
        .status(400)
        .json({ success: false, message: "Unauthorized - no token provided" });
      return;
    }

    const decoded = verifyToken(token, process.env.JWT_SECRET_KEY as string);

    if (!decoded) {
      res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" });
      return;
    }

    req.userId = (decoded as JwtPayload).userId;
    next(); // Proceed to the next middleware
  } catch (error) {
    console.error("Error in verifyToken:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
