
import cloudinary from "cloudinary";
import prisma from "@/lib/client";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const productService = {
  async uploadImage(file: File) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise<{ url: string; public_id: string }>((resolve, reject) => {
      cloudinary.v2.uploader
        .upload_stream({ folder: "products" }, (error, result) => {
          if (error || !result) return reject(error);
          resolve({ url: result.secure_url, public_id: result.public_id });
        })
        .end(buffer);
    });
  },

  async createProduct(data: {
    name: string;
    category: string;
    price: number;
    quantity: number;
    unit: string;
    imageUrl: string;
    farmerId: number;
  }) {
    return prisma.product.create({ data });
  },

  async getAllProducts() {
    return prisma.product.findMany({ include: { farmer: true } });
  },
};
