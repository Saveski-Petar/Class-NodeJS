import express from "express";
import inventoryRouter from "./routers/inventory.router.js";
// import productRouter from "./routers/product.router.js";
const router = express.Router();

// inventory
router.use("/inventory", inventoryRouter);
// products
// router.use("/products");
export default router;
