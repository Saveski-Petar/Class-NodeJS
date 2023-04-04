import { verifyAccessToken } from "../jwt.const.js";
import DataService from "../services/data.service.js";

const tokenValidator = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) res.sendStatus(403);

  const token = authHeader.split("_")[1];

  const { userId } = verifyAccessToken(token);

  const users = await DataService.readFile("./data/users/json");
  const user = users.find((user) => user.id === userId);

  if (!user) res.sendStatus(403);

  next();
};

export default tokenValidator;
