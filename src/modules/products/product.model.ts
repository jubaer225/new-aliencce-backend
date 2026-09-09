import { Schema, model } from "mongoose";
import { productImage, Iproduct } from "./product.types.js";

const ProductImageSchema = new Schema<productImage>(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    publicId: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    _id: false,
  }
);

const ProductSchema = new Schema<Iproduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    compareAtPrice: {
      type: Number,
      min: 0,
    },
    sku: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    images: {
      type: [ProductImageSchema],
      default: [],
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["draft", "active", "archive"],
      default: "draft",
    }
  },
  {
    timestamps: true
  }
)

export const Product = model<Iproduct>("Product", ProductSchema);