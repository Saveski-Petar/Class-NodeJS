import { Router } from 'express'
import AlbumController from '../controller/albums.controllers.js'
const router = Router()

router.post('/', AlbumController.addNewAlbum)
router.get('/:albumName', AlbumController.getAlbum)

export default router
