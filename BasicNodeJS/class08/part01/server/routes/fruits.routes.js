import express from "express";
import { fruitSession } from "../sessions/sessions.const.js";

const router = express.Router();

const fruits = [
  {
    name: "Strawberry",
    price: 10,
  },
  {
    name: "Banana",
    price: 10,
  },
];

router.get("/", fruitSession, (req, res) => {
  console.log(req.session);
  res.status(200).send(fruits);
});

export default router;
