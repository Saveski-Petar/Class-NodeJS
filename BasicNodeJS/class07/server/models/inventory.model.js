import * as dataService from "../services/data.service.js";
import { v4 as uuidv4 } from "uuid";

const inventoryDataPath = "./data/inventory.json";

export default class InventoryModel {
  getAllItems() {
    try {
      return new Promise((resolve, reject) => {
        const inventoryItems = dataService.readData(inventoryDataPath);
        resolve(inventoryItems);
      });
    } catch (error) {}
  }
  getItemByID(id) {
    return new Promise(async (resolve, reject) => {
      const items = await this.getAllItems();

      const item = items.find((item) => item.id === id);
      if (!item) {
        reject("item not found");
      }
      resolve(item);
    });
  }
  addInventoryItem(body) {
    return new Promise(async (resolve, reject) => {
      const items = await this.getAllItems();

      const createdInventoryItems = {
        ...body,
        id: uuidv4(),
      };

      items.push(createdInventoryItems);

      dataService.writeData(inventoryDataPath, items);

      resolve(createdInventoryItems);
    });
  }
  updateInventoryItem(id, body) {
    return new Promise(async (resolve, reject) => {
      const items = await this.getAllItems();

      const index = items.findIndex((item) => item.id === id);

      if (index === -1) {
        reject("item cant be found");
      }
      items[index] = {
        ...body,
        id,
      };
      dataService.writeData(inventoryDataPath, items);
      resolve(items[index]);
    });
  }
}
