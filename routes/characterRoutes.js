const express = require('express')
const { getByUsername, createNewCharacter, updateCharacter, deleteCharacter } = require('../controllers/characterControllers')

const router = express.Router()

router.get('/:username', async (req, res) => {
    const character = await getByUsername(req.params.username)
    if (!character) {
        res.status(404).json({
            error: "The character with the specified username could not be found."
        })
    } else {
        res.status(200).json({
            character
        })
    }
})

router.post('/', async (req, res) => {
    const { username, seriesId, bio } = req.body
    const createSuccessful = await createNewCharacter(username, seriesId, bio)
    if (!createSuccessful) {
        res.status(400).json({
            error: 'Username and seriesId are required to create a new character.'
        })
    } else {
        res.status(200).json({
            message: 'New character successfully created.'
        })
    }
})

router.put('/:characterId', async (req, res) => {
    const updateSuccessful = await updateCharacter(req.params.characterId, req.body)
    if (!updateSuccessful) {
        res.status(404).json({
            error: 'Could not find character with the specified characterId.'
        })
    } else {
        res.status(200).json({
            message: 'Character successfully updated'
        })
    }
})

router.delete('/:characterId', async (req, res) => {
    const deleteSuccessful = await deleteCharacter(req.params.characterId)
    if (!deleteSuccessful) {
        res.status(404).json({
            error: 'Could not find character with the specified characterId.'
        })
    } else {
        res.status(200).json({
            message: 'Character successfully deleted.'
        })
    }
})

module.exports = router