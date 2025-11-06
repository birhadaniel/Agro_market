"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Package, MessageSquare, Store, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Farmer {
  name: string;
  email: string;
}

export function Sidebar() {
  const [farmer] = useState<Farmer | null>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("farmer");
      return stored ? JSON.parse(stored) : null;
    }
    return null;
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("farmer");
    window.location.href = "/farmer/login";
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between min-h-screen p-6">
      {/* Logo */}
      <div>
        <div className="flex items-center space-x-2 mb-10">
          <span className="text-lg font-semibold text-green-700">AgriMarket</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          <Link
            href="/farmer/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50 text-gray-700 font-medium"
          >
            <Home size={18} /> Dashboard
          </Link>

          <Link
            href="/farmer/products"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50 text-gray-700 font-medium"
          >
            <Package size={18} /> My Products
          </Link>

          <Link
            href="/farmer/messages"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50 text-gray-700 font-medium"
          >
            <MessageSquare size={18} /> Messages
          </Link>

          <Link
            href="/farmer/market"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50 text-gray-700 font-medium"
          >
            <Store size={18} /> Market Info
          </Link>
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-4">
        {farmer && (
          <>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <User size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{farmer.name}</p>
                <p className="text-sm text-gray-500">{farmer.email}</p>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 text-red-600 border-red-200 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut size={18} /> Logout
            </Button>
          </>
        )}
      </div>
    </aside>
  );
}
