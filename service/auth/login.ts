import bcrypt from "bcryptjs";
import { prisma } from "@/lib/client";
import { loginSchema } from "@/lib/validation";
import jwt from "jsonwebtoken";

export async function loginFarmer(data: unknown) {
  const parsed = loginSchema.safeParse(data);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { email, password } = parsed.data;

  const farmer = await prisma.farmer.findUnique({ where: { email } });
  if (!farmer) {
    return {
      success: false,
      errors: { email: ["No account found with this email"] },
    };
  }

  const isPasswordValid = await bcrypt.compare(password, farmer.password);
  if (!isPasswordValid) {
    return {
      success: false,
      errors: { password: ["Incorrect password"] },
    };
  }

  const token = jwt.sign(
    {
      id: farmer.id,
      email: farmer.email,
      name: farmer.name,
    },
    process.env.JWT_SECRET as string, 
    { expiresIn: "7d" } 
  );

  const { password: _, ...farmerData } = farmer;

  return {
    success: true,
     data: {
      ...farmerData,
      token, 
    },
  };
}
