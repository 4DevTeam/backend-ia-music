import { createRequire } from 'module'
import app from './app.js'
const require = createRequire(import.meta.url)

require('dotenv').config()

//port
const { PORT = 3300 } = process.env

//Start server
app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}/api`)
})