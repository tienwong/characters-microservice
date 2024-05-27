const express = require('express')
const characterRouter = require('./routes/characterRoutes')

const app = express()

app.use('/:seriesId/characters', characterRouter)

module.exports = app