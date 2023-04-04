import express from "express";
import AdminController from "../controllers/admin.controller.js";
import productValidator from "../middlewares/product.validator.js";

const router = express.Router();

router.post("/", productValidator, AdminController.addProduct);
router.put("/:id", productValidator, AdminController.updateProduct);
router.delete("/:id", AdminController.removeProduct);

export default router;
