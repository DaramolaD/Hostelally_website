import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "../db/connectDB";
import authRoutes from './routes/auth.route'

connectDB()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Testing routing and server----" });
});

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log("Server running at localHost:", PORT);
});
