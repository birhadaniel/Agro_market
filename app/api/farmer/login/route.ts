import { loginFarmer } from "@/service/auth/login";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await loginFarmer(body);
    if (!result.success) {
      return new Response(JSON.stringify({ errors: result.errors }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify(result.data), { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to login" }),
      { status: 500 }
    );
  }
}
