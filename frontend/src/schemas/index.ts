import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long." })
  .refine((val) => /[A-Za-z]/.test(val), {
    message: "Password must contain at least one letter.",
  })
  .refine((val) => /[0-9]/.test(val), {
    message: "Password must contain at least one number.",
  })
  .refine((val) => /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/.test(val), {
    message: "Password must contain at least one special character.",
  });

export const signupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." }),
  email: z.email({ message: "Invalid email address." }),
  password: passwordSchema,
});

export const loginSchema = z.object({
  email: z.email({ message: "Invalid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});
