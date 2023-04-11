import { Router } from "express";
import AlbumController from "../controllers/album.controller.js";

const router = Router();

router.post("/", AlbumController.addNewAlbum);
router.get("/:name?", AlbumController.getAlbum);

export default router;
