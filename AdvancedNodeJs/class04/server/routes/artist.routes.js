import { Router } from "express";
import ArtistController from "../controllers/artist.controllers.js";
const router = Router();

router.post("/", ArtistController.addNewArtist);
router.get("/:name?", ArtistController.getArtists);
router.patch("/:id/songs", ArtistController.updateSongs);

export default router;
