import { generateToken } from "@/lib/auth";
import  prisma  from "@/lib/client";
import bcrypt from "bcryptjs";

export async function registerFarmer(
  { name, email, phone, location, password}:
  { name: string; email: string; phone: string; location: string; password: string}
) {
  const existFarmer = await prisma.farmer.findFirst({
    where: { OR: [{email}, { phone}]},
  });
  if (existFarmer) {
    throw new Error("Farmer with this email or phone already exists");
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

  const token = generateToken({ farmerId: farmer.id });

   return { 
    id: farmer.id, 
    name: farmer.name, 
    email: farmer.email,
    phone: farmer.phone, 
    location: farmer.location, 
    token 
  };
}
