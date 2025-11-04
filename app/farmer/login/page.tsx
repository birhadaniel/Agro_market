"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FCF8] flex flex-col items-center justify-center p-4">
      {/* Login Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Login to Your Account</h2>
        <p className="text-gray-600 text-sm mb-6">
          Welcome back! Please enter your details.
        </p>

        {/* Email Field */}
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="bg-green-50 focus:bg-white border-green-100 focus:border-green-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <Label className="mb-2 space-y-1">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-green-50 focus:bg-white border-green-100 focus:border-green-500 pr-10"
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

        {/* Forgot Password */}
        <div className="text-right mb-6">
          <Link href="/forgot-password" className="text-green-600 text-sm hover:underline">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <Button className="w-full bg-green-600! hover:bg-green-700! text-white py-2 rounded-lg font-semibold transition">
          Login
        </Button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{" "}
          <Link href="/farmer/register" className="text-green-600 font-medium hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
