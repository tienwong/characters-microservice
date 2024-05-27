const express = require('express')
const { getCharactersBySeriesId } = require('../controllers/characterControllers')

const router = express.Router({ mergeParams: true })

router.get('/', (req, res) => {
    const characters = getCharactersBySeriesId(req.params.seriesId)
    if (characters.length === 0) {
        res.status(404).json({
            message: "No characters were found with the specified series ID."
        })
    }
    res.status(200).json({
        characters
    })
})

router.get('/:characterId', (req, res) => {
    res.send('Hello from GET /:characterId route of characters!')
})

router.post('/', (req, res) => {
    res.send('Hello from POST / route of characters!')
})

router.put('/:characterId', (req, res) => {
    res.send('Hello from GET /:characterId route of characters!')
})

router.delete('/:characterId', (req, res) => {
    res.send('Hello from GET /:characterId route of characters!')
})

module.exports = router