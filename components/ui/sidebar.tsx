"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

const links: SidebarLinkProps[] = [
  { label: "Dashboard" },
  { label: "My Products" },
  { label: "Messages" },
  { label: "Market Info" },
];

export default function FarmerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between min-h-screen">
      {/* Logo + Nav */}
      <div>
        <h1 className="text-2xl font-bold text-green-700 mb-10">AgriConnect</h1>
        <nav className="space-y-4">
          {links.map((link) => (
            <SidebarLink
              key={link.label}
              label={link.label}
              active={pathname?.includes(link.href || link.label.toLowerCase())}
            />
          ))}
        </nav>
      </div>

      {/* Farmer Info */}
      <div className="flex items-center gap-3 mt-8">
        <Image
          src="/farmer-avatar.jpg"
          alt="Farmer Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-medium">John Farmer</p>
          <p className="text-sm text-gray-500">Green Acres Farm</p>
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-sm font-medium px-3 py-2 rounded-lg cursor-pointer transition",
        active
          ? "bg-green-100 text-green-700"
          : "text-gray-600 hover:bg-green-50 hover:text-green-700"
      )}
    >
      <span>{label}</span>
    </div>
  );
}
