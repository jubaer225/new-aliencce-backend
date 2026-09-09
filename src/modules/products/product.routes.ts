import { Router } from "express";

import { createProductController } from "./product.controller.js";

const router = Router()

router.post("/", createProductController);

export default router;