"use client";

import { useState } from "react";
import { Upload, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function AddProductForm() {
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-[#F6FAF2] flex justify-center py-10 px-4">
      <Card className="w-full max-w-3xl border-none shadow-sm">
        <CardContent className="p-8 space-y-8">
          <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Basic Information */}
            <section className="space-y-4">
              <div className="space-y-3">
                <Label>Product Name</Label>
                <Input placeholder="e.g., Organic Red Apples" className="bg-green-50 border-none" />
              </div>

              <div className="space-y-3">
                <Label>Product Description</Label>
                <Textarea
                  placeholder="Describe your product, its quality, and any special features."
                  className="bg-green-50 border-none min-h-[100px]"
                />
              </div>

              <div className="space-y-3">
                <Label>Crop Type</Label>
                <Select>
                  <SelectTrigger className="bg-green-50 border-none">
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="grains">Grains</SelectItem>
                    <SelectItem value="herbs">Herbs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section>

            {/* Stock & Pricing */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Stock & Pricing</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-3">
                  <Label>Quantity Available</Label>
                  <Input placeholder="e.g., 500" className="bg-green-50 border-none" />
                </div>

                <div className="space-y-3">
                  <Label>Unit of Measurement</Label>
                  <Select>
                    <SelectTrigger className="bg-green-50 border-none">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Kilograms (kg)</SelectItem>
                      <SelectItem value="ton">Tons</SelectItem>
                      <SelectItem value="unit">Units</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Price per Unit</Label>
                  <Input placeholder="$ e.g., 2.50" className="bg-green-50 border-none" />
                </div>
              </div>
            </section>

            {/* Visuals & Verification */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Visuals & Verification</h2>
              <div className="space-y-3">
                <Label>Product Images</Label>
                <div className="border-2 border-dashed border-green-200 bg-green-50 rounded-lg flex flex-col items-center justify-center h-40 cursor-pointer hover:bg-green-100 transition">
                  <Upload className="text-green-600 mb-2" />
                  <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (MAX. 800×400px)</p>
                  <input type="file" className="hidden" onChange={handleImageUpload} />
                </div>
                {image && <p className="text-sm text-green-700 mt-2">{image.name}</p>}
              </div>
            </section>

            {/* Logistics */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Logistics</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label>Harvest Date</Label>
                  <div className="flex items-center border border-green-200 bg-green-50 rounded-md px-3">
                    <Calendar className="text-gray-500 w-4 h-4 mr-2" />
                    <Input type="date" className="border-none bg-transparent focus-visible:ring-0 flex-1" />
                  </div>
                </div>
              </div>
            </section>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Save Product
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
