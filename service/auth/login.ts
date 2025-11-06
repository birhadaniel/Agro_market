import bcrypt from "bcryptjs";
import prisma  from "@/lib/client";
import { generateToken } from "@/lib/auth";

export async function loginFarmer(
   { email, password }: 
  { email: string; password: string }
) {

  const farmer = await prisma.farmer.findUnique({ where: { email } });
  if (!farmer) {
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, farmer.password);
  if (!isPasswordValid) {
     throw new Error('Invalid credentials');
  }

  const token = generateToken({farmerId: farmer.id});

  return {
    id: farmer.id, 
    name: farmer.name, 
    email: farmer.email, 
    phone: farmer.phone, 
    location: farmer.location, 
    token
    
  };
}
