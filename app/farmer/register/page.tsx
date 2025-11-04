"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    size: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // You can integrate API logic here later
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4f9f3]">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Register as a Farmer</h1>
          <p className="text-gray-600 mt-1">
            Create your account to connect with the market.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className="bg-green-50 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              className="bg-green-50 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              className="bg-green-50 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="location">Farm Location</Label>
            <Input
              id="location"
              name="location"
              placeholder="e.g., City, State/Province"
              value={form.location}
              onChange={handleChange}
              className="bg-green-50 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="size">Farm Size (in hectares)</Label>
            <Input
              id="size"
              name="size"
              type="number"
              placeholder="e.g., 50"
              value={form.size}
              onChange={handleChange}
              className="bg-green-50 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={handleChange}
              className="bg-green-50 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="bg-green-50 focus:ring-green-500"
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="agree"
              name="agree"
              checked={form.agree}
              onCheckedChange={(checked) =>
                setForm((prev) => ({ ...prev, agree: !!checked }))
              }
            />
            <Label htmlFor="agree" className="text-sm text-gray-600">
              I agree to the{" "}
              <Link href="#" className="text-green-600 font-medium">
                Terms and Conditions
              </Link>
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            Register
          </Button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link href="/farmer/login" className="text-green-600 font-semibold">
            Login Now
          </Link>
        </p>
      </div>
    </main>
  );
}
