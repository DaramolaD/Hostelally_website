import { Document } from "mongoose";

export interface UserDocument extends Document {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  lastLoginDate: Date;
  isVerified: boolean;
  isAdmin: boolean;
  resetPasswordToken?: string;
  resetPasswordExpireAt?: Date;
  verificationToken?: string;
  verificationTokenExpiresAt?: Date;
}
