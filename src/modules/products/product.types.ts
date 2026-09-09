export interface productImage {
  url: string;
  publicId: string;
}

export type productStatus = "draft" | "active" | "archive";

export interface Iproduct {
  name: string;
  description: string;
  slug: string;

  price: number;
  compareAtPrice?: number;

  sku: string;

  category: string;
  brand?: string;

  images: [productImage];

  stock: number;

  status: productStatus;
}