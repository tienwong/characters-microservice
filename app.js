const express = require('express')
const characterRouter = require('./routes/characterRoutes')
const seriesRouter = require('./routes/seriesRoutes')

const app = express()

app.use('/series', seriesRouter)

app.use('/characters', characterRouter)

module.exports = app