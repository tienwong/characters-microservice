const express = require('express')
const { getByCharacterId, createNewCharacter } = require('../controllers/characterControllers')

const router = express.Router()

router.get('/:characterId', (req, res) => {
    const character = getByCharacterId(req.params.characterId)
    if (!character) {
        res.status(404).json({
            error: "The character with the specified characterId could not be found."
        })
    }
    res.status(200).json({
        character
    })
})

router.post('/', (req, res) => {
    const { username, seriesId } = req.body
    if (!username || !seriesId) {
        res.status(400).json({
            error: 'Username and seriesId are required to create a new character.'
        })
    }
    createNewCharacter(username, seriesId)
    res.status(200).json({
        message: 'New character successfully created.'
    })
})

router.put('/:characterId', (req, res) => {
    res.send('Hello from GET /:characterId route of characters!')
})

router.delete('/:characterId', (req, res) => {
    res.send('Hello from GET /:characterId route of characters!')
})

module.exports = router