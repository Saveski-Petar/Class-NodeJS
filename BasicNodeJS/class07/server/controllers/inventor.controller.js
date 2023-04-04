import InventoryModel from "../models/inventory.model.js";

const inventoryModel = new InventoryModel();

export default class InventoryController {
  async getAllItems(req, res) {
    const shouldGetAllItems = !req.params.id;
    try {
      if (shouldGetAllItems) {
        const items = await inventoryModel.getAllItems();
        res.status(200).send(items);
        console.log(items);
      } else {
        const item = await inventoryModel.getItemByID();
        res.status(200).send(item);
        console.log(item);
      }
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    }
  }

  async addInventoryItem(req, res) {
    const body = req.body;

    try {
      const createdItem = await inventoryModel.addInventoryItem(body);
      res.status(201).send(createdItem); //201 status is for creating
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async updateInventoryItem(req, res) {
    const body = req.body;
    const id = req.params.id;
    try {
      const updatedItem = await inventoryModel.updateInventoryItem(id, body);
      res.status(200).send(updatedItem);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}
