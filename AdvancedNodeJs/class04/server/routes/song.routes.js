import { Router } from "express";
import SongControllers from "../controllers/song.controllers.js";
const router = Router();

router.post("/", SongControllers.addNewSong);
router.get("/:name?", SongControllers.getSong);
export default router;
