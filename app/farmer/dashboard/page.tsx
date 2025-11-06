"use client";

import FarmerSidebar from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import Header from "@/components/ui/header";

export default function FarmerDashboard() {
  return (
    <div className="min-h-screen flex bg-[#F3FAF2] text-gray-800">
      {/* Sidebar */}
      <FarmerSidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header */}
        <Header />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard title="My Products" value="12" />
          <StatCard title="Active Buyers" value="8" />
          <StatCard title="Messages" value="3" />
        </div>

        {/* Product Table */}
        <section>
          <h3 className="text-xl font-bold mb-4">My Product Listings</h3>
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-green-100 text-gray-700">
                <tr>
                  <th className="py-3 px-6">Product</th>
                  <th className="py-3 px-6">Quantity</th>
                  <th className="py-3 px-6">Price</th>
                  <th className="py-3 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <ProductRow img="/tomatoes.jpg" name="Organic Tomatoes" quantity="500 kg" price="$2.50 / kg" />
                <ProductRow img="/carrots.jpg" name="Crisp Carrots" quantity="1200 kg" price="$1.80 / kg" />
                <ProductRow img="/lettuce.jpg" name="Green Lettuce" quantity="300 heads" price="$1.20 / head" />
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

const StatCard = ({ title, value }: { title: string; value: string }) => (
  <Card className="bg-white border-none shadow-sm">
    <CardContent className="p-6">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-3xl font-bold text-green-700">{value}</p>
    </CardContent>
  </Card>
);

const ProductRow = ({ img, name, quantity, price }: { img: string; name: string; quantity: string; price: string }) => (
  <tr className="border-b last:border-none">
    <td className="py-4 px-6 flex items-center gap-3">
      <Image src={img} alt={name} width={40} height={40} className="rounded-md object-cover" />
      <span className="font-medium">{name}</span>
    </td>
    <td className="py-4 px-6">{quantity}</td>
    <td className="py-4 px-6">{price}</td>
    <td className="py-4 px-6 text-right flex items-center justify-end gap-3">
      <Edit className="text-gray-600 hover:text-green-600 cursor-pointer" size={18} />
      <Trash2 className="text-gray-400 hover:text-red-500 cursor-pointer" size={18} />
    </td>
  </tr>
);
