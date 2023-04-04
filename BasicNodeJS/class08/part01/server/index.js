import Express from "express";
import cors from "cors";
import router from "./router.const.js";

const app = Express();
const PORT = 3000;
const HOSTNAME = "localhost";

app.use(cors());
app.use(Express.json());

app.use("/api", router);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening on http://${HOSTNAME}:${PORT}`);
});
