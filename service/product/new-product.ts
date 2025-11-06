import { prisma } from "@/lib/client";

export const productService = {
  async createProduct(data: {
    name: string;
    description?: string;
    category: string;
    price: number;
    quantity: number;
    unit: string;
    imageUrl?: string;
    harvestDate?: string;
    farmerId: number;
  }) {
    return await prisma.product.create({
      data: {
        name: data.name,
        description: data.description,
        category: data.category,
        price: data.price,
        quantity: data.quantity,
        unit: data.unit,
        imageUrl: data.imageUrl,
        farmerId: data.farmerId,
        createdAt: data.harvestDate
          ? new Date(data.harvestDate)
          : new Date(),
      },
    });
  },

  async getAllProducts() {
    return await prisma.product.findMany({
      include: { farmer: true },
      orderBy: { createdAt: "desc" },
    });
  },
};
