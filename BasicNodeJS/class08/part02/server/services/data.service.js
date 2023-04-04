import fs from "fs/promises";

export default class DataService {
  static async readFile(path) {
    const data = await fs.readFile(path, "utf-8");
    return JSON.parse(data);
  }

  static async saveFile(path, data) {
    return await fs.writeFile(path, JSON.stringify(data, 0, 2));
  }
}
