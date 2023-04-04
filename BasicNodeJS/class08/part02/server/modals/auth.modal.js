import bcrypt from "bcryptjs";
import DataService from "../services/data.service.js";
import { v4 as uuidv4 } from "uuid";
import {
  createAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} from "../jwt.const.js";

export default class AuthModel {
  async registerUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = {
      id: uuidv4(),
      username: userData.username,
      password: hashedPassword,
    };

    await DataService.saveFile("./data/users.json", [user]);

    const { password, ...whatIsLeftOfUser } = user;
  }
  async loginUser(userData) {
    const users = await DataService.readFile("./data/users.json");

    const user = users.find((user) => user.username === userData.username);

    if (!user) {
      throw new Error("User with that username is not found");
    }
    const valid = await bcrypt.compare(userData.password, user.password);

    if (valid) {
      const token = createAccessToken(user.id);
      console.log(token);

      //   create refressh token
      const refreshToken = createRefreshToken(user.id);

      //   adding refrehs token to user
      user.refreshTokens.push(refreshToken);
      const index = users.findIndex((user) => user.id === user.id);
      users[index] = user;
      DataService.saveFile("./data/users.json", users);

      const { password, ...whatIsLeftOfUser } = user;
      return { user: whatIsLeftOfUser, token, refreshToken };
    } else {
      throw new Error("invalid credentials");
    }
  }
  refreshToken(token) {
    const { userId } = verifyRefreshToken(token);

    if (!userId) throw new Error("user doesnt exist");

    const accessToken = createAccessToken(userId);

    const refreshToken = createRefreshToken(userId);
    return { accessToken, refreshToken };
  }
}

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyOTk1MzI4Yi00Y2QyLTRkOTYtYWQyMy0xMjk2NzE0MjFjMWYiLCJpYXQiOjE2Nzk2MDAzMjYsImV4cCI6MTY3OTYwMDkyNn0.jz99W8nw5f986Jt0A-46lzjPBF9Ft_OnqiJbbaW3HGI",
//"refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyOTk1MzI4Yi00Y2QyLTRkOTYtYWQyMy0xMjk2NzE0MjFjMWYiLCJpYXQiOjE2Nzk2MDAzMjYsImV4cCI6MTY4MDIwNTEyNn0.2v7VyFuCHblwV0hwGlFrEy6ZYGy_FRnpWZqzMAvFzDY"
