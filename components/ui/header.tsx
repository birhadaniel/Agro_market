"use client";

import Image from "next/image";
import { Bell, Plus, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-[#F3FAEF] px-6 py-4 border-b border-gray-200">
      {/* Left side — welcome text */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome, John!</h1>
        <p className="text-sm text-gray-600">
          Here&apos;s what&apos;s happening on your farm today.
        </p>
      </div>

      {/* Right side — actions */}
      <div className="flex items-center gap-4">
        {/* Add Product Button */}
        <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 rounded-lg px-4">
          <Plus size={16} />
          Add Product
        </Button>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-green-100 transition">
          <Bell size={20} className="text-gray-700" />
          <span className="absolute top-1 right-1 inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/images/user-avatar.jpg" // Replace with your own path
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full border border-gray-300"
          />
          <User className="text-gray-700 hidden sm:block" size={18} />
        </div>
      </div>
    </header>
  );
}
