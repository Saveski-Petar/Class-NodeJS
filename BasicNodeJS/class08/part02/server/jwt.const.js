import pkg from "jsonwebtoken";
const { sign, verify } = pkg;

export const createAccessToken = (userId) =>
  sign({ userId }, "trotinet", {
    expiresIn: "1m",
  });

export const createRefreshToken = (userId) =>
  sign({ userId }, "smth_Secret", {
    expiresIn: "7d",
  });

export const verifyAccessToken = (token) => verify(token, "trotinet");
export const verifyRefreshToken = (token) => verify(token, "smth_Secret");
