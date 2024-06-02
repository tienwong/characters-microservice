const express = require('express')
const { getByCharacterId, createNewCharacter, updateCharacter, deleteCharacter } = require('../controllers/characterControllers')

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
    const { username, seriesId, bio } = req.body
    const createSuccessful = createNewCharacter(username, seriesId, bio)
    if (!createSuccessful) {
        res.status(400).json({
            error: 'Username and seriesId are required to create a new character.'
        })
    }
    res.status(200).json({
        message: 'New character successfully created.'
    })
})

router.put('/:characterId', (req, res) => {
    const updateSuccessful = updateCharacter(req.params.characterId, req.body)
    if (!updateSuccessful) {
        res.status(404).json({
            error: 'Could not find character with the specified characterId.'
        })
    }
    res.status(200).json({
        message: 'Character successfully updated'
    })
})

router.delete('/:characterId', (req, res) => {
    const deleteSuccessful = deleteCharacter(req.params.characterId)
    if (!deleteSuccessful) {
        res.status(404).json({
            error: 'Could not find character with the specified characterId.'
        })
    }
    res.status(200).json({
        message: 'Character successfully deleted.'
    })
})

module.exports = router