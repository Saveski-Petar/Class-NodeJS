import express from "express";
import InventoryController from "../controllers/inventor.controller.js";

const inventoryController = new InventoryController();

const router = express.Router();

router.get("/:id?", inventoryController.getAllItems);
router.post("", inventoryController.addInventoryItem);
router.put("/:id", inventoryController.updateInventoryItem);

export default router;
