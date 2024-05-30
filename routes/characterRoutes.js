const express = require('express')
const { getByCharacterId } = require('../controllers/characterControllers')

const router = express.Router()

router.get('/:characterId', (req, res) => {
    const character = getByCharacterId(req.params.characterId)
    if (!character) {
        console.log('inside /:characterId')
        res.status(404).json({
            error: "The character with the specified characterId could not be found."
        })
    }
    res.status(200).json({
        character
    })
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