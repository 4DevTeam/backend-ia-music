import { createRequire } from 'module'
import api from './routes/index.js'

const require = createRequire(import.meta.url)
const express = require('express')
const app = express()
const cors = require('cors')
const BodyParser = require('body-parser')
const { handleErrors } = require('./middlewares/handleErrors.cjs')
const fileUpload = require("express-fileupload");

//BodyParser in API
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())

//Cors
const corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

//Rutas
app.use('/api', api)
app.use(handleErrors)

export default app