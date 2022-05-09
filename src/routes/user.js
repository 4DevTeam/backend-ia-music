import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const router = require('express').Router()

//Check status user route
router.get('/', (req, res) => {
    res.send({
        message: 'Bienvenido a la ruta de usuarios'
    })
})

export default router