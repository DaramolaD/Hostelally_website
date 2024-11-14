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
