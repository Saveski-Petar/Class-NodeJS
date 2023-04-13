import { Router } from 'express'
import ArtistController from '../controller/artist.controllers.js'
const router = Router()

router.post('/', ArtistController.addNewArtist)
router.get('/:name?', ArtistController.getArtist)

export default router
