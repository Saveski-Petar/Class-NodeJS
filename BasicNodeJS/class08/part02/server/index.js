import express from "express";
import cors from "cors";
import router from "./router.const.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const HOSTNAME = "localhost";

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
