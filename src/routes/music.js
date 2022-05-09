import { createRequire } from 'module'
import { postSong } from '../controllers/music.js'

const require = createRequire(import.meta.url)
const router = require('express').Router()

//Check status music route
router.get('/', (req, res) => {
    res.send({
        message: 'Bienvenido a la ruta de musica'
    })
})

router.post('/song', postSong)

export default router