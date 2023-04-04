import express from "express";
import AuthController from "../controllers/auth.controllers.js";
import userValidator from "../middleware/user-validator.middleware.js";

const router = express.Router();

const authController = new AuthController();

router.post("/register", userValidator, authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/refresh-token", authController.refreshToken);
// router.post("/logout", authController.logout);

export default router;
