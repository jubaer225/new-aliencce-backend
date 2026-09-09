import express from "express";

import productRoutes from "./modules/products/product.routes.js"

const app = express();

app.use(express.json())

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Running again with Hello world"
  })
})

app.use("/api/products", productRoutes)

export default app;