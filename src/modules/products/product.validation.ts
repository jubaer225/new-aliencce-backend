import {z} from "zod";

export const createProductSchema = z.object({
  name: z.string().trim().min(2).max(200),

  description: z.string().trim().min(10),

  slug: z.string().trim().min(2).max(100).lowercase(),

  price: z.number().min(0).positive(),

  compareAtPrice: z.number().min(0).optional(),

  category: z.string().trim().min(2).max(100),

  brand: z.string().trim().min(2).max(100).optional(),

  sku: z.string().trim().min(2).max(100).uppercase(),
  
  images: z.array(z.object({url: z.string().url(), publicId: z.string()})),

  stock: z.number().int().min(0).default(0),

  status: z.enum(["draft", "active", "archive"]).default("draft"),
});

export type createProductType = z.infer<typeof createProductSchema>;