import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "../db/connectDB";
import authRoutes from './routes/auth.route'
import cookieParser from "cookie-parser";

connectDB()

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json()); // allow us to parse incoming requests: req.body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()) // allow us to parse incoming cookies: req.cookies

// Enable CORS
app.use(cors());

const PORT = process.env.PORT || 5000

// Test Route
app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Testing routing and server----" });
});

// Authentication Routes
app.use("/api/auth", authRoutes)

// Start the server
app.listen(PORT, () => {
  console.log("Server running at localHost:", PORT);
});
