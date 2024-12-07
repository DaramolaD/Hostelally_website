import { Document } from "mongoose";

export interface UserDocument {
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
  comparePassword(enteredPassword: string): Promise<boolean>;
}

export interface HostelDocument {
  _id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  starRating: number;
  imageUrls: string[];
  lastUpdated: Date;
  bookings: BookingType[];
}

export type BookingType = {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  adultCount: number;
  childCount: number;
  checkIn: Date;
  checkOut: Date;
  totalCost: number;
};