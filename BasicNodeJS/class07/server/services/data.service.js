import { json } from "express";
import fs from "node:fs";
export const writeData = (path, data) => {
  const stringifiedData = JSON.stringify(data, 0, 2);
  fs.writeFileSync(path, stringifiedData, (err) => console.log(err));
};
export const readData = (path) => JSON.parse(fs.readFileSync(path, "utf-8"));
