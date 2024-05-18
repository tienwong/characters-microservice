const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send('Hello from the root route!')
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})