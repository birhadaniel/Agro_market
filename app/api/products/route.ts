import { NextResponse } from "next/server";
import { productService } from "@/service/product/new-product";


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const requiredFields = [
      "name",
      "category",
      "price",
      "quantity",
      "unit",
      "farmerId",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required.` },
          { status: 400 }
        );
      }
    }

    const product = await productService.createProduct({
      ...body,
      price: parseFloat(body.price),
      quantity: parseInt(body.quantity),
      farmerId: parseInt(body.farmerId),
    });

    return NextResponse.json(
      { message: "Product added successfully", product },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
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