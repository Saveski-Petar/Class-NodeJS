import { verifyRefreshToken } from "../jwt.const.js";
import AuthModel from "../modals/auth.modal.js";

const authModel = new AuthModel();

export default class AuthController {
  async registerUser(req, res) {
    const userData = req.body;
    const newUser = await authModel.registerUser(userData);

    res.status(200).send(newUser);
  }
  async loginUser(req, res) {
    const userData = req.body;

    try {
      const loginData = await authModel.loginUser(userData);
      res.status(200).send(loginData);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  refreshToken(req, res) {
    const refreshToken = req.body.refreshToken;

    verifyRefreshToken(refreshToken);
    try {
      authModel.refreshToken(refreshToken);
    } catch (error) {
      res.sendStatus(400);
    }
  }
  logoutUser(req, res) {}
}
