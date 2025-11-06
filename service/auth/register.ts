
import { registerSchema } from "@/lib/validation";
import  prisma  from "@/lib/client";
import bcrypt from "bcryptjs";

export async function registerFarmer(data: unknown) {
  const parsed = registerSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, phone, location, password} = parsed.data;

  const existingFarmer = await prisma.farmer.findUnique({ where: { email } });
  if (existingFarmer) {
    return {
      success: false,
      errors: { email: ["Email is already registered"] },
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const farmer = await prisma.farmer.create({
    data: {
      name,
      email,
      phone,
      location,
      password: hashedPassword,
    },
  });

  return {
    success: true,
    data: farmer,
  };
}
