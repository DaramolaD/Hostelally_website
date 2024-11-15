import { z } from "zod";

export const formSchema = z.object({
  username: z
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
  birthDate: z.date().refine((date) => date <= new Date(), {
    message: "Birth date cannot be in the future",
  }),
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
  hostelLocation: z.string(),
  dob: z.date().nullable(),
  adults: z.number().nonnegative(),
  child: z.number().nonnegative(),
  rooms: z.number().nonnegative(),
});

export interface HostelFilterProps {
  filters: Filters;
  onApplyFilters: (filters: Filters) => void;
}