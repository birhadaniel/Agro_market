import { loginFarmer } from "@/service/auth/login";
import { NextResponse } from 'next/server';
import { loginSchema } from '@/lib/validation';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = loginSchema.parse(body);
    const result = await loginFarmer({ email, password });

    return NextResponse.json({
      message: 'Login successful',
      token: result.token,
      farmer: {
        id: result.id,
        name: result.name,
        email: result.email,
        phone: result.phone,
        location: result.location
      },
    },{ status: 200});
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: 'Login failed', error: String(error) },
      { status: 400 });
  }
}
