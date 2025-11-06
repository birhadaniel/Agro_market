"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginFarmer } from "@/lib/api";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
   const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await loginFarmer(form);
      localStorage.setItem("token", res.token); 
      router.push("/farmer/dashboard"); 
    } catch (err) {
      console.error(err);
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-[#F9FCF8] flex flex-col items-center justify-center p-4">
      {/* Login Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Login to Your Account</h2>
        <p className="text-gray-600 text-sm mb-6">
          Welcome back! Please enter your details.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="bg-green-50 focus:bg-white border-green-100 focus:border-green-500"
              required
            />
          </div>
        
          <div className="mb-2">
            <Label className="mb-2 space-y-1">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="bg-green-50 focus:bg-white border-green-100 focus:border-green-500 pr-10"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="text-right mb-6">
            <Link href="/forgot-password" className="text-green-600 text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>
          <Button 
            type="submit"
            disabled={loading}
            className="w-full bg-green-600! hover:bg-green-700! text-white py-2 rounded-lg font-semibold transition"
            >
               {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
        <p className="text-center text-sm text-gray-700 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/farmer/register" className="text-green-600 font-medium hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
