import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  mobile: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Please enter a valid phone number",
    })
    .optional(), // Optional if not required
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long" })
    .max(500, { message: "Message cannot exceed 500 characters" })
    .optional(), // Optional if not required
});
export const FormSchema23 = z.object({
  hostelLocation: z.string({
    required_error: "Please select a Hostel Location.",
  }),
});

export interface Filters {
  location: string;
  // dob: Date | null;
  checkIn: Date | null;
  checkOut: Date | null;
  adults: number;
  child: number;
  rooms: number;
}

export const FiltersSchema = z.object({
  location: z.string().nonempty("Location is required"),
  checkIn: z.date().nullable().refine((date) => date !== null, {
    message: "Check-In date is required",
  }),
  checkOut: z.date().nullable().refine((date) => date !== null, {
    message: "Check-Out date is required",
  }),
  adults: z.number().min(1, "At least one adult is required"),
  child: z.number().min(0, "Children cannot be negative"),
  rooms: z.number().min(1, "At least one room is required"),
});


export interface HostelFilterProps {
  filters: Filters;
  onApplyFilters: (filters: Filters) => void;
}