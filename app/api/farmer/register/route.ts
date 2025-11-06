import { registerFarmer } from "@/service/auth/register";
import { registerSchema } from "@/lib/validation";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, location, password } = registerSchema.parse(body);
    const result = await registerFarmer({ name, email, phone, location, password });

    return NextResponse.json(
    {
      massage: 'Farmer registered successfully',
      token: result.token,
      farmer:{
        id: result.id,
        name: result.name,
        email: result.email,
        phone: result.phone,
        location: result.location
      }
    }, { status: 201});
  } catch (error) {
   if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Validation failed", errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Failed to register farmer", error: String(error) },
      { status: 500 }
    );
  }
}
