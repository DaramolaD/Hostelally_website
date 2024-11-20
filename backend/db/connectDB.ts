import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.set('strictQuery', true)
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL as string);
    console.log(`Database connected sucessfully ${connect.connection.host}`);
  } catch (error: any) {
    console.log("Error connecting to MongoDB: ", error.message);
    process.exit(1) // 1 is failure, 0 status code is success
  }
};