import { Router } from 'express'
import SongController from '../controller/songs.controllers.js'
const router = Router()
router.post('/', SongController.addNewSong)
router.get('/:title?', SongController.getSong)

export default router
