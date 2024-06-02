const express = require('express')
const characterRouter = require('./routes/characterRoutes')
const seriesRouter = require('./routes/seriesRoutes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use('/series', seriesRouter)

app.use('/characters', characterRouter)

module.exports = app