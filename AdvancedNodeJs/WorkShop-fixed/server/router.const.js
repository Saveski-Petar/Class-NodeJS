import { Router } from 'express'
import artistRouter from './routes/artist.routes.js'
import songRouter from './routes/songs.routes.js'
import albumRouter from './routes/albums.routes.js'

const router = Router()

// Artist ROuter
router.use('/artist', artistRouter)

// Songs Router
router.use('/song', songRouter)

// Albums router
router.use('/album', albumRouter)

export default router
