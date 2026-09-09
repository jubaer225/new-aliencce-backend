import { createProductType } from "./product.validation.js"
import { Product } from "./product.model.js"

export const createProduct = async(data: createProductType) => {
  const product = await Product.create(data);
  return product;
}