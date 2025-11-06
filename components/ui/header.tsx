"use client";
import { Bell,User } from "lucide-react";


export default function Header() {

  return (
    <header className="flex items-center justify-end bg-[#F3FAEF] px-6 py-4 border-b border-gray-200">
      {/* Right side — actions */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-green-100 transition">
          <Bell size={20} className="text-gray-700" />
          <span className="absolute top-1 right-1 inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
          <User size={20} className="text-green-600" />
        </div>
      </div>
    </header>
  );
}
