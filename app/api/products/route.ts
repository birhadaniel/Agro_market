import { NextResponse } from "next/server";
import { productService } from "@/service/product/new-product";

export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("image") as File | null;
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;
    const price = parseFloat(formData.get("price") as string);
    const quantity = parseInt(formData.get("quantity") as string);
    const unit = formData.get("unit") as string;
    const farmerId = parseInt(formData.get("farmerId") as string);

    if (!name || !category || !price || !quantity || !unit || !farmerId) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    let imageUrl = "";
    if (file) {
      const upload = await productService.uploadImage(file);
      imageUrl = upload.url;
    }

    const product = await productService.createProduct({
      name,
      category,
      price,
      quantity,
      unit,
      imageUrl,
      farmerId,
    });

    return NextResponse.json({ message: "Product created successfully", product }, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const products = await productService.getAllProducts();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}