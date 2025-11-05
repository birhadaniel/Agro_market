import { registerFarmer } from "@/service/auth/register";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await registerFarmer(body);
    if (!result.success) {
      return new Response(JSON.stringify({ errors: result.errors }), {
        status: 400,
      });
    }

    return new Response(JSON.stringify(result.data), { status: 201 });
  } catch (error) {
    console.error("Register error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to register farmer" }),
      { status: 500 }
    );
  }
}
