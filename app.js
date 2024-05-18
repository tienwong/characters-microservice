const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log(res)
    res.status(200).send('Hello from the root route!')
})

module.exports = app