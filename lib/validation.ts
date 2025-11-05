import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters'),
  
  email: z
    .string()
    .email('Invalid email address'),

  phone: z
    .string()
    .regex(/^[0-9]{10,15}$/, 'Phone number must be between 10 and 15 digits'),

  location: z
    .string()
    .min(2, 'Location must be at least 2 characters long'),

  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),

  agree: z
    .boolean()
    .refine(val => val === true, 'You must agree to the terms and conditions'),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});