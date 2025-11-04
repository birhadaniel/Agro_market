"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { MdAccessTime } from "react-icons/md";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f9f4] bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22><rect width=%2220%22 height=%2220%22 fill=%22none%22/><path d=%22M10 0v20M0 10h20%22 stroke=%22%23e3f2e1%22 stroke-width=%221%22/></svg>')]">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
        {/* Icon */}
        <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
          <MdAccessTime size={28} color="#4CAF50"/>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
          Forgot Your Password?
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Enter your email send you a link to reset your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </Label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 bg-green-600! text-white font-semibold rounded-lg hover:bg-green-700! transition"
          >
            Send Reset Link
          </Button>
        </form>

        {/* Back to Login */}
        <div className="mt-4">
          <Link
            href="/farmer/login"
            className="text-green-600 hover:underline text-sm font-medium"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
