import type { Request, Response } from "express";
import { createProductSchema } from "./product.validation.js";
import { createProduct } from "./product.service.js";

export const createProductController = async(req: Request, res: Response):Promise<void> => {
  const validateData = createProductSchema.parse(req.body)

  const product = await createProduct(validateData)

  res.status(201).json({
    success: true,
    message: "Product created Successfully",
    data: product,
  })
}