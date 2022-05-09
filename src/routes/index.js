import { createRequire } from 'module'
import routerUser from './user.js'
import routerMusic from './music.js'

const require = createRequire(import.meta.url)
const router = require('express').Router()

router.use('/user', routerUser)

router.use('/music', routerMusic)

export default router