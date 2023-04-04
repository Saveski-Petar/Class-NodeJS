// !IMPORT
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectToDatabase } from "./db/mongo-connection.js";
import router from "./router.const.js";

const app = express();

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOST || "localhost";

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(PORT, HOSTNAME, async (error) => {
  if (error) console.log("Error while starting serer ", error);

  await connectToDatabase();
  console.log(`server is listening on http://${HOSTNAME}:${PORT}`);
});

// !! index.js => main Router(/api) => OTher routes /products, /purchases, /users etc => controllers products.controller, purchases.controller etc =>
//!! => model products.model, purchases.model etc => DATABASE => and reverse to the front end.
